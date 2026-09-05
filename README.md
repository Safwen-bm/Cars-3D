# Cars 3D

An interactive 3D car showroom built with React, Vite, Tailwind CSS v4, and Three.js (via React Three Fiber + drei). Browse a car in a real-time 3D viewer, change its paint color, rotate/zoom it, and interact with a mock rental/booking UI around it.

**[Live Demo](#)** — *(link goes here once deployed)*

## Features

- **Real-time 3D car viewer** — drag to orbit, scroll to zoom, click the car to cycle through paint colors, powered by `@react-three/fiber` and `@react-three/drei`
- **Inventory sidebar** — switch between cars (currently: Polestar 2, with more coming as models are added), adjust auto-rotate speed, and browse mock actions (test drive, trade-in, comparison)
- **Booking widgets** — location, date/time, and payment method mockups styled as a rental dashboard
- **AI assistant panel** — chat-style UI mockup for arranging a rental
- **Mini music player** — floating player with play/pause/skip and a progress bar
- **Scrolling telemetry marquee** — animated stats ticker across the top of the screen

## Tech Stack

- [React 19](https://react.dev/) + [Vite 7](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Three.js](https://threejs.org/) via [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) and [@react-three/drei](https://github.com/pmndrs/drei)
- [Framer Motion](https://www.framer.com/motion/), [Lucide React](https://lucide.dev/) icons

## Getting Started

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

The dev server runs at `http://localhost:5173` by default.

## Project Structure

```
src/
  assets/
    data.jsx          # Car catalog, color palette, telemetry data, songs
  components/
    models/            # Auto-generated Three.js car model components (gltfjsx)
    CarDealerUI.jsx     # Top-level layout — composes all widgets
    ModelViewer.jsx     # The 3D <Canvas> scene
    SideBar.jsx         # Inventory / visuals / actions / schedule panel
    Navigation.jsx       # Top nav — car name, camera angle toggles, service tabs
    Assistant.jsx        # AI assistant chat mockup
    MiniMusicPlayer.jsx  # Floating audio player
    BottomWidgets.jsx    # Location / dates / payment footer cards
    TelementryMarquee.jsx # Scrolling stats ticker
public/
  *.glb                # 3D car models (see note below)
  fonts/, music/, images/
```

## Adding a New Car

3D car models here are `.glb` files converted to React components with [`gltfjsx`](https://github.com/pmndrs/gltfjsx):

```bash
npx gltfjsx@6.5.3 your-car.glb
```

1. Drop the `.glb` into `public/`
2. Drop the generated component into `src/components/models/`
3. Add an entry to `CAR_DATA` in `src/assets/data.jsx` with `available: true` and a `model` key matching the component name
4. Render it conditionally in `ModelViewer.jsx` alongside the existing car

**Note on file size:** raw `.glb` exports are often 10–25MB, which is heavy for the web. Before adding a new car, compress it with [gltf-transform](https://gltf-transform.dev/):

```bash
npx @gltf-transform/cli optimize input.glb output.glb
```

This typically cuts file size by 70–90% with no visible quality loss.

## License

3D model credit: *2020 Polestar 2* by Ddiaz Design, licensed [CC-BY-NC-SA-4.0](http://creativecommons.org/licenses/by-nc-sa/4.0/) — non-commercial use only. Swap this model out before using this project commercially.