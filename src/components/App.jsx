import Header from './Header/Header';
import Hero from './Hero/Hero';
import Skills from './Skills/Skills';
import { skills } from '../data/skills.js';

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Skills title="Skills" data={skills} />
    </>
  );
};
