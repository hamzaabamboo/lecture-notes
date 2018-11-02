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
    "url": "webpack-runtime-360fa73c429369432252.js"
  },
  {
    "url": "app.5cad516538183c123907.css"
  },
  {
    "url": "app-4ac1f9b45971a16ed33f.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-08f43bc3fe5b2f7cbc78.js"
  },
  {
    "url": "index.html",
    "revision": "c4ac0c74240b38ece2f7b7cc7abaadad"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "77a01e5426428dba937f2d97c289ce61"
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
    "url": "static/d/65/path---index-6a9-fBYCHIHRG9leUgAF4olA2GnzXJY.json",
    "revision": "2fb59b59f9fc5b59ca5885635d8c0493"
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