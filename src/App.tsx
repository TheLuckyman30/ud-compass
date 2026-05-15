import { Navbar, Search } from "@components";
import { useGeneralStore } from "@utils/zustand";
import { PAGES } from "@utils/constants";
import "./App.css";

function App() {
  const CurrentPage = useGeneralStore((state) => state.currentPage);
  const setCurrentPage = useGeneralStore((state) => state.setCurrentPage);

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
