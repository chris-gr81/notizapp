const sidebarListEl = document.querySelector(".sidebar-list");
const saveBtnEl = document.querySelector(".save-note");
const titleInputEl = document.getElementById("title-input");
const contentInputEl = document.getElementById("content-input");

saveBtnEl.addEventListener("click", () => {
  getUserInput();
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
  const notes = getNotes();
  sidebarListEl.innerHTML = "";
  const sortedNoteList = notes.sort(
    (a, b) => Number(b.lastUpdated) - Number(a.lastUpdated)
  );

  sortedNoteList.forEach((e) => {
    sidebarListEl.appendChild(createSidebarNote(e));
  });
}

function initializeContent() {
  noteList = getNotes();
  renderSidebar();
}

function getUserInput() {
  const title = titleInputEl.value;
  const text = contentInputEl.value;

  if (title == "" || text == "") {
    alert("Bitte Titel und Inhalt eingeben.");
    return;
  }
  saveNote(title, text);

  titleInputEl.value = "";
  contentInputEl.value = "";

  renderSidebar();
}
