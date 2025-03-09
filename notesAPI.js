let noteList = [];

function saveNote() {
  const title = document.getElementById("title-input").value;
  const text = document.getElementById("content-input").value;
  if (title == "" || text == "") {
    alert("Bitte Titel und Inhalt eingeben.");
  } else {
    const id = noteList.length + 1;
    const time = Date.now();
    noteList.push({ id: id, title, title, text: text, lastUpdated: time });

    localStorage.setItem("noteList", JSON.stringify(noteList));
    renderSidebar();
  }
}

function loadList() {
  const loadedList = JSON.parse(localStorage.getItem("noteList"));
  if (loadedList === null) {
    return [];
  } else {
    return loadedList;
  }
}
