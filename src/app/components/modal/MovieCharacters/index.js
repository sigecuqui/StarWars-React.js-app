import React from "react";

export default (props) => {
  let styles = props.visible ? { display: "block" } : { display: "none" };

  function renderRows() {
    return props.characters.map((character) => {
      return (
        <tr key={character.id}>
          <td className="table-desc">{character.name}</td>
          <td>{character.birth_year}</td>
          <td>{character.mass}</td>
        </tr>
      );
    });
  }

  function renderTable() {
    return (
      <table className="table table-modal scroll">
        <thead>
          <tr>
            <th className="table-desc">Name</th>
            <th>Birth year</th>
            <th>Mass (Kg)</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    );
  }

  return (
    <div style={styles}>
      <div className="detail">
        <label className="App-table--label">Film characters</label>
        {renderTable()}
      </div>
    </div>
  );
};
