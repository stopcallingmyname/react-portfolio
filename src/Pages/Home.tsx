import {FC, Suspense, lazy} from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
const About = lazy(() => import('../components/About'));
const Projects = lazy(() => import('../components/Projects'));
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import {Spinner} from '@nextui-org/spinner';

const Home: FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<Spinner color="primary" />}>
        <About />
      </Suspense>
      <Suspense fallback={<Spinner color="primary" />}>
        <Projects />
      </Suspense>
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
