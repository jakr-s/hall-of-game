import { Link } from "react-router-dom";
import "./Header.css";
import { HiOutlineSearch } from "react-icons/hi";
import { useFilterHandlers } from "../../utils/handlers";

export const Header = () => {
  const {
    searchTerm,
    setSearchTerm,
    handleSearch,
    handleReset,
  } = useFilterHandlers();
  return (
    <header>
      <div className="logo">
        <h1>HALL OF GAME</h1>
      </div>
      <div className="search-bar">
        <form className="search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="SEARCH"
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="search-icon"
            type="submit"
            aria-label="Search"
          >
            <HiOutlineSearch />
          </button>
        </form>
      </div>
      <Link
        className="reset-button"
        to="/"
        onClick={handleReset}
      >
        RESET
      </Link>
    </header>
  );
};
