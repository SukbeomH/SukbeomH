<!-- 자동 생성 파일입니다. 직접 수정하지 말고 content/ 를 고친 뒤 `npm run build` 하세요. -->

![SukbeomH](https://capsule-render.vercel.app/api?type=rounded&height=150&color=timeGradient&text=SukbeomH&section=header&reversal=false&desc=Cloud%20%C2%B7%20AI%20Platform%20Engineer&fontAlignY=45&descAlignY=80&descSize=20)

## 안녕하세요, 홍석범입니다 👋

**SK AX**에서 Kubernetes 기반 AI 플랫폼을 만듭니다. 심리학에서 출발해 백엔드와 AI 개발을 거쳐, Cloud · AI Platform Engineer로 일하고 있습니다.

업무 밖에서는 **AI 코딩 에이전트를 팀처럼 운영하는 방법**을 실험하며, 자동매매 시스템·홈랩 도구·3D 프린터 펌웨어를 직접 만들고 운영합니다.

운영 자동화에서는 실행 조건이나 결과를 확인할 수 없을 때 멈추는 **fail-closed** 설계를 지향합니다. 구현과 리뷰를 분리하고 실행 결과로 검증합니다.

🔭 **Now** · RAG Quality Evaluation & Serving · Kubernetes AI Infra (GPU · Webhook · Helm) · AI Agent Orchestration · Fail-closed Automation

📫 [Email](mailto:brent93.dev@gmail.com) · [LinkedIn](https://www.linkedin.com/in/sukbeomh) · [Blog](https://veritasgarage.tistory.com)

## 🛠 What I build

- **Kubernetes 플랫폼** — Admission Webhook(Go), Helm · ArgoCD 배포, GPU 자원 할당 제어, Lease API 분산 락
- **LLM 애플리케이션** — RAG 파이프라인(LangGraph · Qdrant · OpenSearch), 검색 품질 평가(LLM Judge + Human feedback), 프롬프트 반복 최적화와 출력 제어, LiteLLM 프록시
- **검증·자동화** — Playwright E2E(오프라인 번들), 정적 분석 빌드 게이트, CI/CD 설계, fail-closed 운영 자동화
- **프런트엔드** — React · TypeScript 반응형 화면

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

---

## 🧪 Projects & Interests

### ⭐ Selected Projects — 에이전트 운영부터 AI 평가와 자동화까지

- [**HExoskeleton**](https://github.com/SukbeomH/HExoskeleton) — AI 코딩 에이전트의 작업 세션을 연결하는 플러그인 모음. **router**는 Claude Code 세션을 라우팅하고, **hxsk**는 SPEC → PLAN → EXECUTE → VERIFY 워크플로우를 제공하며 Codex·Hermes도 지원합니다. <sub>`bash` `python stdlib` `Claude Code`</sub>
- [**RAG-Bench**](https://github.com/SukbeomH/RAG-Bench) — 한국어 PDF RAG 구성을 비교·평가하는 벤치마크. PDF 파서 8종과 검색 파이프라인 조합 60가지를 비교해 프로덕션 구성 선정에 활용합니다. <sub>`LangGraph` `uv workspace` `RAGAS` `K8s`</sub>
- [**kakao-cli**](https://github.com/SukbeomH/kakao-cli) — Android 카카오톡을 제어하는 CLI·TUI와 웹 기기 콘솔. DB 읽기 전용 조회와 adb UI 조작을 결합하고, redroid를 Docker Compose로 상시 운영합니다. <sub>`Python` `adb` `redroid` `Docker Compose`</sub>

### 🤖 AI · Agents — 분석과 지식 수집 도구

- [**bok-economic-analyst**](https://github.com/SukbeomH/bok-economic-analyst) — PDF RAG·웹 검색·KOSIS 통계를 결합한 멀티 에이전트 경제 분석 도구. 근거와 출처를 수집하고 분석 결과를 차트로 시각화합니다. <sub>`LangGraph` `FAISS` `Streamlit`</sub>
- [**Acta-Ergo-Sum**](https://github.com/SukbeomH/Acta-Ergo-Sum) — GitHub 활동과 저장소 구조를 LLM이 활용할 수 있는 Markdown 지식베이스로 정리하는 CLI·MCP 서버. <sub>`Python` `Typer` `FastMCP`</sub>
- [**chat-ui**](https://github.com/SukbeomH/chat-ui) <sub>fork of [huggingface/chat-ui](https://github.com/huggingface/chat-ui)</sub> — HuggingChat 기반 한국어 채팅 UI. 보안 프록시 검증, 멀티모달 첨부, 대화·디버그 데이터 내보내기를 확장했습니다. <sub>`SvelteKit` `TypeScript`</sub>

### 🖨️ Hardware · Firmware — 손에 잡히는 하드웨어

- [**klipperized-LLL-plus-buffer**](https://github.com/SukbeomH/klipperized-LLL-plus-buffer) — Mellow/Fly LLL Plus 필라멘트 버퍼를 Klipper에서 구동하는 플러그인. 압출기 동기화와 홀센서 피드백으로 버퍼 위치를 제어합니다. <sub>`Klipper` `Python` `STM32`</sub>
- [**bdwidth**](https://github.com/SukbeomH/bdwidth) <sub>fork of [markniu/bdwidth](https://github.com/markniu/bdwidth)</sub> — 필라멘트 폭·이동 센서의 Klipper 연동 포크. USB 데이터 검증과 이상치 필터링을 강화하고 센서 진단 기능을 추가했습니다. <sub>`Klipper` `Python`</sub>
- [**CxChanger**](https://github.com/SukbeomH/CxChanger) <sub>fork of [cx330-TXY/CxChanger](https://github.com/cx330-TXY/CxChanger)</sub> — 저비용 예열식 다중 핫엔드 툴체인저 프로젝트. 문서와 Klipper 설정을 번역하고 한·영 용어를 정리했습니다. <sub>`Klipper` `OrcaSlicer`</sub>
- [**CrosspointFork**](https://github.com/SukbeomH/CrosspointFork) <sub>fork of [crosspoint-reader-ko/crosspoint-reader-ko](https://github.com/crosspoint-reader-ko/crosspoint-reader-ko)</sub> — Xteink X4 전자책 리더의 한국어 펌웨어 포크. 한글 폰트 스트리밍·CJK 줄바꿈·TXT 챕터 감지를 확장하고 커뮤니티 기능을 통합했습니다. 원본은 [CrossPoint Reader](https://github.com/crosspoint-reader/crosspoint-reader)입니다. <sub>`C++` `ESP32` `PlatformIO`</sub>

### 🔒 Private work — 이름 없이 분야만

- **📈 자동매매 · 퀀트** — 실계좌 자동매매 시스템을 운영하며, 브로커 변경이나 주문 결과 불명 시 실행을 차단합니다. 별도로 시점별 데이터에 기반한 투자 리서치와 백테스트·페이퍼 트레이딩 파이프라인을 연구합니다.
- **🧠 에이전트 인프라** — 여러 코딩 에이전트의 지침·스킬·메모리를 Obsidian에서 동기화합니다. 브라우저 QA, 출처·리비전 추적, 독립 리뷰와 실행 승인을 연결하는 도구를 만듭니다.
- **📚 지식 운영** — 제텔카스텐과 KDC 분류를 적용한 Obsidian 볼트를 기준 저장소로 삼고, NotebookLM으로 출처에 기반한 리서치 내용을 종합합니다.
- **🏠 홈랩 · 자동화** — Proxmox 홈랩의 상태 점검·자원 관리·원격 접근을 자동화하고 Home Assistant를 연동합니다.
- **🎮 기타** — Godot 퍼즐 게임의 레벨 자동 생성·검증, 컨트롤러 햅틱 변환, 사용자 확인을 거치는 이미지 상품검색을 실험합니다.

📌 **Interests** · AI agent orchestration · RAG evaluation · Fail-closed automation · Homelab (Proxmox) · Klipper · e-paper · Quant research · Knowledge ops (Obsidian)

---

## 💼 Career

- **2025.01 ~** · SK AX · Cloud · AI Platform Engineer (AI Innovation Lab)
- **2022.07 ~ 2023.12** · (주) ACGR · Backend Developer

<details>
<summary><b>📖 History</b></summary>

- **2024** · 우리FIS 아카데미 AI 엔지니어링 3기 수료 — 최종 프로젝트 **우대리**(RAG 대직원 챗봇, Django·OpenSearch·Airflow) 최종 우승
- **2022.07 ~ 2023.12** · (주) ACGR 백엔드 개발자
- **2022.03 ~ 2022.07** · 코드캠프 백엔드 과정 수료 → 온클(Onkul) 기업협업
- **2021.04 ~ 2021.12** · 언리얼 XR 개발자 과정 수료 (과기정통부 메디치센터)
- **2014.03 ~ 2020.08** · 중앙대학교 심리학과 졸업

</details>

<sub>상세 경력은 [LinkedIn](https://www.linkedin.com/in/sukbeomh)</sub>

---

## 📝 Blog

- [\[EKS\] status.Phase: Invalid value: "Active": may only be 'Terminating' if `deletionTimestamp` is not empty](https://veritasgarage.tistory.com/286) <sub>2025-05-07</sub>
- [\[K8s\] 기계는 죽지 않는다, 다만 다시 뜰 뿐](https://veritasgarage.tistory.com/285) <sub>2025-04-22</sub>
- [\[K8s\] 개요, 키워드, 총정리](https://veritasgarage.tistory.com/284) <sub>2025-04-22</sub>
- [RSS 피드를 사용하여 Github 프론트 페이지 자동 업데이트](https://veritasgarage.tistory.com/283) <sub>2024-10-17</sub>
- [\[ML\] 통계 기초 :: 추론 통계](https://veritasgarage.tistory.com/282) <sub>2024-09-09</sub>

<sub>[더 보기 →](https://veritasgarage.tistory.com)</sub>
