# Focus Tracker

**Live demo:** https://explabarnav.github.io/Focus-tracker/
Three ways to run it. Pick ONE and move on.

1. Easiest: double-click index.html (opens in your browser; data saves in that browser).
2. Website + installable app: push this folder to GitHub, turn on Pages
   (Settings > Pages > Deploy from branch > main > / root). Open the https link in Chrome,
   then Install (address bar icon). On Mac Safari: File > Add to Dock.
3. Desktop app (Electron): install Node.js, then in this folder run:
   npm install
   npm start


## Privacy and planning

A fresh install starts with one generic **Focus session** task. Tasks, focus sessions, settings, and planned sessions are saved in the current browser’s local storage; they are not uploaded to GitHub or sent to an AI service. The schedule planner parses common day and time phrases locally and can add one-off sessions or up to five upcoming weekday/daily sessions.
