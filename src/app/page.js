'use client';
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import SlidingImages from '../components/SlidingImages';
import Contact from '../components/Contact';
import Typo from '../components/Typo';
import ScrollEarth from '../components/ScrollEarth';
import Service from '@/components/Service';
import CardList from '@/components/CardList';
import Client from '@/components/Client';
import About from '@/components/About';

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  return (
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Service />
      {/* <Typo /> */}
      {/* <CardList /> */}
      <About />
      <Client />
      <Projects />
      <SlidingImages />
      <Contact />
    </main>
  )
}
