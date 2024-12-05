"use client";

import BulletList from "../components/bulletList";
import ListStart from "../components/listStar";

export default function AboutPage() {
  return (
    <main className="pl-[350px] h-[100vh] flex justify-center items-center">
      <div className="p-20">
        <BulletList>
          <h2 className="text-xl mb-3 font-bold">Rafael Meza</h2>
          <ul>
            <ListStart>
              Known for delivering high-quality, efficient solutions, I thrive
              in cross-functional teams. I specialize in ReactJS, HTML5, and
              CSS3, with a keen focus on optimizing UI/UX designs and ensuring
              technical feasibility.
            </ListStart>
          </ul>
        </BulletList>
        <BulletList>
          <h2 className="text-xl mb-3 font-bold">Skills</h2>
          <ul>
            <ListStart>
              Frontend Development: ReactJS, HTML5, CSS3, JavaScript.
            </ListStart>
            <ListStart>
              Testing & Tools: Jest, Git, Scrum methodology.
            </ListStart>
            <ListStart>CMS Development: PHP, MODX.</ListStart>
          </ul>
        </BulletList>
        <BulletList>
          <h2 className="text-xl mb-3 font-bold">Soft Skills</h2>
          <ul>
            <ListStart>Critical thinking</ListStart>
            <ListStart>Proactive problem-solving</ListStart>
            <ListStart>Strong organizational abilities</ListStart>
          </ul>
        </BulletList>
        <BulletList>
          <h2 className="text-xl mb-3 font-bold">Professional Experience</h2>
          <h3 className="pl-4 font-bold mb-2">
            Senior Software Engineer – Able.co (Nov 2016 - Sep 2024):
          </h3>
          <ul>
            <ListStart>
              Developed reusable components and conducted component testing
              using Jest.
            </ListStart>
            <ListStart>
              Streamlined processes for business requirements.
            </ListStart>
            <ListStart>Validated and implemented UI/UX designs.</ListStart>
          </ul>
        </BulletList>
      </div>
    </main>
  );
}
