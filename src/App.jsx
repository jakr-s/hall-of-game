import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "./App.css";
import { fetchGamesThunk } from "./features/Games/gamesSlice";
// import { selectCurrentPage } from './features/Games/gamesSlice'
import { Header } from "./features/Header/Header";
import { GamesList } from "./features/Games/GamesList/GamesList";
import { GameDetails } from "./features/Games/GameDetails/GameDetails";
import { Footer } from "./features/Footer/Footer";

function App() {
  const dispatch = useDispatch();
  // const currentPage = selectCurrentPage();
  useEffect(() => {
    dispatch(fetchGamesThunk(1));
  }, [dispatch]);
  return (
    <Router>
      <Header />
      <main>
        <section className="game-view">
          <Routes>
            <Route path="/games/:id" element={<GameDetails />} />
            <Route path="/" element={<GamesList />} />
          </Routes>
        </section>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
