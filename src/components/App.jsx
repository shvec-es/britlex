import Header from './Header/Header';
import Hero from './Hero/Hero';
import Skills from './Skills/Skills';
import { skills } from '../data/skills.js';
import stats from '../data/stats.json';
import { prices } from '../data/price';
import About from './About/About';
import Price from './Price/Price';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills title="Skills" data={skills} />
        <About stats={stats} />
        <Price prices={prices} />
        <Contact />
      </main>
      <Footer />
    </>
  );
};
