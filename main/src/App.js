import axios from "axios";
import { useEffect, useState } from "react";
import XMLParser from "xml-js";
import JejuSearch from "./components/JejuSearch";

function App() {
  return (
    <div className="App">
      <JejuSearch />
    </div>
  );
}

export default App;
