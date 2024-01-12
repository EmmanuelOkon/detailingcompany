import Layout from "../components/layout";
import Hero from "../components/home/hero";
import Services from "../components/home/services";
import Testimonials from "../components/home/testimonials";
import About from "../components/home/about";
import Contact from "../components/home/contact";

function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Testimonials />
      <About />
      <Contact />
    </Layout>
  );
}

export default Home;
