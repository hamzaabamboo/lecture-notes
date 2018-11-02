/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-40b48f21e7bdeb9a7ae1.js"
  },
  {
    "url": "app.5cad516538183c123907.css"
  },
  {
    "url": "app-2f50d8212fc1b4f815eb.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-08f43bc3fe5b2f7cbc78.js"
  },
  {
    "url": "index.html",
    "revision": "95cda9f64fb9cb9a6c332f782e8a1f6d"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "6ccbd7b69bc19c4158b30a90339cc2a9"
  },
  {
    "url": "0-5e6b4cc30a0694d6b3a9.js"
  },
  {
    "url": "component---src-pages-index-js-a0a839269c40ac3f7451.js"
  },
  {
    "url": "1-ba4eaecbe2a8ff571b0a.js"
  },
  {
    "url": "static/d/891/path---index-6a9-Yp1GBsN1CUTOs7FptQKa2IXYN6k.json",
    "revision": "b7889789932aad0e0d4cb3ee27fec959"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "040dada7fccdb834ebb4bfa719ac5540"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/lecture-notes/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});