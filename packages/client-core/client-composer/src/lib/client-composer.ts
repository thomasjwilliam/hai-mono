import {Observable} from "./Observable.js";

export function clientComposer(): string {
  return 'client-composer';
}

export type ComposedDocument = {
  id: string;
  content: string;
}

export type ClientComposerState = {
  document: ComposedDocument;
}

const initialClientComposerState: ClientComposerState = {
  document: {
    id: '',
    content: ''
  }
}

export class ClientComposer extends Observable<ClientComposerState> {
  private documents: ComposedDocument[] = []

  constructor() {
    super(initialClientComposerState);
  }

  loadDocument(id: string) {
    const document = this.documents.find(doc => doc.id === id);
    if (!document) {
      throw new Error(`Document with id '${id}' not found.`);
    }
    this.setState({document});
  }

  saveDocument() {
    const currentDocument = this.getState().document;
    const existingDocumentIndex = this.documents.findIndex(doc => doc.id === currentDocument.id);

    if (existingDocumentIndex !== -1) {
      // Update the existing document
      this.documents[existingDocumentIndex] = currentDocument;
    } else {
      // Add the new document
      this.documents.push(currentDocument);
    }
  }

  startNewDocument() {
    const newDocument: ComposedDocument = {
      id: generateShortUniqueId(),
      content: ''
    };

    this.documents.push(newDocument);
    this.setState({document: newDocument});
  }
}

function generateShortUniqueId(): string {
  return [...Array(9)].map(() => Math.random().toString(36)[2]).join('');
}