import { Link } from "react-router-dom";

import "./index.scss";
import logo from "../../../assets/Star_Wars_logo.png";

function Header() {
  return (
    <header className="App-header">
      <Link to="/"><img className="App-logo" src={logo} /></Link>
    </header>
  );
}

export default Header;
