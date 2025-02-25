const SW_VERSION = '1.0.0';

let counter = 1

self.onmessage = (e) => {
    console.log("event", e)
    console.log("e.data", e.data)
    if (e.data === 'ping') {
        self.postMessage({msg: `pong count: ${counter++}`})
    } else if (e.data === 'clear') {
        counter = 1
        self.postMessage({msg: null, mode: null})
    } else if (e.data.headers.type === 'GetNote') {
        getNote(e.data.headers.requestId, e.data.payload.id)
    } else if (e.data.headers.type === 'GetNotes') {
        getNotes(e.data.headers.requestId)
    } else if (e.data.headers.type === 'SaveNote') {
        saveNote(e.data.headers.requestId, e.data.payload)
    } else if (e.data.headers.type === 'DeleteNote') {
        deleteNote(e.data.headers.requestId, e.data.payload.id)
    } else if (e.data.headers.type === 'UpdateNote') {
        updateNote(e.data.headers.requestId, e.data.payload)
    } else {
        throw new Error(`Unknown message type: ${e.data.headers.type}`)
    }
}

const notes = [
    {id: 1, title: "Note 1", content: "This is the first note"},
    {id: 2, title: "Note 2", content: "This is the second note"},
    {id: 3, title: "Note 3", content: "This is the third note"}
]
let noteId = 4

function getNote(requestId, id) {
    const note = notes.find(note => note.id === id)
    self.postMessage({headers: {requestId}, payload: note})
}

function getNotes(requestId) {
    self.postMessage({headers: {requestId}, payload: notes})
}

function saveNote(requestId, {title, content}) {
    notes.push({id: noteId++, title, content})
    self.postMessage({headers: {requestId}, payload: null})
}

function updateNote(requestId, {id, title, content}) {
    const index = notes.findIndex(note => note.id === id)
    notes[index] = {id, title, content}
    self.postMessage({headers: {requestId}, payload: null})
}

function deleteNote(requestId, id) {
    const index = notes.findIndex(note => note.id === id)
    notes.splice(index, 1)
    self.postMessage({headers: {requestId}, payload: null})
}
