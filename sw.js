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

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

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
    "url": "webpack-runtime-08092935aa4964bd43d1.js"
  },
  {
    "url": "app-eb2dc0aee5a4e2b63169.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-2d637d46ffe1993bce5c.js"
  },
  {
    "url": "index.html",
    "revision": "717161a863f3d45dede3acff6f1bc705"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "2234ae3370a57d3ba81d5242006cdc5a"
  },
  {
    "url": "component---src-pages-index-jsx.f304f47090dc66a5acfd.css"
  },
  {
    "url": "component---src-pages-index-jsx-7fee62e84eb2d23102a9.js"
  },
  {
    "url": "9-0eb2aafe1cb84a664663.js"
  },
  {
    "url": "0-fcd4ac3c5e5d2f852875.js"
  },
  {
    "url": "static/d/152/path---index-6a9-Uj3iY1Fskfeiu5w7ZFB7eiefMU.json",
    "revision": "6cfff92ae7e71da67a2e38555a08200f"
  },
  {
    "url": "component---src-pages-404-jsx-2ccafa10c842f7e304d3.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.json",
    "revision": "1ad218557196aa2aa85e9477725fea50"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "dc3cb71a4883375d0aeabef6e66ec7c0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
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