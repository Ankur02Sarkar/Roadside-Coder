import { useState } from "react";
import "./App.css";
import explorer from "./data";

const Folder = ({ folderItem, level = 0 }) => {
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation(); // important to avoid rerender of parent folder
    setShow(!show);
  };

  return (
    <div onClick={handleClick}>
      <div style={{ cursor: "pointer" }}>📁 {folderItem.name}</div>
      {show && (
        <div style={{ marginLeft: `${level * 1.25}rem` }}>
          {folderItem.items.map((item, index) => (
            <div key={index}>
              {item.isFolder ? (
                <Folder folderItem={item} level={level + 1} />
              ) : (
                <File fileItem={item} level={level + 1} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const File = ({ fileItem }) => {
  return <div style={{ cursor: "pointer" }}>📄 {fileItem.name}</div>;
};

function App() {
  const [item, setItem] = useState(explorer);

  return (
    <div>
      <div className="item">
        {item.isFolder ? (
          <Folder folderItem={item} />
        ) : (
          <File fileItem={item} />
        )}
      </div>
    </div>
  );
}

export default App;
