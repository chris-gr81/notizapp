const sidebarListEl = document.querySelector(".sidebar-list");
const noteList = [
  {
    id: 1,
    title: "Summertime",
    text: "Das ist, wenn die Sonne Scheint.Glaub mir, so ist das.",
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
    document.createTextNode(formateTimestamp(noteItem.lastUpdated))
  );
  timeEl.create;

  sidebarNoteEl.append(titleEl, textEl, timeEl);
  sidebarNoteEl.setAttribute("id", noteItem.id);

  return sidebarNoteEl;
}

function formateTimestamp(lastUpdated) {
  return new Date(lastUpdated).toLocaleString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
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
