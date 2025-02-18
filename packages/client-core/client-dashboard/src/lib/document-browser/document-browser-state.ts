import {ProblemDetails} from "./ProblemDetails.js";

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