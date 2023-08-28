import { useState } from "react";
import "./App.css";
import FileExplorer from "./components/FileExplorer/FileExplorer";
import fileData from "./utils/data.json";

function App() {
  const [rootFolders] = useState(fileData.filter((item) => !item.parent));

  return (
    <div className="App">
      <h1>File Explorer</h1>
      {rootFolders.map((item) => (
        <FileExplorer data={item} key={item.id} />
      ))}
    </div>
  );
}

export default App;
