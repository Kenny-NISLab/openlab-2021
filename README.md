# NISLAB OpenLAB 特設アプリ

![Push Main Branch](https://github.com/kogepanh/openlab/workflows/Push%20Main%20Branch/badge.svg)
![Pull Request Main Branch](https://github.com/kogepanh/openlab/workflows/Pull%20Request%20Main%20Branch/badge.svg)
![Push Develop Branch](https://github.com/kogepanh/openlab/workflows/Push%20Develop%20Branch/badge.svg)
![Pull Request Develop Branch](https://github.com/kogepanh/openlab/workflows/Pull%20Request%20Develop%20Branch/badge.svg)
![License](https://img.shields.io/github/license/kogepanh/openlab)

研究室オープンラボ開催に伴い、新型コロナウイルス感染症対策を考慮した訪問予約アプリです

This is [Open LAB Web Site](https://openlab.nislab.info/).

> <https://openlab.nislab.info/>

## Assets

- [Vue.js](https://vuejs.org/)
  - [Vuetify](https://vuetifyjs.com/)
- [Firebase](https://firebase.google.com/)
  - [Authentication](https://firebase.google.com/products/auth?hl=ja)
  - [Realtime Database](https://firebase.google.com/products/realtime-database?hl=ja)
  - [Hosting](https://firebase.google.com/products/hosting?hl=ja)
  - [Functions](https://firebase.google.com/products/functions?hl=ja)
- [Node.js](https://nodejs.org/)
- [GitHub](https://github.com/)
  - [GitHub Actions](https://github.com/actions)
- [Google Analytics](https://analytics.google.com/analytics/web)

## Architecture

![Architecture](https://user-images.githubusercontent.com/49851726/105703760-0ec95f80-5f51-11eb-9ace-2b1514595ec2.png)

## Preview

![preview](https://user-images.githubusercontent.com/49851726/105704969-e5a9ce80-5f52-11eb-8c8d-8bd0263a3bb9.gif)

## Build Set-up

### Create `.env` file

```.env
VUE_APP_FIREBASE_API_KEY=
VUE_APP_FIREBASE_AUTH_DOMAIN=
VUE_APP_FIREBASE_DATABASE_URL=
VUE_APP_FIREBASE_PROJECT_ID=
VUE_APP_FIREBASE_STORAGE_BUCKET=
VUE_APP_FIREBASE_MESSAGING_SENDER_ID=
VUE_APP_FIREBASE_APP_ID=
VUE_APP_FIREBASE_MEASUREMENT_ID=
```

### Create `GitHub Actions secrets`

```.env
ENV_PROD=
FIREBASE_TOKEN=
SLACK_WEBHOOK_URL=
```
