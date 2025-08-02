'use client';

import styles from './style.module.scss';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import clsx from 'clsx';
import Rounded from '../../common/RoundedButton';
import { useInView, motion } from 'framer-motion';
import { slideUp } from './animation';

gsap.registerPlugin(ScrollTrigger);

export default function DynamicDescription({
  phrase = '',
  subtext = '',
  buttonText = '',
  showButton = true,
  containerClass = ''
}) {
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const isInView = useInView(containerRef);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: '(max-width: 767px)',
        isDesktop: '(min-width: 768px)',
      },
      (context) => {
        const { isMobile } = context.conditions;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 90%', // Better for mobile
            end: 'center bottom',
            toggleActions: 'play none none reverse',
          },
        });

        tl.to(
          wordRefs.current,
          {
            opacity: 1,
            rotateX: 0,
            rotateY: 0,
            z: 0,
            ease: 'power2.inOut',
            stagger: isMobile ? 0.01 : 0.03,
            duration: isMobile ? 0.4 : 0.8,
          },
          0
        );

        return () => tl.kill();
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <div ref={containerRef} className={clsx(styles.description, containerClass)}>
      <div className={styles.body}>
        <p className={styles.whiteColor}>
          {phrase.split(' ').map((word, index) => (
            <span key={index} className={styles.mask}>
              <motion.span
                ref={(el) => (wordRefs.current[index] = el)}
                variants={slideUp}
                custom={index}
                animate={isInView ? 'open' : 'closed'}
                style={{
                  opacity: 0,
                  transform: 'translate3d(0, 20px, 0) rotateX(10deg) rotateY(10deg)',
                  display: 'inline-block',
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>
        {subtext && (
          <motion.p
            variants={slideUp}
            animate={isInView ? 'open' : 'closed'}
            className={styles.whiteColor}
          >
            {subtext}
          </motion.p>
        )}
        {showButton}
      </div>
    </div>
  );
}
