---
phase: 1
plan: 1
wave: 1
depends_on: []
files_modified: [readmeUpdate.js]
autonomous: true
user_setup: []
discovery: L0

must_haves:
  truths:
    - "RSS 피드 아이템이 10개 미만이어도 크래시 없이 동작한다"
    - "writeFileSync가 올바른 인자로 호출된다"
    - "HTML div 태그가 올바르게 닫힌다"
    - "주석과 코드가 일치한다"
    - "불필요한 주석 코드가 제거된다"
  artifacts:
    - "readmeUpdate.js — 버그 수정 + 코드 정리 완료"
---

# Plan 1.1: readmeUpdate.js 버그 수정 및 코드 정리

<objective>
readmeUpdate.js의 런타임 크래시 버그 3건을 수정하고, 코드 품질 이슈 3건을 정리한다.

Purpose: RSS 피드 상태에 관계없이 안정적으로 동작하는 스크립트 확보
Output: 수정된 readmeUpdate.js
</objective>

<context>
Load for context:
- readmeUpdate.js
- .hxsk/SPEC.md
</context>

<tasks>

<task type="auto">
  <name>RSS 아이템 부족 시 크래시 방지 + 매직넘버 상수화</name>
  <files>readmeUpdate.js</files>
  <action>
    1. 파일 상단에 `const MAX_POSTS = 10;` 상수 선언
    2. for 루프 조건을 `i < Math.min(MAX_POSTS, feed.items.length)`로 변경
    3. 주석 "최신 5개" → "최신 MAX_POSTS개"로 수정
    AVOID: feed.items 자체가 undefined일 수 있으므로 `feed.items?.length ?? 0` 사용
  </action>
  <verify>node -e "import('./readmeUpdate.js')" 실행 시 에러 없음 (정상 RSS일 때)</verify>
  <done>MAX_POSTS 상수 존재, for 루프에 안전한 범위 체크 적용, 주석 일치</done>
</task>

<task type="auto">
  <name>writeFileSync 수정 + HTML 태그 닫기 + 죽은 코드 제거</name>
  <files>readmeUpdate.js</files>
  <action>
    1. writeFileSync 호출에서 무의미한 4번째 콜백 인자 제거 → `writeFileSync("README.md", text, "utf8")`
    2. 블로그 링크 루프 뒤, writeFileSync 전에 `text += "\n</div>\n";` 추가하여 열린 div 닫기
    3. 116번째 줄 주석 처리된 코드(`// text += ...`)와 119-121번째 줄 주석 블록 삭제
    AVOID: text 템플릿 리터럴 내부의 기존 div 구조를 건드리지 말 것 — 닫는 태그만 추가
  </action>
  <verify>node readmeUpdate.js 실행 후 README.md에 `</div>` 가 열린 div 수만큼 존재하는지 grep으로 확인</verify>
  <done>writeFileSync 인자 3개, div 태그 균형, 주석 처리된 코드 없음</done>
</task>

</tasks>

<verification>
After all tasks, verify:
- [ ] `npm start` 정상 실행 (exit code 0)
- [ ] README.md 생성됨
- [ ] `grep -c '<div' README.md` == `grep -c '</div>' README.md` (div 균형)
- [ ] 주석에 "5개" 문자열 없음
- [ ] writeFileSync 호출에 콜백 없음
</verification>

<success_criteria>
- [ ] All tasks verified
- [ ] Must-haves confirmed
- [ ] `npm start` 출력이 기존과 동일한 블로그 글 목록 포함
</success_criteria>
