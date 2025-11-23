import { useState } from "react";

export default function Item({ item, deleteNode, editItem, addItem }) {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");

  const handleEdit = (id) => {
    editItem(id, text);
    setEdit(false);
  };

  if (!item) return;
  return (
    <div className="file-item">
      <div className="file-content">
        {edit ? (
          <span>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <span onClick={() => handleEdit(item.id)}>✔️</span>
          </span>
        ) : (
          item.name
        )}
        <div>
          <span>➕</span>
          {!edit && <span onClick={() => setEdit(true)}>🖊️</span>}
          <span onClick={() => deleteNode(item.id)}>✘</span>
        </div>
      </div>
      {item.children &&
        item.children.length > 0 &&
        item.children.map((child) => {
          return (
            <Item item={child} deleteNode={deleteNode} editItem={editItem} />
          );
        })}
    </div>
  );
}
