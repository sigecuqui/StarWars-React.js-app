import "./index.scss";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Copyright © 2021{" "}
        <a
          className="footer-link"
          href="https://sigisweb.lt"
          target="_blank"
          rel="noopener noreferrer"
        >
          sigisweb
        </a>
      </p>
    </footer>
  );
}

export default Footer;
