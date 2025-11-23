import { useState } from "react";
import Item from "./Item";
import data from "../data";
export default function FileExplorer() {
  const [fileHierarchy, setFileHierarchy] = useState(data.root);

  const traverse = (node, targetId, action, newName) => {
    if (!node) return null;
    if (node.children && node.children.length > 0) {
      node.children = node.children.map((child) =>
        traverse(child, targetId, action, newName)
      );
    }
    if (node.id !== targetId) {
      return node;
    } else {
      if (action === "delete") {
        return null;
      }
      if (action === "edit") {
        return { ...node, name: newName };
      }
      if (action === "add") {
        return (node.children = [{ id: Date.now(), name: newName }]);
      }
    }
  };

  const deleteItem = (id) => {
    setFileHierarchy((prev) => {
      const deepCloneCopy = JSON.parse(JSON.stringify(prev));
      const copyAfterDeletion = traverse(deepCloneCopy, id, "delete");
      setFileHierarchy(copyAfterDeletion);
    });
  };

  const editItem = (id, newName) => {
    setFileHierarchy((prev) => {
      const deepCloneCopy = JSON.parse(JSON.stringify(prev));
      const copyAfterEdit = traverse(deepCloneCopy, id, "edit", newName);
      setFileHierarchy(copyAfterEdit);
    });
  };

  const addItem = (id, newName) => {
    setFileHierarchy((prev) => {
      const deepCloneCopy = JSON.parse(JSON.stringify(prev));
      const copyAfterAdd = traverse(deepCloneCopy, id, "add", newName);
      setFileHierarchy(copyAfterAdd);
    });
  };

  return (
    <Item
      item={fileHierarchy}
      deleteNode={deleteItem}
      editItem={editItem}
      addItem={addItem}
    />
  );
}
