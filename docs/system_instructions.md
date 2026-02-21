# System Instructions (Source of Truth)

## Goal
Build a React Native app using Expo + TypeScript from the specs in /docs.

## Tech Stack
- React Native (Expo)
- TypeScript (strict)
- React Navigation
- Light/Dark theme support

## Non-negotiables
- Follow /docs/brand_guidelines.md for all visual decisions.
- Reuse components. Do not create one-off UI.
- Keep code clean and readable. No over-engineering.
- Use typed props everywhere.

## Folder Structure
Use this structure:
- src/components
- src/screens
- src/navigation
- src/theme
- src/utils

## Navigation
Two main flows:
1) Auth stack:
Splash → Launch/Login → Country Picker → Phone → OTP → Success
2) App tabs after auth:
Home, Timeline, Market

## Output Format
When you change code, always list:
- Created files
- Modified files
- Short reason for each change