# NISLAB OpenLAB App

This is [Open LAB Web Site](https://openlab.nislab.info/).

## Assets

- Vue.js
  - Vuetify
  - Bootstrap
- Firebase
  - Authentication
  - Realtime Database
  - Hosting
  - Functions
- Node.js
  - nodemailer

## npm

### Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## Firebase CLI

### Firebase CLI のインストール

```
npm install -g firebase-tools
```

### Deploy

```
firebase deploy
```

### 特定の Firebase サービスをデプロイ

```
firebase deploy --only hosting,...
```

| フラグ構文               | デプロイされるサービス/機能                |
| :----------------------- | :----------------------------------------- |
| --only hosting           | Firebase Hosting のコンテンツ              |
| --only database          | Firebase Realtime Database のルール        |
| --only storage           | Cloud Storage for Firebase のルール        |
| --only firestore         | Cloud Firestore のルールおよびインデックス |
| --only firestore:rules   | Cloud Firestore のルール                   |
| --only firestore:indexes | Cloud Firestore のインデックス             |
| --only functions         | Cloud Functions for Firebase               |

## 補足

We must have firebase config.

> /src/firebase.js
