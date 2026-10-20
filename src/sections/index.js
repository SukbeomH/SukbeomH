import header from "./header.js";
import intro from "./intro.js";
import stack from "./stack.js";
import experience from "./experience.js";
import projects from "./projects.js";
import blog from "./blog.js";

/** 섹션 레지스트리. config/site.json 의 sections 배열이 이 키를 순서대로 참조한다. "---" 는 구분선. */
export const SECTIONS = { header, intro, stack, experience, projects, blog };
