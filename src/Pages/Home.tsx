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
      <Suspense
        fallback={
          <>
            <h1 style={{color: '#000', fontSize: 50, textAlign: 'center'}}>
              Загрузка...
            </h1>
          </>
        }
      >
        <About />
      </Suspense>
      <Suspense
        fallback={
          <>
            <h1 style={{color: '#000', fontSize: 50, textAlign: 'center'}}>
              Загрузка...
            </h1>
          </>
        }
      >
        <Projects />
      </Suspense>
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
