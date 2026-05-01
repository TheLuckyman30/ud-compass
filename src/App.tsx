import { useState, type JSX } from "react";
import "./App.css";
import { Navbar } from "./components";

interface Page {
  name: string;
  element: JSX.Element;
}

const pages: Page[] = [];

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(pages[0]);

  return (
    <div className="w-screen min-h-screen">
      <Navbar>
        <button
          className="font-medium cursor-pointer hover:scale-105 duration-75"
          onClick={() => setCurrentPage(pages[0])}
        >
          UDCompass
        </button>
      </Navbar>
    </div>
  );
}

export default App;
