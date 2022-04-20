# ANTIGASPI - BACKEND

Antigaspi is a web application that warns you when your food is about to expire.

Frontend : https://github.com/TonyDeplanque/antigaspi-frontend
## Trello

https://trello.com/b/boJ0UiyR/antigaspi

## Installation

### Environment variables

- Replace `.env.example` by `.env` 

- Add value for ` APP_KEYS` like that `APP_KEYS=myKey1,myKey2`


#### Firebase Messaging Configuration
To receipt notifications from firebase you need to add this variables in your `/.env`
For more explanation: https://firebase.google.com/docs/cloud-messaging/js/receive#web-version-9
```
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=a
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
FIREBASE_MEASUREMENT_ID=
FIREBASE_MESSAGING_AUTHORIZATION=
```

### Commands

```
npm run develop
# or
yarn develop
```
