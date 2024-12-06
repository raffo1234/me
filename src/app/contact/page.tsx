import BulletList from "../components/bulletList";
import UnderlinedLink from "../components/link";
import ListStart from "../components/listStar";
import Title from "../components/Title";

export default function ContactPage() {
  return (
    <main className="lg:pl-[350px] md:pl-[250px] md:h-[100vh] py-[100px] md:pt-0">
      <section className="p-4 md:p-20 w-full h-full flex justify-center items-center">
        <div>
          <Title>SAY HELLO!</Title>
          <h3 className="font-bold mb-10">I am accepting freelance jobs.</h3>
          <BulletList>
            <h4 className="mb-4 font-bold">Personal:</h4>
            <ListStart>
              <div className="flex items-center space-x-3">
                <span>EMAIL:</span>
                <UnderlinedLink
                  title="rhmcord@gmail.com"
                  href="mailto:rhmcord@gmail.com"
                />
              </div>
            </ListStart>
            <ListStart>PHONE: +51 - 997258592</ListStart>
          </BulletList>
          <BulletList>
            <h4 className="mb-4 font-bold">Development:</h4>
            <ListStart>
              <div className="flex space-x-3 items-center flex-wrap">
                <span>GITHUB:</span>
                <UnderlinedLink
                  title="raffo1234"
                  href="https://github.com/raffo1234"
                ></UnderlinedLink>
              </div>
            </ListStart>
            <ListStart>
              <div className="flex space-x-3 items-center flex-wrap">
                <span> LINKEDIN:</span>
                <UnderlinedLink
                  href="https://www.linkedin.com/in/rafael-meza/"
                  title="Rafael Meza"
                />
              </div>
            </ListStart>
          </BulletList>
        </div>
      </section>
    </main>
  );
}
