<!-- 자동 생성 파일입니다. 직접 수정하지 말고 content/ 를 고친 뒤 `npm run build` 하세요. -->

![SukbeomH](https://capsule-render.vercel.app/api?type=rounded&height=150&color=timeGradient&text=SukbeomH&section=header&reversal=false&desc=Cloud%20%C2%B7%20AI%20Platform%20Engineer&fontAlignY=45&descAlignY=80&descSize=20)

## 안녕하세요, 홍석범입니다 👋

**SK AX AI Innovation Lab**에서 Kubernetes 위에 AI 플랫폼을 만듭니다. Go로 GPU 할당량을 검증하는 Admission Webhook을, Python으로 RAG 지식베이스 API와 LangGraph 문서 처리 파이프라인을 설계·운영했고, 멀티테넌트 RAG SaaS의 보안감사 대응과 CI 체계를 정비했습니다.

업무 밖에서는 **AI 코딩 에이전트를 팀처럼 운영하는 방법**을 실험합니다. 세션 라우팅과 SPEC → PLAN → EXECUTE → VERIFY 워크플로우, Obsidian 지식 백본, 구현과 리뷰를 분리한 교차 검증이 도구입니다. 이 방식으로 실운영 자동매매 데몬, 홈랩 운영 도구, 3D 프린터 펌웨어 플러그인을 직접 만들고 운영합니다.

불확실하면 멈추는 **fail-closed** 설계와, 실행 결과로 증명하는 검증을 원칙으로 삼습니다. 심리학에서 시작해 백엔드 → AI → 클라우드 인프라로 영역을 넓혀왔습니다.

🔭 **Now** · RAG Quality Evaluation & Serving · Kubernetes AI Infra (GPU · Webhook · Helm) · AI Agent Orchestration · Fail-closed Automation

📫 [Email](mailto:brent93.dev@gmail.com) · [LinkedIn](https://www.linkedin.com/in/sukbeomh) · [Blog](https://veritasgarage.tistory.com)

### ⚡ Primary

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Go](https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Helm](https://img.shields.io/badge/Helm-0F1689?style=for-the-badge&logo=helm&logoColor=white)
![Terraform](https://img.shields.io/badge/Terraform-844FBA?style=for-the-badge&logo=terraform&logoColor=white)

### 🤖 AI / Data

![LangGraph](https://img.shields.io/badge/LangGraph-1C3C3C?style=for-the-badge&logo=langgraph&logoColor=white)
![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Qdrant](https://img.shields.io/badge/Qdrant-DC244C?style=for-the-badge&logo=qdrant&logoColor=white)
![OpenSearch](https://img.shields.io/badge/OpenSearch-005EB8?style=for-the-badge&logo=opensearch&logoColor=white)
![LiteLLM](https://img.shields.io/badge/LiteLLM-6366F1?style=for-the-badge&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![Claude Code](https://img.shields.io/badge/Claude%20Code-D97757?style=for-the-badge&logo=claude&logoColor=white)

### 🧰 Also

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![C++](https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=cplusplus&logoColor=white)
![Shell](https://img.shields.io/badge/Shell-4EAA25?style=for-the-badge&logo=gnubash&logoColor=white)
![Proxmox](https://img.shields.io/badge/Proxmox-E57000?style=for-the-badge&logo=proxmox&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![ArgoCD](https://img.shields.io/badge/ArgoCD-EF7B4D?style=for-the-badge&logo=argo&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-FF4438?style=for-the-badge&logo=redis&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Klipper](https://img.shields.io/badge/Klipper-B12F36?style=for-the-badge&logoColor=white)

---

## 💼 Experience

### SK AX · Cloud · AI Platform Engineer — **Now**
<sub>2025.01 ~ · AI Innovation Lab</sub>

**GPU Pool 기반 Kubernetes Admission Webhook (Go)**
- Mutating + Validating 웹훅 단독 설계·개발: GPU Pool 라벨 기반 할당량 검증, Node Affinity 자동 주입(JSON Patch), MIG 프로파일 지원
- Kubernetes Lease API로 프로젝트별 분산 락을 구현해 멀티 레플리카 환경의 할당량 경쟁 상태 제거
- cert-manager / 정적 인증서 선택형 Helm 차트, ArgoCD sync-wave 배포, Mock Core API 기반 통합 테스트(95+ 시나리오)·커버리지 80%+

**지식베이스(RAG) API 서버 · 문서 처리 파이프라인 (Python)**
- LangGraph 기반 K8s Job 파이프라인에 PaddleOCR PPStructureV3 파싱 Provider 추가(CPU/GPU 이미지, env 기반 설정), 문서 분류·메타데이터 추출 노드를 fan-out으로 분리해 문서당 LLM 비용 20% 절감
- 검색 품질 평가 체계 구축: 검색 로그 수집 → LLM Judge 평가 + Human feedback → eval export/import, 분석-개선 에이전트 스킬
- 교차 언어 쿼리 자동 번역으로 검색 적중률 평균 +23.8pp, Qdrant 컬렉션 차원·모델 불일치 사전 검증(fail-fast), LangChain 1.x 마이그레이션

**멀티테넌트 RAG SaaS 플랫폼 안정화 (Spring Boot · React · Qdrant · Neo4j)**
- SAST 보안감사 대응: 규칙 문서화, 전건 검증·조치·소명으로 자사 코드 고위험 항목 0건 달성, SpotBugs·XSS 린터를 빌드 단계 게이트로 편입
- 다인 협업 전환: 브랜치 전략·PR 템플릿·CI PR 트리거 정립, 공개 API rateLimit을 Redis 카운터로 실제 집행, Helm 설치 경로·레지스트리 분리
- e2e 검증 러너북 작성·시행, 설계 문서를 실구현 기준으로 전면 현행화 (9일간 146 커밋)

**LLM 보안 테스트베드**
- LiteLLM 커스텀 핸들러로 외부 보안 API를 경유하는 보안 프록시 구성, HuggingChat 기반 UI 커스터마이징, Helm·Packer 배포

### (주) ACGR · Backend Developer
<sub>2022.07 ~ 2023.12</sub>

**인적성 검사 플랫폼**
- 오프라인 → 온라인 전환 플랫폼 단독 설계·개발·운영
- NestJS, TypeScript, MariaDB — Java에서 Node.js로 이관, API 응답속도 개선
- Docker CI/CD 도입으로 배포 시간 단축, ELK Stack 모니터링 구축

<details>
<summary><b>📖 History</b></summary>

- **2024** · 우리FIS 아카데미 AI 엔지니어링 3기 수료 — 최종 프로젝트 **우대리**(RAG 대직원 챗봇, Django·OpenSearch·Airflow) 최종 우승
- **2022.07 ~ 2023.12** · (주) ACGR 백엔드 개발자
- **2022.03 ~ 2022.07** · 코드캠프 백엔드 과정 수료 → 온클(Onkul) 기업협업
- **2021.04 ~ 2021.12** · 언리얼 XR 개발자 과정 수료 (과기정통부 메디치센터)
- **2014.03 ~ 2020.08** · 중앙대학교 심리학과 졸업

</details>

---

## 🧪 Side Projects

### 🤖 AI · Agents

- [**HExoskeleton**](https://github.com/SukbeomH/HExoskeleton) — Claude Code 플러그인 마켓플레이스. front 세션 하나에 말하면 주제별 작업 세션으로 전달·생성·회수·병합하는 **router**와, SPEC → PLAN → EXECUTE → VERIFY 방법론 **hxsk** <sub>`bash` `python stdlib` `Claude Code`</sub>
- [**RAG-Bench**](https://github.com/SukbeomH/RAG-Bench) — 한국어 PDF RAG 파이프라인 정량 평가. PDF 파서(OmniDocBench)·Dense/Sparse 임베딩·리랭커(RAGAS)를 비교해 프로덕션 조합 선정 <sub>`LangGraph` `uv workspace` `RAGAS`</sub>
- [**bok-economic-analyst**](https://github.com/SukbeomH/bok-economic-analyst) — Supervisor/Researcher/Analyst 멀티 에이전트 경제 분석. RAG + 웹 + KOSIS 근거 수집, 출처 추적, 차트 자동 생성 <sub>`LangGraph` `FAISS` `Streamlit`</sub>
- [**Acta-Ergo-Sum**](https://github.com/SukbeomH/Acta-Ergo-Sum) — GitHub 활동을 LLM 친화적 Markdown 지식베이스로 수집하고 레포를 딥 분석하는 CLI · MCP 서버 <sub>`Python` `MCP`</sub>
- [**chat-ui**](https://github.com/SukbeomH/chat-ui) <sub>fork of [huggingface/chat-ui](https://github.com/huggingface/chat-ui)</sub> — HuggingChat 기반 채팅 UI 한국어판. 보안 프록시 핸들러, 멀티모달 첨부, 대화·디버그 CSV export <sub>`SvelteKit` `TypeScript`</sub>

### 🖨️ 3D Printing · Firmware

- [**klipperized-LLL-plus-buffer**](https://github.com/SukbeomH/klipperized-LLL-plus-buffer) — Mellow/Fly LLL Plus 버퍼를 Klipper MCU로 구동. extruder_stepper 동기화 + 홀센서 중앙 유지, 극단 구간은 TMC VACTUAL로 복구 <sub>`Klipper` `Python` `STM32`</sub>
- [**bdwidth**](https://github.com/SukbeomH/bdwidth) <sub>fork of [markniu/bdwidth](https://github.com/markniu/bdwidth)</sub> — 필라멘트 폭·이동 센서 Klipper 포크. USB 프레임 파싱 강화, 이상치 필터, 이상치 발생 시 CCD 파형 진단 스냅샷 <sub>`Klipper` `Python`</sub>
- [**KlipperPLR**](https://github.com/SukbeomH/KlipperPLR) <sub>fork of [Yumi-Lab/YUMI_PLR](https://github.com/Yumi-Lab/YUMI_PLR)</sub> — Klipper 정전 복구. G-code 파싱 견고화 <sub>`Klipper`</sub>
- [**CxChanger**](https://github.com/SukbeomH/CxChanger) <sub>fork of [cx330-TXY/CxChanger](https://github.com/cx330-TXY/CxChanger)</sub> — 저비용 예열식 다중 핫엔드 툴체인저. 한/영 문서·Klipper 설정 번역과 용어 정리 <sub>`Klipper` `OrcaSlicer`</sub>
- [**CrosspointFork**](https://github.com/SukbeomH/CrosspointFork) <sub>fork of [crosspoint-reader/crosspoint-reader](https://github.com/crosspoint-reader/crosspoint-reader)</sub> — Xteink X4 e-paper 리더 한국어 펌웨어. UI 320+ 문자열 번역, 한글 폰트, CJK 줄바꿈, 커뮤니티 포크 기능 통합 <sub>`C++` `ESP32`</sub>

### 🔒 Private work

<sub>비공개 저장소는 이름 없이 분야별로 요약합니다.</sub>

- **📈 자동매매** — 증권사 API 기반 시트 주도 자동매매 데몬과 Windows 앱을 직접 실운영. 구현 에이전트와 독립 리뷰 세션을 분리하고 주문 경로는 fail-closed로 설계. 이와 별도로 point-in-time 투자 리서치·페이퍼 트레이딩 파이프라인과 이벤트 기반 퀀트 프레임워크를 연구
- **🧠 에이전트 인프라** — Obsidian 볼트를 원본으로 여러 에이전트 하네스(Claude Code·Codex·Gemini·Hermes 등)의 지침·스킬·메모리를 렌더링·배포하는 체계, 프로젝트 설정형 브라우저 QA 러너, 출처·인용을 불변 리비전으로 추적하는 증거 저장소, 오케스트레이터 + 샌드박스 승인 흐름 PoC
- **📚 지식 운영** — NotebookLM을 출처 기반 합성 계층으로, Obsidian을 canonical 저장소로 두는 리서치 운영 모델과 OKF/OWL 관점의 지식베이스 구조화
- **🏠 홈랩 · 자동화** — Proxmox 홈랩 운영 워크스페이스(API 래퍼·상태 점검·스토리지·원격 접근)와 Home Assistant 연동, Android 컨테이너 기반 모바일 앱 UI 자동화 CLI
- **🎮 기타** — Godot 4 퍼즐 게임 데모(역방향 레벨 생성기·난이도 측정), Steam Controller 2 햅틱 출력 리서치

---

## 📝 Recent Posts

- [\[EKS\] status.Phase: Invalid value: "Active": may only be 'Terminating' if `deletionTimestamp` is not empty](https://veritasgarage.tistory.com/286) <sub>2025-05-07</sub>
- [\[K8s\] 기계는 죽지 않는다, 다만 다시 뜰 뿐](https://veritasgarage.tistory.com/285) <sub>2025-04-22</sub>
- [\[K8s\] 개요, 키워드, 총정리](https://veritasgarage.tistory.com/284) <sub>2025-04-22</sub>
- [RSS 피드를 사용하여 Github 프론트 페이지 자동 업데이트](https://veritasgarage.tistory.com/283) <sub>2024-10-17</sub>
- [\[ML\] 통계 기초 :: 추론 통계](https://veritasgarage.tistory.com/282) <sub>2024-09-09</sub>

<sub>[더 보기 →](https://veritasgarage.tistory.com)</sub>
