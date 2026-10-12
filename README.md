# Assignment 5 - React Video Player

A small React and Vite application for browsing and playing a collection of video songs. The app displays one video at a time in a styled player card with custom playback controls.

## Features

- Plays eight bundled videos from the `public/videos` directory.
- Displays the current video's title.
- Play and pause control.
- Move to the previous or next video.
- Rewind or fast-forward by 10 seconds.
- Disables previous/next controls at the beginning and end of the playlist.
- Uses responsive sizing so the player fits smaller screens.

## Playlist

The current playlist is defined in [`src/components/VideoContainer.jsx`](./src/components/VideoContainer.jsx):

1. Devara
2. Dacoit
3. Tholi Prema
4. Krishnarjuna Yudham
5. Andhala Rakshasi
6. Peddi
7. Vishwanath and Sons
8. Orange

Video files are stored in [`public/videos/`](./public/videos/), and are referenced by their public URL, for example `/videos/Video-1.mp4`.

## Tech stack

- React 19
- Vite
- React DOM
- React Icons
- Oxlint

## Getting started

### Prerequisites

- Node.js and npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run Oxlint against the project. |

## Project structure

```text
assignement5/
├── public/
│   ├── videos/              # Bundled MP4 video files
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Cards.jsx        # Video card and playback controls
│   │   └── VideoContainer.jsx # Playlist and current-video navigation
│   ├── App.jsx              # Application root
│   └── main.jsx             # React entry point
├── index.html
├── package.json
└── README.md
```

## Updating the playlist

Edit the `getData` array in [`src/components/VideoContainer.jsx`](./src/components/VideoContainer.jsx). Each item should include:

```js
{
  name: 'Video title',
  src: '/videos/your-video-file.mp4'
}
```

Add the corresponding video file to [`public/videos/`](./public/videos/) before starting the development server.