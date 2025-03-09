const sidebarListEl = document.querySelector(".sidebar-list");
const saveBtnEl = document.querySelector(".save-note");
const titleInputEl = document.getElementById("title-input");
const contentInputEl = document.getElementById("content-input");
let currentId = null;

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
  sidebarNoteEl.addEventListener("click", (e) => {
    selectCardByClick(e);
  });

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

function renderContent(title, text) {
  titleInputEl.value = title;
  contentInputEl.value = text;
}

function initializeContent() {
  noteList = getNotes();
  renderSidebar();
}

function getUserInput() {
  const title = titleInputEl.value;
  const text = contentInputEl.value;
  const id = currentId; // aus globaler Variable gezogen, null wenn nicht gesetzt

  if (title == "" || text == "") {
    alert("Bitte Titel und Inhalt eingeben.");
    return;
  }
  saveNote(title, text, id);

  titleInputEl.value = "";
  contentInputEl.value = "";

  renderSidebar();
}

function selectCardByClick(e) {
  const notes = getNotes();
  if (e.currentTarget.classList.contains("selected-note")) {
    return;
  }

  const notePreviewEls = document.querySelectorAll(".note-preview");
  notePreviewEls.forEach((notePrev) => {
    notePrev.classList.remove("selected-note");
  });

  e.currentTarget.classList.add("selected-note");
  const inputId = e.currentTarget.dataset.id;
  const selectedNote = notes.find((note) => {
    return note.id == inputId;
  });

  currentId = inputId; // setzen offene ID global in den Speicher
  renderContent(selectedNote.title, selectedNote.text);
}
