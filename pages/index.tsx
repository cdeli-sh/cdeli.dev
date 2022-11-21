import Head from "next/head";
import Projects from "../components/Projects";
import Hero from "../components/Hero";
import ReactiveContainer from "../components/ReactiveContainer";
import TitleRow from "../components/TitleRow";

export default function Home() {
  return (
    <div>
      <Head>
        <title>cdeli.dev</title>
        <meta name="description" content="Mon 'Curiculum vitae' interactif" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ReactiveContainer>
        <Hero />

        <TitleRow id="projects">Projets développés</TitleRow>

        <Projects />
      </ReactiveContainer>
    </div>
  );
}
