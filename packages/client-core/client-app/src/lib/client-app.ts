import {dashboard} from "@tuskdesign/client-dashboard"

export function clientApp(): string {
  return 'client-app' + " " + dashboard();
}
