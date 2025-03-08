const sidebarListEl = document.querySelector(".sidebar-list");
const noteList = [
  {
    id: 1,
    title: "Summertime",
    text: "Das ist, wenn die Sonne Scheint. Bacardi in der Hand und ab dafür.",
    lastUpdated: 1741438060033,
  },
  {
    id: 2,
    title: "Spring",
    text: "The spring is my love, There is a spring rezzling in the trees.",
    lastUpdated: 1741438034150,
  },
  {
    id: 3,
    title: "Winter",
    text: "Alles kalt, alles schneit. Furchtbar",
    lastUpdated: 1741438274150,
  },
];

function createSidebarNote(noteItem) {
  const sidebarNoteEl = document.createElement("div");
  sidebarNoteEl.classList.add("note-preview");

  const titleEl = document.createElement("div");
  titleEl.classList.add("note-preview-header");
  titleEl.appendChild(document.createTextNode(noteItem.title));

  const textEl = document.createElement("div");
  textEl.classList.add("note-preview-text");
  textEl.appendChild(document.createTextNode(noteItem.text));

  const timeEl = document.createElement("div");
  timeEl.classList.add("note-preview-timestamp");
  timeEl.appendChild(
    document.createTextNode(
      new Date(noteItem.lastUpdated).toLocaleString("de-DE")
    )
  );

  sidebarNoteEl.append(titleEl, textEl, timeEl);
  sidebarNoteEl.setAttribute("data-id", noteItem.id);

  return sidebarNoteEl;
}

function renderSidebar() {
  const sortedNoteList = noteList.toSorted(
    (a, b) => Number(b.lastUpdated) - Number(a.lastUpdated)
  );

  sortedNoteList.forEach((e) => {
    sidebarListEl.appendChild(createSidebarNote(e));
  });
}

renderSidebar();
