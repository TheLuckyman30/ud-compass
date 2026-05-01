import { Navbar } from "./components";
import { Home } from "./pages";
import { useGeneralStoe } from "./utils/zustand/general-store";
import type { JSX } from "react";
import "./App.css";

interface Page {
  name: string;
  element: JSX.Element;
}

const pages: Page[] = [{ name: "Home", element: <Home /> }];

function App() {
  const currentPage = useGeneralStoe((state) => state.currentPage);
  const setCurrentPage = useGeneralStoe((state) => state.setCurrentPage);

  return (
    <div className="w-screen min-h-screen bg-lightGray">
      <Navbar>
        <button
          className="font-medium cursor-pointer hover:scale-105 duration-75"
          onClick={() => setCurrentPage(0)}
        >
          UDCompass
        </button>
      </Navbar>
      <div className="pt-20 w-full sm:max-w-[80%] mx-auto px-5">
        {pages[currentPage].element}
      </div>
    </div>
  );
}

export default App;
