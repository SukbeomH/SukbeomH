# Stack

> Generated on 2026-03-27

## Language

| Language | Version | Usage |
|---|---|---|
| JavaScript (ES Modules) | Node.js 20 (CI), local version may vary | 메인 스크립트 |
| YAML | - | GitHub Actions 워크플로우 |
| Markdown | - | README.md (출력물) |

## Package Manager

- **npm** (lockfile: `package-lock.json`)
- CI에서 `npm ci` 사용 (clean install, lockfile 기반 정확한 재현)

## Dependencies

### Production

| Package | Version | Purpose |
|---|---|---|
| `rss-parser` | ^3.13.0 | RSS/Atom 피드 파싱 (XML -> JS 객체) |

### Built-in (Node.js)

| Module | Purpose |
|---|---|
| `node:fs` (`writeFileSync`) | README.md 파일 쓰기 |

### Dev Dependencies

없음.

## Build / Run Commands

| Command | Description |
|---|---|
| `npm install` | 의존성 설치 (로컬 개발) |
| `npm ci` | 의존성 클린 설치 (CI 환경, lockfile 기반) |
| `npm start` | `node readmeUpdate.js` 실행 (RSS 파싱 + README 생성) |

빌드 단계 없음. 트랜스파일/번들링 불필요. Node.js에서 직접 실행.

## CI/CD

### GitHub Actions (``.github/workflows/main.yml``)

| 항목 | 값 |
|---|---|
| Workflow 이름 | `Readme Update` |
| Runner | `ubuntu-latest` |
| Node.js 버전 | 20 |
| Trigger (자동) | cron: `0 */20 * * *` (20시간마다) |
| Trigger (수동) | `workflow_dispatch` |
| Actions 사용 | `actions/checkout@v3`, `actions/setup-node@v3` |

### CI/CD Pipeline

```
Schedule/Manual Trigger
  -> Checkout repo
  -> Setup Node.js 20
  -> npm ci
  -> npm start (README.md 재생성)
  -> git add/commit/push (자동 커밋)
```

자동 커밋 메시지: `Update README.md because of Blog updates`
커밋 사용자: `SukbeomH <brent93.dev@gmail.com>`

## External Services

| Service | URL | Purpose |
|---|---|---|
| Tistory RSS | `https://veritasgarage.tistory.com/rss` | 블로그 글 목록 소스 |
| Capsule Render | `capsule-render.vercel.app` | README 헤더/배너 SVG 생성 |
| GitHub Readme Stats | `github-readme-stats.vercel.app` | GitHub 통계 위젯 |
| Shields.io | `img.shields.io` | 기술 스택 배지 |

---

*Generated: 2026-03-27*
