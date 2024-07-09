import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

/**
 * README.MD에 작성될 페이지 텍스트
 * @type {string}
 */
let text = `
<!-- Header -->
![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=360&text=SukbeomH&fontSize=80&fontAlign=50&fontAlignY=50&desc=%EA%B0%9C%EB%B0%9C%EC%83%88%EB%B0%9C+%EA%B0%9C%EB%B0%9C+%EA%B8%B0%EB%A1%9D&descSize=15&descAlign=50&descAlignY=60)

***
# 🍊 SukbeomH의 깃허브 프로필입니다. 👋
***

<div align="center">

![SukbeomH's GitHub stats](https://github-readme-stats.vercel.app/api?username=SukbeomH&show_icons=true&theme=transparent)

</div>

<!-- Body -->
## ⚒️👷 **Now I'm Diggin**
![python](https://img.shields.io/badge/python-3776AB.svg?&style=for-the-badge&logo=python&logoColor=white)
![NumPy](https://img.shields.io/badge/numpy-013243.svg?&style=for-the-badge&logo=numpy&logoColor=white)
![pandas](https://img.shields.io/badge/pandas-150458.svg?&style=for-the-badge&logo=pandas&logoColor=white) 
![PyTorch](https://img.shields.io/badge/pytorch-EE4C2C.svg?&style=for-the-badge&logo=pytorch&logoColor=white) 
![colab](https://img.shields.io/badge/colab-F9AB00.svg?&style=for-the-badge&logo=googlecolab&logoColor=white)
![MLflow](https://img.shields.io/badge/mlflow-0194E2.svg?&style=for-the-badge&logo=mlflow&logoColor=white) 
![Apache Kafka](https://img.shields.io/badge/apachekafka-231F20.svg?&style=for-the-badge&logo=apachekafka&logoColor=white) 
![Spring](https://img.shields.io/badge/spring-6DB33F.svg?&style=for-the-badge&logo=spring&logoColor=white) 

### **🧑‍💻 Lang and Frameworks**
![JavaScript](https://img.shields.io/badge/javascript-F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-3178C6.svg?&style=for-the-badge&logo=typescript&logoColor=white) ![Node.js](https://img.shields.io/badge/nodedotjs-339933.svg?&style=for-the-badge&logo=nodedotjs&logoColor=white) ![NestJS](https://img.shields.io/badge/nestjs-E0234E.svg?&style=for-the-badge&logo=nestjs&logoColor=white) ![MariaDB](https://img.shields.io/badge/mariadb-003545.svg?&style=for-the-badge&logo=mariadb&logoColor=white) ![Electron](https://img.shields.io/badge/electron-47848F.svg?&style=for-the-badge&logo=electron&logoColor=white) 

### **🛠️ Infra and Tools**
![Docker](https://img.shields.io/badge/docker-2496ED.svg?&style=for-the-badge&logo=docker&logoColor=white) ![Proxmox](https://img.shields.io/badge/proxmox-E57000.svg?&style=for-the-badge&logo=proxmox&logoColor=white) ![Debian](https://img.shields.io/badge/debian-A81D33.svg?&style=for-the-badge&logo=debian&logoColor=white) ![Ubuntu](https://img.shields.io/badge/ubuntu-E95420.svg?&style=for-the-badge&logo=ubuntu&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/githubactions-2088FF.svg?&style=for-the-badge&logo=githubactions&logoColor=white) 

<div align="center">
  
![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=SukbeomH)

</div>
<div align="center">
  
# [🌏 SukbeomH의 블로그로 가기!. 🚀](https://veritasgarage.tistory.com/)

</div>

<div align="center">

`;

// rss-parser 생성
const parser = new Parser({
    headers: {
        Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
    }});

(async () => {

    // 피드 목록
    const feed = await parser.parseURL('https://veritasgarage.tistory.com/rss');

    // 최신 5개의 글의 제목과 링크를 가져온 후 text에 추가
    for (let i = 0; i < 15; i++) {
        const {title, link} = feed.items[i];
        console.log(`${i + 1}번째 게시물`);
        console.log(`추가될 제목: ${title}`);
        console.log(`추가될 링크: ${link}`);
        // text += `#### <a href=${link}>${title}</a></br>`;
        text += `#### ![📝](${link}) [${title}](${link})</br>`;
    }
    // 최종적으로 블로그 게시물 목록을 닫음
    text += '\
        </div> ';
    // README.md 파일 작성
    writeFileSync('README.md', text, 'utf8', (e) => {
        console.log(e)
    })

    console.log('업데이트 완료')
})();