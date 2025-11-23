export default data = {
  root: {
    id: 0,
    name: "root",
    children: [
      {
        id: 1,
        name: "folder1",
        children: [
          {
            id: 3,
            name: "folder3",
            children: [
              { id: 7, name: "folder7" },
              { id: 8, name: "folder8" },
            ],
          },
          { id: 4, name: "folder4", children: [{ id: 9, name: "folder9" }] },
        ],
      },
      {
        id: 2,
        name: "folder2",
        children: [
          { id: 5, name: "folder5", children: [{ id: 10, name: "folder10" }] },
          { id: 6, name: "folder6" },
        ],
      },
    ],
  },
};
