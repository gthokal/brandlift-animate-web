'use client';

import styles from './style.module.scss';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import clsx from 'clsx';
import Rounded from '../../common/RoundedButton';
import { useInView, motion } from 'framer-motion';
import { slideUp, opacity } from './animation';

gsap.registerPlugin(ScrollTrigger);

export default function DynamicDescription({
  phrase = '',
  subtext = '',
  buttonText = '',
  showButton = true,
  containerClass = ''
}) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: '100 bottom',
          end: 'center bottom',
          toggleActions: 'play none none reverse',
        },
      });

      tl.to(
        '.animated-word',
        {
          opacity: 1,
          transform: 'translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)',
          ease: 'power2.inOut',
          stagger: 0.02,
        },
        0
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={clsx(styles.description, containerClass)}>
      <div className={styles.body}>
        <p className={styles.whiteColor}>
          {phrase.split(' ').map((word, index) => (
            <span key={index} className={styles.mask}>
              <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span>
            </span>
          ))}
        </p>
        {subtext &&  <motion.p variants={slideUp} animate={isInView ? "open" : "closed"} className={styles.whiteColor}>{subtext}</motion.p>}
        {showButton}
      </div>
    </div>
  );
}
  