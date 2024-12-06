import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <span>
        Developed by
        <a
          className="github-logo"
          href="https://mattsteen14.github.io/portfolio/"
          target="_blank"
          rel="noreferrer"
        >
          Matt Steen-Brookes
        </a>
        . Powered by
        <a
          className="rawg-logo"
          href="https://www.rawg.io/"
          target="_blank"
          rel="noreferrer"
        >
          RAWG
        </a>
      </span>
    </footer>
  );
};
