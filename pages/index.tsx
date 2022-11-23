import Head from "next/head";
import Projects from "../components/Projects";
import Hero from "../components/Hero";
import ReactiveContainer from "../components/ReactiveContainer";
import TitleRow from "../components/TitleRow";
import DateRows from "../components/DateRows";
import experiences from "../content/experiences";
import etudes from "../content/etudes";

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

        <DateRows
          data={experiences}
          title={{ id: "experiences", text: "Expériences" }}
        />

        <DateRows data={etudes} title={{ id: "etudes", text: "Etudes" }} />
      </ReactiveContainer>
    </div>
  );
}
