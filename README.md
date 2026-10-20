<!-- 자동 생성 파일입니다. 직접 수정하지 말고 content/ 를 고친 뒤 `npm run build` 하세요. -->

![SukbeomH](https://capsule-render.vercel.app/api?type=rounded&height=150&color=timeGradient&text=SukbeomH&section=header&reversal=false&desc=Cloud%20%C2%B7%20AI%20Platform%20Engineer&fontAlignY=45&descAlignY=80&descSize=20)

## 안녕하세요, 홍석범입니다 👋

**SK AX**에서 Kubernetes 위에 AI 플랫폼을 만드는 Cloud · AI Platform Engineer입니다. 심리학에서 시작해 백엔드 → AI → 클라우드 인프라로 영역을 넓혀왔습니다.

업무 밖에서는 **AI 코딩 에이전트를 팀처럼 운영하는 방법**을 실험합니다. 세션 라우팅과 SPEC → PLAN → EXECUTE → VERIFY 워크플로우, Obsidian 지식 백본, 구현과 리뷰를 분리한 교차 검증이 도구입니다. 이 방식으로 실운영 자동매매 데몬, 홈랩 운영 도구, 3D 프린터 펌웨어 플러그인을 직접 만들고 운영합니다.

불확실하면 멈추는 **fail-closed** 설계와, 실행 결과로 증명하는 검증을 원칙으로 삼습니다.

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

### 🤖 AI · Agents — 에이전트를 팀처럼 굴리기

- [**HExoskeleton**](https://github.com/SukbeomH/HExoskeleton) — Claude Code 플러그인 마켓플레이스. front 세션 하나에 말하면 주제별 작업 세션으로 전달·생성·회수·병합하는 **router**와, SPEC → PLAN → EXECUTE → VERIFY 방법론 **hxsk**(Codex·Hermes 호환). 검증 단계 동시 실행, 승인·거부 결정의 front 문맥 반영 <sub>`bash` `python stdlib` `Claude Code`</sub>
- [**RAG-Bench**](https://github.com/SukbeomH/RAG-Bench) — 한국어 PDF RAG 정량 벤치마크 모노레포. PDF 파서 8종(OmniDocBench NED/TEDS)과 임베딩·검색·리랭커 조합 60가지(RAGAS)를 비교해 프로덕션 조합 선정, K8s 병렬 파싱, 단위 테스트 77개 <sub>`LangGraph` `uv workspace` `RAGAS` `K8s`</sub>
- [**bok-economic-analyst**](https://github.com/SukbeomH/bok-economic-analyst) — Supervisor/Researcher/Analyst 멀티 에이전트 경제 분석. PDF RAG + 웹 검색 + KOSIS 통계 API로 근거 수집, 출처 추적, 대화 히스토리 주입, plotly 차트 자동 생성 <sub>`LangGraph` `FAISS` `Streamlit`</sub>
- [**Acta-Ergo-Sum**](https://github.com/SukbeomH/Acta-Ergo-Sum) — GitHub 활동(추출기 13종)을 LLM 친화적 Markdown 지식베이스로 수집하고 레포를 딥 분석하는 CLI · MCP 서버. pytest 83개, PyPI 배포 설정 <sub>`Python` `Typer` `FastMCP`</sub>
- [**chat-ui**](https://github.com/SukbeomH/chat-ui) <sub>fork of [huggingface/chat-ui](https://github.com/huggingface/chat-ui)</sub> — HuggingChat 기반 채팅 UI 한국어판. 보안 프록시 검증 핸들러, 멀티모달 첨부, 보안 API 로깅, 대화·디버그 CSV export <sub>`SvelteKit` `TypeScript`</sub>

### 🖨️ 3D Printing · Firmware — 손에 잡히는 하드웨어

- [**klipperized-LLL-plus-buffer**](https://github.com/SukbeomH/klipperized-LLL-plus-buffer) — Mellow/Fly LLL Plus 버퍼를 Klipper MCU로 구동. extruder_stepper 동기화 + 홀센서 중앙 유지, 극단 구간은 TMC VACTUAL로 복구 <sub>`Klipper` `Python` `STM32`</sub>
- [**bdwidth**](https://github.com/SukbeomH/bdwidth) <sub>fork of [markniu/bdwidth](https://github.com/markniu/bdwidth)</sub> — 필라멘트 폭·이동 센서 Klipper 포크. USB 프레임 검증 강화, 이상치 필터, 유량 스케일링·모션 상태, 이상치 발생 시 CCD 파형 진단 스냅샷 <sub>`Klipper` `Python`</sub>
- [**CxChanger**](https://github.com/SukbeomH/CxChanger) <sub>fork of [cx330-TXY/CxChanger](https://github.com/cx330-TXY/CxChanger)</sub> — 저비용 예열식 다중 핫엔드 툴체인저. 한/영 문서·Klipper 설정 번역과 용어 정리 <sub>`Klipper` `OrcaSlicer`</sub>
- [**CrosspointFork**](https://github.com/SukbeomH/CrosspointFork) <sub>fork of [crosspoint-reader/crosspoint-reader](https://github.com/crosspoint-reader/crosspoint-reader)</sub> — Xteink X4 e-paper 리더 한국어 펌웨어. 한글 폰트 SD 스트리밍, CJK 줄바꿈, TXT 챕터 자동 감지, 도서별 설정, CMake 호스트 테스트 5종과 릴리스 CI, 업스트림 1.2.0 병합 <sub>`C++` `ESP32` `PlatformIO`</sub>

### 🔒 Private work — 이름 없이 분야만

- **📈 자동매매 · 퀀트** — 시트 주도 자동매매 데몬(Linux)과 Windows 앱을 실계좌로 운영 — 브로커 변경·결과 불명 시 차단하는 fail-closed 주문 경로, 구현 에이전트와 독립 리뷰 세션 분리, 테스트 248 파일, 태그 릴리스. 별도로 point-in-time 투자 리서치 파이프라인(append-only 리비전 DB, 사전등록 연구, 페이퍼 트레이딩만), 백테스트와 paper가 같은 파이프라인을 쓰는 이벤트 기반 퀀트 프레임워크(테스트 약 1,600개), 공개 데이터 기반 방어형 리밸런싱 검증을 연구
- **🧠 에이전트 인프라** — Obsidian 볼트를 원본으로 10여 종 에이전트 하네스(Claude Code·Codex·Gemini·Hermes 등)의 지침·스킬·메모리를 렌더링·배포하고 Stop 훅으로 자동 동기화하는 체계, JSON으로 역할·검사를 정의해 격리 Chromium에서 돌리는 브라우저 QA 러너(쓰기 3중 승인·종료코드 규약), 소스 리비전·인용을 결정론적으로 추적하는 증거 저장소(stdlib만, 내구성 잡·리스, MCP 어댑터), 오케스트레이터 + 전문가 리뷰어 + 샌드박스 승인 흐름 PoC
- **📚 지식 운영** — 제텔카스텐 + KDC 십진분류로 구성한 Obsidian 볼트를 canonical 저장소로, NotebookLM을 출처 기반 합성 계층으로 두는 리서치 운영 모델과 OKF/OWL 관점의 지식베이스 구조화
- **🏠 홈랩 · 자동화** — Proxmox 홈랩 운영 워크스페이스(PVE API 래퍼·상태 점검·인벤토리·Tailscale 원격 접근·SMB 스토리지·systemd)와 Home Assistant 연동, Android 컨테이너(redroid) 기반 모바일 앱 UI 자동화 CLI(adb·systemd 자동복구·웹 UI, 실기기 e2e 검증)
- **🎮 기타** — Godot 4 퍼즐 게임 데모(역방향 레벨 생성기·난이도 지표, 헤드리스 테스트 89건, 150레벨 자동 생성·검증), Steam Controller 2 HD 햅틱을 위한 햅틱 변환 계층 리서치(C#/.NET HID), human-in-the-loop 이미지 상품검색 PoC

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
