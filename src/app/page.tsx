import { GiHummingbird } from "react-icons/gi";

export default function Home() {
  return (<main className="p-4">
    <button className="block relative z-20 mx-auto p-6 border-dark border-solid border-2 transition-colors rounded-full hover:bg-dark hover:text-orange">
        <GiHummingbird size={60} />
      </button>
    <section className="flex items-center z-10 justify-center absolute left-0 right-0 top-0 bottom-0 bg-orange">
      <div className="text-center">
      <h1 style={{fontSize: "144px"}}>
      RAFAEL MEZA
      </h1>
      <p style={{fontSize: "72px"}}>Senior Software Engineer</p>
      </div>
    </section>
    </main>
  );
}
