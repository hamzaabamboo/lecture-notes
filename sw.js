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
    "url": "webpack-runtime-aae4686a14065a25b50e.js"
  },
  {
    "url": "app.5cad516538183c123907.css"
  },
  {
    "url": "app-819c9783c81e5ff9dad4.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-08f43bc3fe5b2f7cbc78.js"
  },
  {
    "url": "index.html",
    "revision": "6c905f619c00623deb37de3d50bb8379"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "31bd7b85c009b8e90f5ec080659a5d77"
  },
  {
    "url": "0-5e6b4cc30a0694d6b3a9.js"
  },
  {
    "url": "component---src-pages-index-js-24b8861379c55d44760d.js"
  },
  {
    "url": "1-ba4eaecbe2a8ff571b0a.js"
  },
  {
    "url": "static/d/716/path---index-6a9-novbrs4elZJlOrAU26DuIBLSpcI.json",
    "revision": "e29ceac4ca538e1d78dfcf82f6c1c0de"
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