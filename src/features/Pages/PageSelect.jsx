import "./PageSelect.css";
import { useFilterHandlers } from "../../utils/handlers";

export const PageSelect = () => {
  const {
    currentPage,
    handleNextPage,
    handlePreviousPage,
  } = useFilterHandlers();

  return (
    <div className="page-select">
      <button onClick={handlePreviousPage} disabled={currentPage === 1}>
        {"<"} Previous Page
      </button>
      <span>Page {currentPage}</span>
      <button onClick={handleNextPage}>Next Page {">"}</button>
    </div>
  );
};
