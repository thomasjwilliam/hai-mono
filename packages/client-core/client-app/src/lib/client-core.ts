import {DocumentBrowser} from '@hai/client-dashboard'

export class ClientCore {
  constructor() {}

  getDocumentBrowser() {
    return new DocumentBrowser();
  }
}