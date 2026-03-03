# Checkd App

A minimalist, high-performance focus and productivity tracking app built with Expo and Tamagui.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo Go](https://expo.dev/expo-go) app on your mobile device (for local testing)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

To start the Expo development server with a clean cache:

```bash
npx expo start --clear
```

**Note on Connection Issues:**
If your phone cannot connect to the local server (e.g., different networks, firewall issues), try starting with a tunnel:
```bash
npx expo start --tunnel
```
This uses a proxy to bypass local network restrictions.

### Other Commands

- **Start normally**: `npm start`
- **Android**: `npm run android`
- **iOS**: `npm run ios`
- **Web**: `npm run web`

## Project Structure

- `app/`: Expo Router file-based routing
- `components/`: Modular UI components
  - `elements/`: Reusable primitive components
  - `screens/`: Full-page screen components
- `theme/`: Design system tokens and theme configuration
- `types/`: TypeScript type definitions and mock data
- `assets/`: Static assets (images, fonts, etc.)
