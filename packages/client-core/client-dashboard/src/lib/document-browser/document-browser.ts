import {Observable} from "./Observable.js";
import {FakeDocumentBrowserState} from "./FakeDocumentBrowserState.js";
import {DocumentBrowserState} from "./document-browser-state.js";

const initialDocumentBrowserState: DocumentBrowserState = {
  documents: [],
  problems: undefined,
}

export class DocumentBrowser extends Observable<DocumentBrowserState> {

  constructor() {
    super(initialDocumentBrowserState);
  }

  deleteDocument(id: string) {
    const documents = this.getState().documents;
    const documentIndex = documents.findIndex(doc => doc.id === id);

    if (documentIndex === -1) {
      this.setState({
        problems: {
          type: "DocumentNotFound",
          title: "Document not found",
          detail: `Document with id ${id} not found`
        }
      });
    } else {
      const updatedDocuments = [...documents];
      updatedDocuments.splice(documentIndex, 1);
      this.setState({
        documents: updatedDocuments,
        problems: undefined
      });
    }
  }

  editDocument() {
  }

  loadDocuments() {
    const fetchedDocuments = FakeDocumentBrowserState.documents;
    this.setState({documents: fetchedDocuments});
  }

  viewDocument() {
  }
}