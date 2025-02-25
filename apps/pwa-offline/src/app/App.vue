<script setup lang="ts">
import {onBeforeMount, onMounted, onUnmounted, ref} from 'vue'
import {RouterLink, RouterView} from 'vue-router';
import MyWorker from '../my-worker?worker'

const pong = ref(null)
const notes = ref();
const note = ref({
  id: undefined,
  content: ''
});

const worker = new MyWorker()

const messageIdCounter = ref(0);
// Map to store in-flight requests by their IDs
const inFlightRequests: Map<number, (msg: any) => void> = new Map();
function sendToWorker(type: string, payload?: any): Promise<any> {
  const id = messageIdCounter.value++;
  return new Promise((resolve) => {
    inFlightRequests.set(id, resolve);
    const message = {
      headers: {requestId: id, type},
      payload,
    }
    worker.postMessage(message);
  });
}
function messageFromWorker(msg: any) {
  console.log("messageFromWorker", msg)
  if (inFlightRequests.has(msg.data.headers.requestId)) {
    const resolve = inFlightRequests.get(msg.data.headers.requestId)!;
    resolve(msg.data.payload && msg.data.payload);
    inFlightRequests.delete(msg.data.headers.requestId);
  }
}

async function runWorker() {
  worker.postMessage('ping')
}

async function resetMessage() {
  worker.postMessage('clear')
}

function startNote() {
  note.value = {id: undefined, content: ''}
}

async function saveNote() {
  if (note.value.id) {
    await sendToWorker('UpdateNote', {
      id: note.value.id,
      content: note.value.content
    })
  } else {
    await sendToWorker('SaveNote', {
      content: note.value.content
    })
  }
  notes.value = await sendToWorker('GetNotes')
}

async function getNotes() {
  notes.value = await sendToWorker('GetNotes')
}

async function deleteNote(id: string) {
  await sendToWorker('DeleteNote', {id})
  notes.value = await sendToWorker('GetNotes')
}

async function editNote(id: string) {
  note.value = await sendToWorker('GetNote', {id})
}

onBeforeMount(() => {
  worker.addEventListener('message', messageFromWorker)
})

onMounted(() => {
  getNotes()
});

onUnmounted(() => {
  worker.removeEventListener('message', messageFromWorker);
  worker.terminate();
});
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <RouterView v-if="true"/>

  <button @click="startNote">
    Start note
  </button>
  <hr>
  <div class="notes-list">
    <div v-for="note in notes" :key="note.id">
      <div>{{note.id}}</div>
      <div @click="editNote(note.id)" style="cursor: pointer;">{{note.content}}</div>
      <div>
        <span @click="editNote(note.id)" style="cursor: pointer;">edit</span> |
        <span @click="deleteNote(note.id)" style="cursor: pointer;">delete</span>
      </div>
    </div>
  </div>
  <hr>
  <textarea v-model="note.content"></textarea>
  <br>
  <button @click="saveNote">
    Save
  </button>
  <br>
  <br>
  <button @click="runWorker">
    Ping web worker
  </button>
  <br>
  <button @click="resetMessage">
    Reset message
  </button>
  <br>
  <br>
  <template v-if="pong">
    Response from web worker: <span> Message: {{ pong }} </span>
  </template>
</template>

<style scoped lang="css">
header {
  line-height: 1.5;
  max-width: 100vw;
}

nav > a {
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 768px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    margin-left: auto;
    margin-right: auto;
    max-width: 768px;
  }

  nav {
    text-align: left;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
