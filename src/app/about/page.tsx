"use client";

import BulletList from "../components/bulletList";
import UnderlinedLink from "../components/link";
import ListStart from "../components/listStar";

export default function AboutPage() {
  return (
    <main className="lg:pl-[350px] md:pl-[250px] md:min-h-[100vh] py-[100px] md:py-0 flex justify-center items-center">
      <div className="p-4 md:p-20">
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
            Senior Software Engineer -
            <UnderlinedLink
              href="https://able.co/"
              title="Able.co"
            ></UnderlinedLink>{" "}
            (Nov 2016 - Sep 2024):
          </h3>
          <ul className="mb-4">
            <ListStart>
              Developed reusable components and conducted component testing
              using Jest.
            </ListStart>
            <ListStart>
              Streamlined processes for business requirements.
            </ListStart>
            <ListStart>Validated and implemented UI/UX designs.</ListStart>
            <ListStart>
              Conducted component testing using Jest, maintaining code quality
              and reliability within Agile teams.
            </ListStart>
          </ul>
          <h3 className="pl-4 font-bold mb-2">
            Software Engineer -{" "}
            <UnderlinedLink
              title="Red Cientifica Peruana"
              href="https://rcp.pe/"
            ></UnderlinedLink>{" "}
            (Jun 2015 - Jun 2016):
          </h3>
          <ul className="mb-4">
            <ListStart>
              Collaborated on various web projects, enhancing UI components and
              contributing to user-friendly interfaces.
            </ListStart>
          </ul>
          <h3 className="pl-4 font-bold mb-2">
            Frontend Developer -{" "}
            <UnderlinedLink
              title="Manya.pe"
              href="https://manya.pe/"
            ></UnderlinedLink>{" "}
            (Feb 2011 - May 2015):
          </h3>
          <ul className="mb-4">
            <ListStart>
              Implemented visual elements by converting PSD designs to HTML.
            </ListStart>
            <ListStart>
              Built and maintained CMS systems using PHP and MODX, ensuring
              content scalability and ease of use.
            </ListStart>
          </ul>
        </BulletList>
      </div>
    </main>
  );
}
