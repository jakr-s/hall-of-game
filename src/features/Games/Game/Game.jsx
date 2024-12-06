import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Game.css";
import { SiMetacritic } from "react-icons/si";
import { useFilterHandlers } from "../../../utils/handlers";
import { ParentPlatformIcons } from "../../../components/PlatformIcons/ParentPlatformIcons";

export const Game = ({ game }) => {
  const {
    handleYearClick,
  } = useFilterHandlers();
  return (
    <div className="game">
      <div className="game-image-container">
        <Link to={`/games/${game.id}`}>
          <img
            src={game.background_image}
            alt={game.name}
            className="game-cover"
          />
        </Link>
      </div>
      <div className="game-name">
        <Link to={`/games/${game.id}`}>
          {game.name}
        </Link>
      </div>
      <div className="middle-row">
        <a
          className="game-year"
          onClick={(e) =>
            handleYearClick(e, new Date(game.released).getFullYear())}
        >
          {new Date(game.released).getFullYear()}
        </a>
        <a
          className="rating"
          href={`https://www.metacritic.com/game/${game.slug}`}
          target="_blank"
        >
          <SiMetacritic /> {game.metacritic || "N/A"}
        </a>
      </div>
      <div className="game-platforms">
        <ParentPlatformIcons parentPlatforms={game.parent_platforms} />
      </div>
    </div>
  );
};

Game.propTypes = {
  game: PropTypes.object.isRequired,
};
