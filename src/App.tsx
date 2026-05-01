import { useState, type JSX } from "react";
import { Navbar } from "./components";
import { Home } from "./pages";
import "./App.css";

interface Page {
  name: string;
  element: JSX.Element;
}

const pages: Page[] = [{ name: "Home", element: <Home /> }];

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(pages[0]);

  return (
    <div className="w-screen min-h-screen bg-lightGray">
      <Navbar>
        <button
          className="font-medium cursor-pointer hover:scale-105 duration-75"
          onClick={() => setCurrentPage(pages[0])}
        >
          UDCompass
        </button>
      </Navbar>
      <div className="pt-20 w-full sm:max-w-[80%] mx-auto px-5">
        {currentPage.element}
      </div>
    </div>
  );
}

export default App;
