import { writeFileSync } from "node:fs";
import Parser from "rss-parser";

const MAX_POSTS = 10;

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */
let text = `
<!-- Header -->
![header](https://capsule-render.vercel.app/api?type=rounded&height=150&color=timeGradient&text=SukbeomH&section=header&reversal=false&desc=결국에는%20해결해내는%20개발자의%20전투%20기록&fontAlignY=45&descAlignY=80&descSize=25)

<div align="center" style="display: flex;">
    <img src="https://github-readme-stats.vercel.app/api?username=SukbeomH&show_icons=true&theme=transparent" alt="SukbeomH's GitHub stats" style="height: 230px;">
    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=SukbeomH" alt="Top Langs" style="height: 230px;">
</div>

<!-- Body -->

### **🧑‍💻 Lang and Frameworks**
![python](https://img.shields.io/badge/python-3776AB.svg?&style=for-the-badge&logo=python&logoColor=white)
![colab](https://img.shields.io/badge/colab-F9AB00.svg?&style=for-the-badge&logo=googlecolab&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-3178C6.svg?&style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/nodedotjs-339933.svg?&style=for-the-badge&logo=nodedotjs&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-E0234E.svg?&style=for-the-badge&logo=nestjs&logoColor=white)
![MariaDB](https://img.shields.io/badge/mariadb-003545.svg?&style=for-the-badge&logo=mariadb&logoColor=white)
![Electron](https://img.shields.io/badge/electron-47848F.svg?&style=for-the-badge&logo=electron&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%234479A1?style=for-the-badge&logo=mysql&logoColor=white)

### **🛠️ Infra and Tools**
![Docker](https://img.shields.io/badge/docker-2496ED.svg?&style=for-the-badge&logo=docker&logoColor=white)
![Proxmox](https://img.shields.io/badge/proxmox-E57000.svg?&style=for-the-badge&logo=proxmox&logoColor=white)
![Debian](https://img.shields.io/badge/debian-A81D33.svg?&style=for-the-badge&logo=debian&logoColor=white)
![Ubuntu](https://img.shields.io/badge/ubuntu-E95420.svg?&style=for-the-badge&logo=ubuntu&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/githubactions-2088FF.svg?&style=for-the-badge&logo=githubactions&logoColor=white)
![Amazon Web Services](https://img.shields.io/badge/AmazonWebServices-%23FF9900?style=for-the-badge&logo=amazonwebservices&logoColor=white)
![GoogleCloudPlatform](https://img.shields.io/badge/GoogleCloudPlatform-%234285F4?style=for-the-badge&logo=google&logoColor=white)


![story](https://capsule-render.vercel.app/api?type=venom&height=100&color=timeGradient&text=Story&section=header&reversal=false&fontAlignY=55&descAlignY=80&descSize=25&fontColor=000000&stroke=ffffff&strokeWidth=2)

## 경력 및 프로젝트

### 📖 History
- **2014.03 ~ 2020.08** : 중앙대학교 심리학과 졸업
- **2021.03 ~ 2021.12** : 2021 디지털 콘텐츠 미래인재 발굴사업 XR 콘텐츠 개발자 과정 수료
- **2022.03 ~ 2022.05** : 코드캠프 백엔드 개발자 양성과정 수료
- **2022.05 ~ 2022.07** : (주) 딩코 기업협업 프로젝트 참여
- **2022.07 ~ 2024.01** : (주) 에이시지알 백엔드 개발자로 근무
- **2024.06 ~ 2024.12** : 우리금융그룹 우리FIS 아카데미 AI 엔지니어링 교육 수료

### **Working**
- **2025.01** **~** : SK C&C Cloud/Infra Engineer **Now 🖐️**

### 🚀 Projects

**2021.05 ~ 2021.08** | **VR 발표공포증 서비스 개발**
- **Unreal Engine 4**와 **Oculus Quest 2**를 활용한 VR 서비스 개발
- 주요 역할: 언리얼 엔진 개발
- 성과: 메타버스 공모전 최종 심사 진출

**2021.09 ~ 2021.12** | 출산 시뮬레이터 개발
- SPTek과 협업하여 진행
- Unreal Engine 4를 이용한 **핸드트래킹** 기반 출산 시뮬레이터 개발
- 주요 역할: 언리얼 엔진 개발
- 성과: 코엑스에서 진행된 ‘K-메타버스 엑스포’에서 전시, **장려상 수상**

**2022.05 ~ 2022.07** | **온라인 동영상 강의 플랫폼** 개발
- 주요역할:백엔드 서버 개발, 관리자 단 서비스 구축
- 성과:
    - Node.js, NestJS, Typescript, MySQL을 활용한 백엔드 서버 개발
    - Jest를 통한 유닛 테스트로 코드 품질 유지
    - 서비스의 성능과 안정성을 보장하는 API 개발

**2022.07 ~ 2024.01** | **인적성 검사** 플랫폼 개발
- 기존 오프라인 검사를 온라인에서 진행할 수 있는 플랫폼을 구축
- 주요역할: DB 설계, 백엔드 개발, 서버 관리, 응용 프로그램 제작, 서비스 배포 및 운영
- 성과:
    - Docker 도입을 통해 개발 환경 파편화 문제를 해결하고, 배포와 운영을 자동화
    - Java 기반의 기존 프로젝트를 Node.js로 이관 및 성능 개선
    - PDF, Excel 파일 변환 기능 개발을 통해 데이터 처리의 편의성을 증대

**2024.10 ~ 2024.12** | **우대리** 개발
- 상품 개발(및 마케팅)에 필요한 정보를 대시보드로 시각화 하며, 대시보드 내 정보를 챗봇을 통해 쉽게 이해하고 분석할 수 있도록 구현한 대직원 서비스
- 주요역할: 서버 관리, 서비스 배포 및 운영
- 성과:
		- Django 프레임워크로 웹페이지 구현
		- Airflow를 활용한 데이터 파이프라인 구성
		- Elasticsearch를 활용한 RAG 검색 기능 구현
		- 금융 도메인 지식 습득
		- **우리 FIS 아카데미 3기 최종 우승**


![blog](https://capsule-render.vercel.app/api?type=waving&height=150&color=timeGradient&text=🍊%20SukbeomH의%20블로그로%20가기!%20🚀&fontSize=40&reversal=false)

<div align="center">
`;

// rss-parser 생성
const parser = new Parser({
	headers: {
		Accept: "application/rss+xml, application/xml, text/xml; q=0.1",
	},
});

(async () => {
	// 피드 목록
	const feed = await parser.parseURL("https://veritasgarage.tistory.com/rss");

	// 최신 글을 가져온 후 text에 추가
	for (let i = 0; i < Math.min(MAX_POSTS, feed.items?.length ?? 0); i++) {
		const { title, link } = feed.items[i];
		console.log(`${i + 1}번째 게시물`);
		console.log(`추가될 제목: ${title}`);
		console.log(`추가될 링크: ${link}`);
		text += `\n#### [📝 ${title}](${link})</br>`;
	}
	text += "\n</div>\n";
	// README.md 파일 작성
	writeFileSync("README.md", text, "utf8");

	console.log("업데이트 완료");
})();
