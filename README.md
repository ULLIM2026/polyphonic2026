# 🎵 Polyphonic

영화 음악 전문 아카이빙 웹앱

## 기능

- **보관함** — 영화 음악 상세 기록 (구성 분석, 감상, 해시태그)
- **작곡가** — 작곡가 프로필 및 참여 작품 연결
- **장르** — 음악 장르 아카이빙
- **악기** — 악기 정보 및 활용 기록
- **개념** — 음악 이론 개념 정리
- **해시태그 검색** — 태그로 연관 항목 탐색
- **전체 검색** — 모든 카테고리 통합 검색
- **PWA** — 홈 화면에 추가해 앱처럼 사용 가능

## 배포 (GitHub Pages)

1. 이 폴더 전체를 GitHub 저장소에 업로드
2. Settings → Pages → Branch: `main`, Folder: `/(root)` → Save
3. `https://[GitHub아이디].github.io/polyphonic` 접속

## 모바일 앱으로 설치

배포 후 모바일 브라우저에서 접속 →
- **iOS**: 공유 버튼 → '홈 화면에 추가'
- **Android**: 브라우저 메뉴 → '앱 설치' 또는 '홈 화면에 추가'

## Firebase 설정

`js/firebase-config.js` 에서 설정값 수정 가능.
현재는 데이터를 브라우저 localStorage에 저장합니다.
Firebase Firestore 연동을 원하면 `app.js`의 데이터 저장 로직을 수정하세요.

## 파일 구조

```
Polyphonic/
├── index.html          # 앱 진입점
├── manifest.json       # PWA 설정
├── sw.js               # 서비스 워커 (오프라인)
├── package.json        # 프로젝트 정보
├── .nojekyll           # GitHub Pages 설정
├── js/
│   ├── app.js          # 메인 React 앱
│   └── firebase-config.js  # Firebase 설정
└── icons/              # 앱 아이콘 (직접 추가 필요)
    ├── icon-192.png
    └── icon-512.png
```
