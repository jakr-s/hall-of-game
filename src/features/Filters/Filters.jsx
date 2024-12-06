import { useDispatch, useSelector } from "react-redux";
import {
  setGenreFilter,
  setPlatformFilter,
  setYearFilter,
} from "../Games/gamesSlice";
import "./Filters.css";

export const Filters = () => {
  const dispatch = useDispatch();
  const { games, filters } = useSelector((state) => state.games);
  const { year } = filters;

  // Get filter values from Redux state
  const platform = filters.platform[0]; // Ensure it's a single value
  const genre = filters.genre[0]; // Ensure it's a single value
  return (
    <div className="filters">
      <select
        onChange={(e) => dispatch(setPlatformFilter([e.target.value]))}
        value={platform || ""}
      >
        <option value="">All Platforms</option>
        {Array.from(
          new Set(
            games.flatMap((game) => game.platforms.map((p) => p.platform.name)),
          ),
        )
          .sort((a, b) => a.localeCompare(b))
          .map((platform) => (
            <option key={platform} value={platform}>{platform}</option>
          ))}
      </select>

      <select
        onChange={(e) => dispatch(setGenreFilter([e.target.value]))}
        value={genre || ""}
      >
        <option value="">All Genres</option>
        {Array.from(
          new Set(games.flatMap((game) => game.genres.map((g) => g.name))),
        )
          .sort((a, b) => a.localeCompare(b))
          .map((genre) => <option key={genre} value={genre}>{genre}</option>)}
      </select>

      <select
        onChange={(e) => dispatch(setYearFilter(e.target.value))}
        value={year || ""}
      >
        <option value="">All Years</option>
        {Array.from(
          new Set(
            games.map((game) =>
              new Date(game.released).getFullYear().toString()
            ),
          ),
        )
          .sort((a, b) => a - b)
          .map((year) => <option key={year} value={year}>{year}</option>)}
      </select>
    </div>
  );
};
