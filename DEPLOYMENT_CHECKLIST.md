# Portfolio App - Deployment Checklist

## Pre-Build Checklist

- [ ] All dependencies installed (`npm install`)
- [ ] App runs locally without errors (`npm start`)
- [ ] Theme toggle works correctly
- [ ] All navigation tabs functional
- [ ] Contact links work (email, phone, social)
- [ ] App displays correctly in both light and dark themes
- [ ] No console errors or warnings

## Build Process

- [ ] EAS CLI installed (`npm install -g @expo/eas-cli`)
- [ ] Logged into Expo account (`eas login`)
- [ ] Build configuration ready (`eas.json` exists)
- [ ] Run build command: `eas build --platform android --profile preview`
- [ ] Build completes successfully
- [ ] APK file downloaded from EAS dashboard

## Appetize.io Deployment

- [ ] Go to https://appetize.io
- [ ] Create account or login
- [ ] Click "Upload App"
- [ ] Select downloaded APK file
- [ ] Choose Android platform
- [ ] Configure app settings:
  - [ ] App name: "Personal Portfolio"
  - [ ] Device: Any Android device
  - [ ] OS Version: Latest available
- [ ] Upload completes successfully
- [ ] Public preview link generated

## Testing on Appetize.io

- [ ] App launches without crashes
- [ ] Theme toggle works
- [ ] Navigation between tabs works
- [ ] About screen displays profile information
- [ ] Skills screen shows technical skills
- [ ] Contact screen shows contact information
- [ ] Contact links are clickable (may not work in web preview)
- [ ] App looks professional and polished

## Final Submission

- [ ] Public Appetize.io link copied
- [ ] Link tested in different browsers
- [ ] Link shared for review/submission
- [ ] Documentation updated with final link

## Troubleshooting

### Common Build Issues
- **Build fails**: Check internet connection, try again
- **Authentication error**: Run `eas login` again
- **Dependencies error**: Run `npm install` and try again

### Common Appetize.io Issues
- **Upload fails**: Check APK file size (must be < 100MB)
- **App won't start**: Check if APK is corrupted, rebuild if needed
- **Features don't work**: Some native features may not work in web preview

### Performance Tips
- APK should be under 50MB for best upload experience
- Test on multiple devices/screen sizes if possible
- Ensure app works offline (no external API dependencies)

## Success Criteria

✅ **App successfully builds without errors**
✅ **APK uploads to Appetize.io successfully**  
✅ **Public preview link works and displays app**
✅ **All core features functional in preview**
✅ **App looks professional and matches requirements**