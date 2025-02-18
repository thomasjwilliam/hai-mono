import {dashboard} from "@hai/client-dashboard"

export function clientApp(): string {
  return 'client-app' + " " + dashboard();
}
