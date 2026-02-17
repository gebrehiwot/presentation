
<!-- ============================= -->
<!-- script.js (More Attractive, Interactive) -->
<!-- ============================= -->
const chapters = {
  1: `
# 📱 Chapter 1: Introduction to Mobile Computing

Mobile development is unique because of:
- 🌐 Mobility — devices constantly move & change networks
- 🔋 Battery constraints — energy‑aware engineering
- 🧠 Context Awareness — sensors, GPS, accelerometer

## 🏛 Android Architecture Overview
- **Linux Kernel:** hardware & power
- **HAL:** hardware abstraction
- **ART Runtime:** fast optimized execution
- **Java/Kotlin APIs:** Your playground

## 🛠 WAY OUT (Practical)
✔ Modify app label in Manifest
✔ Install Android Sources
✔ Rebuild project successfully
  `,

  2: `
# 🎨 Chapter 2: UI & Design Principles

Design mobile UI using **Material Design 3 (2026 standard)**.

## 🗂 Layouts
- ConstraintLayout — ✨ powerful & flexible
- LinearLayout
- FrameLayout

## 🎤 Multimodal Interaction (Modern Apps)
- Text‑to‑speech
- Voice commands
- Gesture interactions

## 🛠 WAY OUT
Build a multilingual greeting app powered by TTS.
  `,

  3: `
# 🔗 Chapter 3: Intents & Services

## 🧭 Intents — Android communication system
- Explicit Intents — navigate your screens
- Implicit Intents — use device apps (Camera, Browser)

## ⚙ Background Services
- Started
- Bound
- Foreground (with notification)

## 🛠 WAY OUT
Create a 2‑screen navigation app using Explicit Intents.
  `,

  4: `
# 💾 Chapter 4: Storage & Databases

## Storage Types
- SharedPreferences / DataStore
- Room Database (modern SQLite)
- File storage

## 🔄 Syncing
Use WorkManager for background syncing.

## 🛠 WAY OUT
Build a persistent Note‑Taking app.
  `,

  5: `
# 🌐 Chapter 5: Networking

## 🌍 Web APIs
- REST + JSON
- UI loading/success/error states

## 🔔 Notifications
- Notification channels
- Alarms

## 🛠 WAY OUT
Build a Live API News Fetcher.
  `,

  6: `
# 🎬 Chapter 6: Graphics & Multimedia

## Graphics for Mobile Apps
- Canvas API
- Vector drawables

## Media
- ExoPlayer (2026 standard)
- SoundPool effects

## 🛠 WAY OUT
Create a multimedia gallery.
  `,

  7: `
# 📍 Chapter 7: Location & Maps

## Location Basics
- Fused Location Provider
- Runtime permissions

## Maps
- Map markers
- Custom camera zoom

## 🛠 WAY OUT
Build a Local Resource Finder Map App.
  `,

  8: `
# 🚀 Chapter 8: Deployment

## Packaging for Play Store
- AAB (App Bundle)
- App signing

## Optimization
- R8 shrinking + obfuscation
- Memory profiling

## 🛠 FINAL TASK
Export signed release bundle.
  `,
};

function loadChapter(num) {
  const content = document.getElementById("content");
  content.style.animation = "none";
  void content.offsetWidth;
  content.style.animation = "fadeIn 0.6s ease";

  content.innerHTML = `
    <h2>${chapters[num].split("\n")[1]}</h2>
    <pre>${chapters[num]}</pre>
  `;
}
