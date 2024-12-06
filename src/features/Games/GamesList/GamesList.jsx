import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./GamesList.css";
import { fetchGamesThunk } from "../gamesSlice";
import { useFilterHandlers } from "../../../utils/handlers";
import { filterGames } from "../../Filters/filterGames";
import { Filters } from "../../Filters/Filters";
import { Loading } from "../../../components/Loading/Loading";
import { Card } from "../../../components/Card/Card";
import { Game } from "../Game/Game";
import { PageSelect } from "../../Pages/PageSelect";

export const GamesList = () => {
  const dispatch = useDispatch();
  const { games, loading, error, filters } = useSelector((state) =>
    state.games
  );
  const { year, parentPlatform, search } = filters;

  // Get filter values from Redux state
  const platform = filters.platform[0];
  const genre = filters.genre[0];
  const { currentPage } = useFilterHandlers();

  useEffect(() => {
    // Fetch games only if the game list is empty
    dispatch(fetchGamesThunk({ page: currentPage, filters }));
  }, [dispatch, currentPage, filters]);

  // Filter games based on search and filters in Redux
  const filteredGames = useMemo(
    () => filterGames(games, { search, platform, genre, year, parentPlatform }),
    [games, search, platform, genre, year, parentPlatform],
  );

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <div className="error-header">
          <h1>Game Over!</h1>
          <h2>Error:</h2>
          <h3>{error}</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="games-list-container">
      {/* Filter Dropdowns */}
      <Filters />

      {/* Games List */}
      <div className="games-list">
        {filteredGames.map((game) => (
          <Card key={game.id}>
            <Game game={game} />
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <PageSelect />
    </div>
  );
};
