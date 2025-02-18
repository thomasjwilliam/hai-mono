import {DocumentBrowser} from "../../dashboard/document-browser/document-browser";

export class ClientCore {
  constructor() {}

  getDocumentBrowser() {
    return new DocumentBrowser()
  }
}