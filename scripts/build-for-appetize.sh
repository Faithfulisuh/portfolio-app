#!/bin/bash

# Portfolio App - Build Script for Appetize.io
echo "🚀 Building Portfolio App for Appetize.io..."

# Check if EAS CLI is installed
if ! command -v eas &> /dev/null; then
    echo "❌ EAS CLI not found. Installing..."
    npm install -g @expo/eas-cli
fi

# Check if logged in to Expo
echo "📋 Checking Expo authentication..."
if ! eas whoami &> /dev/null; then
    echo "🔐 Please login to Expo:"
    eas login
fi

# Build APK for preview
echo "🔨 Building APK for Appetize.io..."
eas build --platform android --profile preview --non-interactive

echo "✅ Build complete!"
echo ""
echo "📱 Next steps:"
echo "1. Download the APK from the EAS dashboard"
echo "2. Go to https://appetize.io"
echo "3. Upload your APK file"
echo "4. Generate and share the public preview link"
echo ""
echo "🔗 EAS Dashboard: https://expo.dev/accounts/[your-username]/projects/personal-portfolio-app/builds"