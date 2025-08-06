import styles from './style.module.scss';
import React from 'react';
import dynamic from 'next/dynamic';
// import SmoothScroll from '@/components/ComponentScroll/SmoothScroll';
import Projects from '@/components/ComponentScroll/projects';

const Earth = dynamic(() => import('@/components/ComponentScroll/Earth'), {
  ssr: false,
  loading: () => <img src="/images/placeholder.png"></img>
})

export default function ScrollEarth() {
  return (
      <main className={styles.main}>
        <Earth />
        <Projects />
      </main>
  )
}