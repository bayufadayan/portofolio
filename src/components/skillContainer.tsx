import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function SkillContainer({ skills }: { skills: any }) {
    const chunkSize = 12;
    const overlap = 4;
    const chunkedSkills = [];
    for (let i = 0; i < skills.length; i += chunkSize - overlap) {
        chunkedSkills.push(skills.slice(i, i + chunkSize));
    }

    return (
        <div className="portoSkill">
            <div className="skillContainer">
                {chunkedSkills.map((row, index) => (
                    <div
                        key={index}
                        className={`skillRow ${index % 2 === 0 ? "slideLoop" : "slideLoopReverse"}`}
                    >
                        {row.map((skill: { icon_url: string | undefined; skill_name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, idx: Key | null | undefined) => (
                            <div key={idx} className="skill">
                                <i className={skill.icon_url}></i>
                                <span>{skill.skill_name}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
