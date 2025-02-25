/// <reference lib="webworker" />
import { cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching'
import { clientsClaim } from 'workbox-core'
import { NavigationRoute, registerRoute } from 'workbox-routing'
import { messageSW } from 'workbox-window'

declare let self: ServiceWorkerGlobalScope

console.log("claims loaded")

// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST)

// clean old assets
cleanupOutdatedCaches()

let allowlist: undefined | RegExp[]
if (import.meta.env.DEV)
  allowlist = [/^\/$/]

// to allow work offline
registerRoute(new NavigationRoute(
  createHandlerBoundToURL('index.html'),
  { allowlist },
))

self.skipWaiting()
clientsClaim()

export async function getNote() {
  console.log('Service Worker version request');
  const swVersion = await messageSW(navigator.serviceWorker.controller!, {type: 'GET_VERSION'});
  console.log('Service Worker version:', swVersion);
}