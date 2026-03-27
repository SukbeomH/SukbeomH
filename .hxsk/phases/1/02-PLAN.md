---
phase: 1
plan: 2
wave: 1
depends_on: []
files_modified: [.github/workflows/main.yml]
autonomous: true
user_setup: []
discovery: L1

must_haves:
  truths:
    - "Actions가 v6 checkout, v6 setup-node를 사용한다"
    - "블로그 글 변경 없을 때 빈 커밋이 생기지 않는다"
    - "git add 범위가 README.md로 한정된다"
    - "cron 스케줄이 의도한 주기로 동작한다"
  artifacts:
    - ".github/workflows/main.yml — CI 안정화 + 현대화 완료"
---

# Plan 1.2: GitHub Actions 워크플로우 안정화 및 현대화

<objective>
GitHub Actions 워크플로우의 CI 안정성 문제 4건을 수정하고, 액션 버전을 최신으로 업그레이드한다.

Purpose: 변경 없을 때 불필요한 커밋 방지, deprecation 경고 제거
Output: 수정된 .github/workflows/main.yml
</objective>

<context>
Load for context:
- .github/workflows/main.yml
- .hxsk/SPEC.md
</context>

<tasks>

<task type="auto">
  <name>Actions 버전 업그레이드 + cron 주석 수정</name>
  <files>.github/workflows/main.yml</files>
  <action>
    1. `actions/checkout@v3` → `actions/checkout@v6`
    2. `actions/setup-node@v3` → `actions/setup-node@v6`
    3. cron 주석 수정: "20시간에 한번씩" → "매일 0시, 20시 (UTC)" — 실제 동작에 맞게
    AVOID: cron 표현식 자체는 변경하지 않음 — 기존 스케줄 유지. 주석만 정확하게 수정
  </action>
  <verify>`.github/workflows/main.yml`에 `@v3` 문자열 없음</verify>
  <done>checkout@v6, setup-node@v6 사용, cron 주석이 실제 동작과 일치</done>
</task>

<task type="auto">
  <name>조건부 커밋 + git add 범위 한정</name>
  <files>.github/workflows/main.yml</files>
  <action>
    Commit README 스텝의 run 블록을 다음으로 교체:
    ```yaml
    - name: Commit README
      run: |
        git add README.md
        git diff --staged --quiet && echo "No changes to commit" && exit 0
        git config --local user.email "brent93.dev@gmail.com"
        git config --local user.name "SukbeomH"
        git commit -m "Update README.md because of Blog updates"
        git push
    ```
    핵심 변경:
    1. `git add .` → `git add README.md` (범위 한정)
    2. `git diff --staged --quiet && exit 0` (변경 없으면 조기 종료)
    3. git config를 diff 체크 뒤로 이동 (불필요 시 실행 안 함)
    AVOID: exit 1 사용 금지 — 변경 없는 것은 정상 상태이므로 exit 0
  </action>
  <verify>워크플로우 YAML 문법 검증: `python3 -c "import yaml; yaml.safe_load(open('.github/workflows/main.yml'))"`</verify>
  <done>git add README.md만 스테이징, 변경 없으면 커밋/푸시 스킵, exit 0으로 성공 처리</done>
</task>

</tasks>

<verification>
After all tasks, verify:
- [ ] YAML 문법 유효
- [ ] `@v3` 참조 없음
- [ ] `git add .` 없음 (범위 한정됨)
- [ ] `git diff --staged --quiet` 패턴 존재
- [ ] cron 주석이 실제 동작 설명과 일치
</verification>

<success_criteria>
- [ ] All tasks verified
- [ ] Must-haves confirmed
- [ ] 워크플로우가 변경 없을 때 성공적으로 종료 (exit 0)
</success_criteria>
