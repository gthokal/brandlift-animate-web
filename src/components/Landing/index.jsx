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
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing}>
      {/* <Image 
        src="/images/landing-img.png"
        fill={true}
        alt="background"
      /> */}
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        className={styles.videoBg}
      >
        <source src="/images/brandlift-bg-video.mp4" type="video/mp4" />
      </video> */}

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

      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Social Media Marketing - Branding - SEO & Content Strategy -</p>
          <p ref={secondText}>Social Media Marketing - Branding - SEO & Content Strategy -</p>
        </div>
      </div>
      {/* <div data-scroll data-scroll-speed={0.1} className={styles.description}>
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
        </svg>
        <p>Freelance</p>
        <p>Designer & Developer</p>
      </div> */}
    </motion.main>
  )
}
