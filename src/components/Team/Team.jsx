

'use client'; 
import styles from './style.module.scss';
import { useEffect, useState, useRef} from 'react';
import { useInView, motion } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Lenis from '@studio-freight/lenis';
import Rounded from '../../common/RoundedButton';
import SectionHeading from '../SectionHeading';
import ScrollEarth from '../ScrollEarth';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export default function About() {
    const profileImagesContainer = useRef(null);
    const profileImages = useRef([]);
    const nameElements = useRef([]);
    const nameHeadings = useRef([]);
    const defaultLetters = useRef([]);

    useEffect(() => {
        // Split all heading chars
        nameHeadings.current.forEach((heading, i) => {
        const split = new SplitText(heading, { type: 'chars' });
        split.chars.forEach((char) => char.classList.add('letter'));
        if (i === 0) defaultLetters.current = split.chars;
        });

        // Set default letters down
        gsap.set(defaultLetters.current, { y: "100%" });

        profileImages.current.forEach((img, index) => {
        const correspondingName = nameElements.current[index + 1];
        const letters = correspondingName.querySelectorAll(".letter");

        img.addEventListener("mouseenter", () => {
            gsap.to(img, {
            width: 140,
            height: 140,
            duration: 0.5,
            ease: "power4.out",
            });
            gsap.to(letters, {
            y: "-100%",
            ease: "power4.out",
            duration: 0.75,
            stagger: { each: 0.25, from: "center" },
            });
        });

        img.addEventListener("mouseleave", () => {
            gsap.to(img, {
            width: 70,
            height: 70,
            duration: 0.5,
            ease: "power4.out",
            });
            gsap.to(letters, {
            y: "0%",
            ease: "power4.out",
            duration: 0.75,
            stagger: { each: 0.25, from: "center" },
            });
        });
        });

        // Animate default letters on container hover
        const container = profileImagesContainer.current;
        container.addEventListener("mouseenter", () => {
        gsap.to(defaultLetters.current, {
            y: "0%",
            ease: "power4.out",
            duration: 0.75,
            stagger: { each: 0.25, from: "center" },
        });
        });
        container.addEventListener("mouseleave", () => {
        gsap.to(defaultLetters.current, {
            y: "100%",
            ease: "power4.out",
            duration: 0.75,
            stagger: { each: 0.25, from: "center" },
        });
        });

    }, []);

    return (
        <motion.div>
            <>
                <SectionHeading
                    title="About"
                    headings={["Who We Are", "Where ideas take flight"]}
                    phrase="Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge"
                    descriptionSubtext="We're top digital agency, carving our own path in the digital world for design, code & interaction positions me in a unique place in the web design world."
                />
                <div className={styles.team}>
                    <div className={styles.profileImages}>
                        <div className={styles.img}>
                            <Image 
                                src={`/images/img1.jpg`}
                                width={90}
                                height={90}
                                alt="image"
                            />
                        </div>
                        <div className={styles.img}>
                            <Image 
                                src={`/images/img2.jpg`}
                                width={90}
                                height={90}
                                alt="image"
                            />
                        </div>
                        <div className={styles.img}>
                            <Image 
                                src={`/images/img3.jpg`}
                                width={90}
                                height={90}
                                alt="image"
                            />
                        </div>
                        <div className={styles.img}>
                            <Image 
                                src={`/images/img4.jpg`}
                                width={90}
                                height={90}
                                alt="image"
                            />
                        </div>
                        <div className={styles.img}>
                            <Image 
                                src={`/images/img5.jpg`}
                                width={90}
                                height={90}
                                alt="image"
                            />
                        </div>
                        <div className={styles.img}>
                            <Image 
                                src={`/images/img6.jpg`}
                                width={90}
                                height={90}
                                alt="image"
                            />
                        </div>
                        <div className={styles.img}>
                            <Image 
                                src={`/images/img7.jpg`}
                                width={90}
                                height={90}
                                alt="image"
                            />
                        </div>
                        <div className={styles.img}>
                            <Image 
                                src={`/images/img8.jpg`}
                                width={90}
                                height={90}
                                alt="image"
                            />
                        </div>
                        <div className={styles.img}>
                            <Image 
                                src={`/images/img9.jpg`}
                                width={90}
                                height={90}
                                alt="image"
                            />
                        </div>
                    </div>
                    <div className={styles.profileName}>
                        <div className={`${styles.name} ${styles.default}`}><h1>The Squad</h1></div>
                        <div className={styles.name}><h1>Sham</h1></div>
                        <div className={styles.name}><h1>Colin</h1></div>
                        <div className={styles.name}><h1>Jhon</h1></div>
                        <div className={styles.name}><h1>Tyabt</h1></div>
                        <div className={styles.name}><h1>Simon</h1></div>
                        <div className={styles.name}><h1>Gidon</h1></div>
                        <div className={styles.name}><h1>Jordan</h1></div>
                        <div className={styles.name}><h1>Shyam</h1></div>
                        <div className={styles.name}><h1>Raj</h1></div>
                    </div>
                </div>
            </>
        </motion.div>
    )
}

