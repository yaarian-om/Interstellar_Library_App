// import InnerPageContainer from "@/components/common/InnerPageContainer";
import InnerPageContainer from "../pages/components/common/InnerPageContainer";
import _Layout from "./components/layout/_layout";

export default function Page() {
  return (
    <_Layout>
      <InnerPageContainer title="About Us">
        <p>
          Welcome to Interstellar Library, the cosmic junction where stories
          converge and knowledge illuminates. Our mission is to unite book
          enthusiasts, providing a celestial platform for sellers to showcase
          literary treasures and customers to embark on intergalactic reading
          journeys. From timeless classics to contemporary wonders, our
          user-friendly interface guides your exploration.
        </p>
        <p className="mt-8">
          Behind the scenes, our dedicated administrators and moderators ensure
          a harmonious orbit, maintaining quality and security. Interstellar
          Library isn't just a marketplace; it's a cosmic celebration of the
          written word, inviting you to join our universal family of readers,
          dreamers, and adventurers. Launch your literary odyssey with us and
          let books light up the galaxies of your imagination.
        </p>
        <p className="mt-8"></p>
      </InnerPageContainer>
    </_Layout>
  );
}
