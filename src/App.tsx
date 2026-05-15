import { Navbar, Search } from "@components";
import { useGeneralStoe } from "@utils/zustand";
import { PAGES } from "@utils/constants";
import "./App.css";

function App() {
  const CurrentPage = useGeneralStoe((state) => state.currentPage);
  const setCurrentPage = useGeneralStoe((state) => state.setCurrentPage);

  return (
    <div className="w-screen min-h-screen bg-lightGray">
      <Navbar>
        <button
          className="font-medium cursor-pointer hover:scale-105 duration-75"
          onClick={() => setCurrentPage(PAGES.Home)}
        >
          UDCompass
        </button>
        <Search />
      </Navbar>
      <div className="pt-20 w-full sm:max-w-[80%] mx-auto px-5">
        <CurrentPage />
      </div>
    </div>
  );
}

export default App;
