import {FC, Suspense, lazy} from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
const About = lazy(() => import('../components/About'));
const Projects = lazy(() => import('../components/Projects'));
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<h3 style={{textAlign: 'center'}}>Loading..</h3>}>
        <About />
      </Suspense>
      <Suspense fallback={<h3 style={{textAlign: 'center'}}>Loading..</h3>}>
        <Projects />
      </Suspense>
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
