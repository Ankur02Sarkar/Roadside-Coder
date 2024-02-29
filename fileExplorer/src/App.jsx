import { useState } from "react";
import "./App.css";
import explorer from "./data";

const Folder = ({ folderItem, level = 0 }) => {
  const [show, setShow] = useState(false);
  const [val, setVal] = useState("")
  const [showForm, setShowForm] = useState({
    visible: false,
    isFolder: null
  });

  const handleClick = (e) => {
    e.stopPropagation();
    setShow(!show);
  };
  const addFolder = (e, parentItem) => {
    e.stopPropagation();
    setShowForm({
      visible: true,
      isFolder: true
    });
  };
  const addFile = (e, parentItem) => {
    e.stopPropagation();
    setShowForm({
      visible: true,
      isFolder: false
    });
  };

  const handleSave = (e, isFolder) => {
    setShow(false)
    e.stopPropagation();
    const id = generateUniqueId()
    const newItem = {
      "id": id,
      "name": val,
      "isFolder": isFolder,
      "items": []
    };
    folderItem.items.push(newItem);
    setShow(true)
  }

  function generateUniqueId() {
    return 'id-' + new Date().getTime();
  }


  return (
    <div onClick={handleClick}>
      <div style={{ cursor: "pointer", display: "flex", gap: "1rem" }}>
        <span>📁 {folderItem.name}</span>
        <div>
          <button onClick={(e) => addFolder(e)}>+ Folder</button>
          <button onClick={(e) => addFile(e)}>+ File</button>
        </div>
      </div>
      {showForm.visible &&
        <div>
          {showForm.isFolder ? "📁" : "📄"}
          <input type="text" onChange={(e) => setVal(e.target.value)} placeholder={showForm.isFolder ? "Enter Folder Name" : "Enter File Name"} />
          <button onClick={(e) => handleSave(e, showForm.isFolder)}>Save</button>
        </div>
      }
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
