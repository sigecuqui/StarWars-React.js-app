import React from "react";

export default (props) => {
  let styles = props.visible ? { display: "block" } : { display: "none" };

  return (
    <div style={styles}>
      <div className="App-film_detail">
        <label className="App-table--label">Title</label>
        <div>{props.movie.title}</div>
      </div>

      <div className="App-film_detail--group">
        <div className="App-film_detail">
          <label className="App-table--label">Episode</label>
          <div>{props.movie.episode_id}</div>
        </div>
      </div>

      <div className="App-film_detail--group">
        <div className="App-film_detail">
          <label className="App-table--label">Release date</label>
          <div>{new Date(props.movie.release_date).toLocaleDateString()}</div>
        </div>
      </div>
    </div>
  );
};
