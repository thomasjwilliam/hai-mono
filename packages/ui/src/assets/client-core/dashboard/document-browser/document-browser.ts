import {Observable} from "../../utils/Observable";
import {ProblemDetails} from "../../utils/ProblemDetails";
import {FakeDocumentBrowserState} from "../../../../organisms/document-browser/DocumentBrowser.state";

export interface DocumentBrowserState {
  documents: DocumentListItem[];
  problems?: ProblemDetails;
}

export type DocumentListItem = {
  id: string
  title: string
  content: string
  context: Array<{
    id: string
    // the full http reference path where the context source can be found
    href: string
    rel: "primary" | "supplementary"
    // whether the context description is available (i.e. uploaded)
    available: boolean
    // the browser tab id containing the href
    tabId: number | undefined
  }>
  dateCreated: Date
  dateModified: Date
  metadata: Array<{ name: string; content: string }>
}

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