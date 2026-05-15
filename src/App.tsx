import { Navbar, Search } from "@components";
import { useGeneralStoe } from "@utils/zustand";
import { PAGES } from "@utils/constants";
import "./App.css";

function App() {
  const CurrentPage = useGeneralStoe((state) => state.currentPage);
  const setCurrentPage = useGeneralStoe((state) => state.setCurrentPage);

  return (
    <div className="app">
      <Navbar>
        <button
          className="app-main-button"
          onClick={() => setCurrentPage(PAGES.Home)}
        >
          UDCompass
        </button>
        <Search />
      </Navbar>
      <div className="app-page">
        <CurrentPage />
      </div>
    </div>
  );
}

export default App;
