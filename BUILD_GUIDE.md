# Portfolio App - Build & Deployment Guide

## Prerequisites

1. **Install EAS CLI** (if not already installed):
   ```bash
   npm install -g @expo/eas-cli
   ```

2. **Login to Expo**:
   ```bash
   eas login
   ```

## Building the App

### Option 1: Build APK for Appetize.io (Recommended)

```bash
# Navigate to project directory
cd portfolio-app

# Build APK for preview/testing
eas build --platform android --profile preview
```

### Option 2: Build for Production

```bash
# Build production APK
eas build --platform android --profile production
```

## Deployment to Appetize.io

1. **Download the APK** from the EAS build dashboard
2. **Go to Appetize.io** (https://appetize.io)
3. **Upload your APK**:
   - Click "Upload App"
   - Select your downloaded APK file
   - Choose Android platform
   - Set app settings (optional)
4. **Generate Public Link**:
   - After upload, you'll get a public preview link
   - This link can be shared for demonstration

## Testing Locally

```bash
# Start development server
npm start

# Run on Android emulator/device
npm run android

# Run on iOS simulator (macOS only)
npm run ios

# Run in web browser
npm run web
```

## App Features to Test

- ✅ Theme toggle (light/dark mode)
- ✅ Navigation between tabs (About, Skills, Contact)
- ✅ Contact links (email, phone, social media)
- ✅ Theme persistence across app restarts
- ✅ Responsive design on different screen sizes

## Troubleshooting

### Build Issues
- Ensure all dependencies are installed: `npm install`
- Clear cache: `expo start --clear`
- Check EAS CLI version: `eas --version`

### Appetize.io Issues
- APK file size should be under 100MB
- Ensure APK is built for Android (not iOS)
- Check that the APK is not corrupted during download

## Project Structure

```
portfolio-app/
├── src/
│   ├── components/     # Reusable components
│   ├── constants/      # Static data and themes
│   ├── context/        # Theme context
│   ├── navigation/     # Navigation setup
│   ├── screens/        # Main app screens
│   ├── types/          # TypeScript definitions
│   └── utils/          # Helper functions
├── App.tsx            # Main app component
├── eas.json           # EAS build configuration
└── package.json       # Dependencies and scripts
```

## Next Steps

1. Build the APK using EAS
2. Upload to Appetize.io
3. Test all functionality in the web preview
4. Share the public link for demonstration