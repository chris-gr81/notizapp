const sidebarListEl = document.querySelector(".sidebar-list");
const saveBtnEl = document.querySelector(".save-note");

saveBtnEl.addEventListener("click", () => {
  saveNote();
});
document.addEventListener("DOMContentLoaded", () => {
  initializeContent();
});

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
  sidebarListEl.innerHTML = "";
  const sortedNoteList = noteList.toSorted(
    (a, b) => Number(b.lastUpdated) - Number(a.lastUpdated)
  );

  sortedNoteList.forEach((e) => {
    sidebarListEl.appendChild(createSidebarNote(e));
  });
}

function initializeContent() {
  noteList = loadList();
  renderSidebar();
}
