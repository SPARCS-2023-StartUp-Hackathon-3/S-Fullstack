# [TEAM S] S-Fullstack

다음과 같은 기능이 포함되어 있습니다.
- 커뮤니티
- AI 이미지 생성


## 프로젝트에서 사용한 기술

- `Next.js` 및 관련 fullstack 라이브러리들(`react`, `react-query`, `zustand`, `emotion`, `aws-sdk`, `framer`, `lottie`...)


## Dev Server 실행 방법

1. `pnpm i`
2. `pnpm dev`


## Production 배포 방법

- 프론트엔드 및 백엔드 -> Vercel
- AI 서버 -> AWS 인스턴스
- DB 서버 -> 개인 온프레미스 서버
- 이미지 서버 -> AWS S3


## 환경 변수 및 시크릿

```
DB_USER=string
DB_PASSWORD=string
DB_HOST=string
DB=string
DB_PORT=number
```
