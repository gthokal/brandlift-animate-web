'use client';
import styles from './style.module.scss';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import SplitType from 'split-type';
import DynamicDescription from '../DynamicDescription';

gsap.registerPlugin(ScrollTrigger);

export default function SectionHeading({
  title = '',
  subtext = '',
  headings = [],
  description = '',
  subdescription = '',
  phrase = '',
  showDescriptionBlock = true,
  descriptionSubtext = '',
  buttonText = '',
  showButton = true,
}) {
  const containerRef = useRef(null);
  const headingRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // SplitType and animation scoped only within container
      headingRefs.current.forEach((el) => {
        const split = new SplitType(el, { types: 'chars' });
        const chars = split.chars;

        gsap.set(chars, { opacity: 0.2, z: -800 });

        gsap.to(chars, {
          opacity: 1,
          z: 0,
          stagger: 0.04,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 35%',
            scrub: true,
          },
        });
      });

      gsap.fromTo(
        containerRef.current.querySelector(`.${styles.heading}`),
        { x: 300, y: 300, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            end: 'top 50%',
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <motion.div ref={containerRef}>
      <div className={styles.typoFlex}>
        <h2 className={styles.heading}>{title}</h2>

        <div className={styles.contentTitle}>
          {headings.map((text, i) => (
            <span
              key={i}
              ref={(el) => (headingRefs.current[i] = el)}
              className={styles.target}
            >
              {text}
            </span>
          ))}
        </div>

        {description && <p className={styles.description}>{description}</p>}
        {subdescription && (
          <p className={styles.subdescription}>{subdescription}</p>
        )}

        {showDescriptionBlock && (
          <DynamicDescription
            phrase={phrase}
            subtext={descriptionSubtext}
            buttonText={buttonText}
            showButton={showButton}
          />
        )}
      </div>
    </motion.div>
  );
}
