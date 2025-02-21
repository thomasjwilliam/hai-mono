import {DocumentBrowser} from '@hai/client-dashboard'

export class ClientCore {
  getDocumentBrowser() {
    return new DocumentBrowser();
  }
}