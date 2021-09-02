import React, { Component } from "react";
import MovieMainData from "../MovieMainData";
import MovieCharacters from "../MovieCharacters";
import axios from "axios";
import shortid from "shortid";

import "./index.scss";

const initialState = {
  showMainData: true,
  showCharacters: false,
  isLoading: false,
  characters: [],
};

export default class MovieModal extends Component {
  constructor(props) {
    super(props);

    this.state = { ...initialState };

    this.showCharacters = this.showCharacters.bind(this);
    this.setTabMain = this.setTabMain.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  showCharacters(charactersUrls) {
    this.setTabCharacters();

    if (this.state.characters.length) {
      return;
    }

    this.loadCharacters(charactersUrls);
  }

  loadCharacters(charactersUrls) {
    this.setState({ isLoading: true });

    let promises = charactersUrls.map((character) => {
      return new Promise((resolve, reject) => {
        axios(character).then(resolve).catch(reject);
      });
    });

    Promise.all(promises)
      .then((resp) => {
        let characters = resp.map((character) => {
          return {
            id: shortid.generate(),
            name: character.data.name,
            birth_year: character.data.birth_year,
            mass: character.data.mass,
          };
        });
        this.setState({ characters, isLoading: false });
      })
      .catch(() => {
        alert("Error");
      });
  }

  setTabCharacters() {
    this.setState({
      showCharacters: true,
      showMainData: false,
    });
  }

  setTabMain() {
    this.setState({
      showCharacters: false,
      showMainData: true,
    });
  }

  resetState() {
    this.setState({ ...initialState });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.modalVisible) {
      this.resetState();
    }
  }

  render() {
    let styleModal = this.props.modalVisible
      ? { display: "block" }
      : { display: "none" };
    let characterSelected = this.state.showCharacters ? "App-modal--selected" : "";
    let mainSelected = this.state.showCharacters ? "" : "App-modal--selected";

    return (
      <div style={styleModal} className="App-modal">
        <div className="App-modal--content">
          <div className="App-modal--header">
            <button
              type="button"
              className="App-modal--close"
              onClick={this.props.closeModal}
            >
              <span>&times;</span>
            </button>
            <p className="ml-10">Film details</p>
          </div>

          <div className="App-modal--body">
            <MovieMainData
              movie={this.props.movie}
              visible={this.state.showMainData}
            />
            <MovieCharacters
              characters={this.state.characters}
              visible={this.state.showCharacters}
            />
          </div>

          <div className="App-modal--footer">
            <div className="App-modal--footer_content">
              <button
                className={`App-modal--btn-nav ${mainSelected}`}
                href="#"
                onClick={this.setTabMain}
              >
                Film
              </button>
              <button
                className={`App-modal--btn-nav ml-10 ${characterSelected}`}
                href="#"
                onClick={() => this.showCharacters(this.props.movie.characters)}
              >
                People
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}