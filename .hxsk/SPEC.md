# SPEC.md - Project Specification

## Project: SukbeomH GitHub Profile README Auto-Updater

### Overview
Tistory 블로그 RSS 피드를 파싱하여 최신 글 10개를 GitHub 프로필 README.md에 자동 반영하는 프로젝트.
GitHub Actions cron (20시간마다) + 수동 트리거로 실행.

### Tech Stack
- **Runtime**: Node.js 20 (ES Modules)
- **Dependencies**: rss-parser ^3.13.0
- **CI/CD**: GitHub Actions (cron `0 */20 * * *`, workflow_dispatch)
- **RSS Source**: veritasgarage.tistory.com/rss

### Entry Points
- `npm start` → `node readmeUpdate.js`
- GitHub Actions → `.github/workflows/main.yml`

### Output
- README.md: 프로필 헤더 + 기술 스택 배지 + 경력/프로젝트 + 블로그 최신글 10개

### Constraints
- 외부 의존성 최소화 (rss-parser만 사용)
- GitHub Actions 호환성 유지
- 블로그 글 수 10개 고정
