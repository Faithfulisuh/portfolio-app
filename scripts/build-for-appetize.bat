@echo off
echo 🚀 Building Portfolio App for Appetize.io...

REM Check if EAS CLI is installed
eas --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ EAS CLI not found. Installing...
    npm install -g @expo/eas-cli
)

REM Check if logged in to Expo
echo 📋 Checking Expo authentication...
eas whoami >nul 2>&1
if %errorlevel% neq 0 (
    echo 🔐 Please login to Expo:
    eas login
)

REM Build APK for preview
echo 🔨 Building APK for Appetize.io...
eas build --platform android --profile preview --non-interactive

echo ✅ Build complete!
echo.
echo 📱 Next steps:
echo 1. Download the APK from the EAS dashboard
echo 2. Go to https://appetize.io
echo 3. Upload your APK file
echo 4. Generate and share the public preview link
echo.
echo 🔗 EAS Dashboard: https://expo.dev/accounts/[your-username]/projects/personal-portfolio-app/builds

pause