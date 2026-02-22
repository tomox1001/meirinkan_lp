import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Welcome from "./components/Welcome";
import Practice from "./components/Practice";
import Trial from "./components/Trial";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Welcome />
        <Practice />
        <Trial />
      </main>
      <Footer />
    </>
  );
}
