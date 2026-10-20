# Maintaining

GitHub 프로필 README(`README.md`)는 **생성물**입니다. 직접 고치지 말고 아래 파일을 수정하세요.

## 구조

```
content/            사람이 편집하는 내용 (JSON)
  profile.json        이름·역할·소개·현재 관심사·연락처
  stack.json          What I build 기능 목록(capabilities) + 기술 스택 배지 그룹
  experience.json     경력(회사·직함·기간)과 History. 업무 내용은 싣지 않는다
  projects.json       공개 프로젝트(그룹별 lead 문구) + 비공개 작업 분야별 요약 + interests
config/site.json    섹션 순서("---" = 구분선): header → intro → stack → projects → experience → blog, 블로그 RSS, 배너 스타일
src/
  cli.js              진입점 (build / --dry-run / --check / --feed-file / --no-feed)
  render.js           섹션 조립
  sections/*.js       섹션별 순수 함수 (ctx) => markdown
  lib/                rss 파서, URL 빌더, 이스케이프, content 로더
test/               node:test (외부 의존성 없음)
```

## 명령

| 명령 | 설명 |
| --- | --- |
| `npm test` | 단위·렌더 테스트 |
| `npm run preview` | 네트워크로 피드를 받아 stdout에 미리보기 |
| `node src/cli.js --dry-run --no-feed` | 오프라인 미리보기 |
| `npm run build` | `README.md` 갱신 |
| `npm run check` | README가 최신인지 확인 (다르면 exit 1) |

## 자동화

`.github/workflows/update-readme.yml` 이 매일 06:00 KST, 그리고 `content/`·`config/`·`src/` 변경 push 시
테스트 → 빌드 → 변경분 커밋을 수행합니다. RSS를 못 받으면 빌드가 실패하고 README는 그대로 둡니다.

## 섹션 추가

1. `src/sections/<name>.js` 에 `export default (ctx) => string` 작성 (빈 문자열이면 생략)
2. `src/sections/index.js` 레지스트리에 등록
3. `config/site.json` 의 `sections` 에 추가
