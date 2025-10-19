# 🎵 Gana – Spotify Clone

A responsive, lightweight **music streaming web app** inspired by Spotify.  
Built with **HTML, CSS, and Vanilla JavaScript**, served by a simple **Node.js static server**.  
The app lets users **play, pause, skip, and switch** between songs dynamically, offering a smooth and minimal music experience.

---

## 🚀 Features

- 🎧 **Play, Pause, Next, Previous** music controls  
- 🕒 **Live progress bar** updates as the song plays  
- 💽 **Dynamic UI updates** via JavaScript DOM manipulation  
- 📀 Two sample songs preloaded (`Gandagana.mp3`, `DevilEyes.mp3`)  
- 💡 **Responsive layout** with clean modern styling  
- 🖥️ Runs locally on a simple Node.js static file server  

---

## 🧠 Tech Stack

| Layer | Technologies |
|--------|---------------|
| **Frontend** | HTML, CSS, JavaScript (Audio API) |
| **Backend / Server** | Node.js (using built-in `http` module) |
| **Runtime** | Node.js v18+ (no frameworks or dependencies) |

---

## 🗂️ Project Structure

gana/
├── Index.html # Main UI (navbar, songs, player)
├── Home.html # Placeholder secondary page
├── style.css # Page styling and layout
├── script.js # Audio player logic and DOM interactions
├── server.js # Static file server using Node.js
├── package.json # App metadata and start script
├── Gandagana.mp3 # Sample track 1
├── DevilEyes.mp3 # Sample track 2
├── logo.png # Navbar logo
└── play.svg, pause.svg, next.svg, previous.svg # Control icons

How It Works

script.js controls all player functionality using the HTML5 Audio API

Master Play/Pause button toggles icons (play.svg ↔ pause.svg)

Next / Previous buttons cycle between songs

The progress bar (#myprogressbar) syncs with playback time and allows scrubbing

Clicking an individual song item loads and plays that track instantly

🖌️ UI Overview

Navbar: Logo, title “Gana”, and simple navigation links (Home, About, Playlist)

Main Container: Displays song items with album art, title, and per-song play buttons

Bottom Bar: Persistent audio controls with progress slider

