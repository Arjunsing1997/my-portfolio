import type { SkillCategory } from '../interface/interface';

export const profile = {
  name: "Your Name",
  role: "Full Stack & App Developer",
  about:
    "Experienced in building web and mobile applications with modern frameworks and cloud technologies.",
  skills: [
    { category: "Frontend", list: ["React", "Angular", "TypeScript", "Redux"] },
    { category: "Backend", list: ["Node.js", "Express", "MongoDB", "MySQL", "MSSQL"] },
    { category: "Mobile", list: ["Android Studio - Kotlin"] },
    { category: "Tools", list: ["Docker", "AWS", "Git"] },
  ] as SkillCategory[],
};
