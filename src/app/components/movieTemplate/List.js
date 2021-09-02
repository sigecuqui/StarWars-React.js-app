import "./index.scss";
import { Component } from "react";
import axios from "axios";
import shortid from "shortid";

const baseUrlMovie = "https://swapi.dev/api/films/";

export default class List extends Component {
  state = {
    list: [],
    modalVisible: false,
  };

  componentWillMount() {
    axios(baseUrlMovie)
      .then((resp) => {
        this.setState({ list: resp.data.results });
      })
      .catch(() => {
        alert("Error");
      });
  }

  load(movie) {
    this.props.openModal(movie);
  }

  renderTable() {
    return (
      <table className="App-table">
        <thead>
          <tr>
            <th>Films</th>
          </tr>
        </thead>
        <tbody>{this.renderRows()}</tbody>
      </table>
    );
  }

  renderRows() {
    return this.state.list.map((movie) => {
      return (
        <tr className="App-table--film_list" onClick={() => this.load(movie)} key={shortid.generate()}>
          <td>{movie.title}</td>
        </tr>
      );
    });
  }

  render() {
    return <div className="App-table--container">{this.renderTable()}</div>;
  }
}
