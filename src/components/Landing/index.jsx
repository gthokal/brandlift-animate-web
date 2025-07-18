'use client'
import Image from 'next/image'
import styles from './style.module.scss'
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { slideUp } from './animation';
import { motion } from 'framer-motion';

export default function Home() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  //const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  //const direction = useRef(0);

  // useLayoutEffect( () => {
  //   //  direction.current = 1;
  //   gsap.registerPlugin(ScrollTrigger);
  //   // gsap.to(slider.current, {
  //   //   scrollTrigger: {
  //   //     trigger: document.documentElement,
  //   //     scrub: 0.25,
  //   //     start: 0,
  //   //     end: window.innerHeight,
  //   //     onUpdate: e => direction = e.direction * -1
  //   //   },
  //   //   x: "-500px",
  //   // })
  //   requestAnimationFrame(animate);
  // }, [])

  // const animate = () => {
  //   if(xPercent < -100){
  //     xPercent = 0;
  //   }
  //   else if(xPercent > 0){
  //     xPercent = -100;
  //   }
  //   gsap.set(firstText.current, {xPercent: xPercent})
  //   gsap.set(secondText.current, {xPercent: xPercent})
  //   requestAnimationFrame(animate);
  //   xPercent += 0.1 * direction;
  // }

  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing}>

      <div className={styles.heroBanner}>
        <div className={styles.heroBannerblock}>
          <strong className={styles.headText}>Where</strong>
          <div className={styles.headTextBlock}>
            <div className={styles.subTextBlock}>
              <span className={styles.greenText}>Ideas</span>
              <span>Takes</span>
            </div>
            <div>
              <strong className={styles.headText}>flight</strong>
            </div>
          </div>
          <div className={`${styles.bdrButton} ${styles.btn1}`}>
              <span className={styles.bdrTag}>Positionting</span>
          </div>
          <div className={`${styles.bdrButton} ${styles.blurWhite} ${styles.btn2}`}>
              <span className={styles.bdrTag}>Innovation</span>
          </div>
          <div className={`${styles.bdrButton} ${styles.btn3}`}>
              <span className={styles.bdrTag}>Advertising</span>
          </div>
          <div className={`${styles.bdrButton} ${styles.btn4}`}>
              <span className={styles.bdrTag}>Concept Labs</span>
          </div>
          <div className={`${styles.bdrButton} ${styles.blurWhite} ${styles.btn5}`}>
              <span className={styles.bdrTag}>UI/UX Crafts</span>
          </div>
          <div className={`${styles.bdrButton} ${styles.blurWhite} ${styles.btn6}`}>
              <span className={styles.bdrTag}>Growth Loops</span>
          </div>
          <div className={`${styles.bdrButton} ${styles.blurWhite} ${styles.btn7}`}>
              <span className={styles.bdrTag}>Influence mapping</span>
          </div>
          <div className={styles.heroBallon}>
            <Image 
              src="/images/banner-ballon.png"
              width="218"
              height="340"
              alt="background"
            />
          </div>
        </div>
      </div>
    </motion.main>
  )
}
