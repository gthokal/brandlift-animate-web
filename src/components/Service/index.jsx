
'use client';
import styles from './style.module.scss';
import { useEffect, useState, useRef} from 'react';
import { useInView, motion } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import SplitType from 'split-type';
import Lenis from '@studio-freight/lenis';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';
import ScrollEarth from '../ScrollEarth';


export default function Service() {

    const phrase = "We bring our passion for good design to brave brands and deliver something you can shout about.";
    const description = useRef(null);
    const isInView = useInView(description);

    const containerRef = useRef(null);
    
    useEffect(() => {
        let lenis;
        const targets = document.querySelectorAll(`.${styles.target}`);
        const text = new SplitType(targets);

        const chars = text.chars;

        const headText = document.querySelectorAll(`.${styles.heading}`)

        const initSmooth = () =>{
            lenis = new Lenis({
                lerp: 0.2,
                smooth: true,
            });

            lenis.on('scroll', () => ScrollTrigger.update());

            const scrollFn = (time) =>{
                lenis.raf(time);
                requestAnimationFrame(scrollFn);
            };

            requestAnimationFrame(scrollFn);
        };

        const scroll = () =>{
            chars.forEach((char)=>gsap.set(char.parentNode, { perspective: 1000 }));

            gsap.fromTo(
                chars,
                {
                    willChange: 'opacity, transform',
                    opacity: 0.2,
                    z: -800,    
                },
                {
                    ease: 'back.out(1.2)',
                    opacity: 1,
                    z: 0,
                    stagger: 0.04,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 85%',
                        end: 'top 48%',
                        scrub: true,
                        markers: true
                    }
                }
            )
        }

        const scrollHeading = () => {
            if (!headText) return;

            gsap.fromTo(
                headText,
                {
                    x: 300,
                    y: 300,
                    opacity: 0,
                },
                {
                    x: 0,
                    y: 0,
                    opacity: 1, ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 90%',
                        end: 'top 60%',
                        scrub: true,
                        markers: true,
                    },
                }
            );
        };

        const init = () =>{
            initSmooth();
            scroll();
            scrollHeading();
        };
        
        init();
    }, [])

    useState(()=>{},[])

    return (
        <motion.div>
            <>
                <div className={styles.typoFlex}>
                    <h2 className={styles.heading}>Service</h2>
                    
                    <div>
                        <div>
                            <h2 className={styles.contentTitle}>
                                <span ref={containerRef} className={styles.target}>We&apos;re a digital</span>
                                <span ref={containerRef} className={styles.target}>marketing agency</span>
                                <span ref={containerRef} className={styles.target}>with expertise</span>
                            </h2>
                        </div>
                        <div>
                            <div ref={description} className={styles.description}>
                                <div className={styles.body}>
                                    <p className={styles.whiteColor}>
                                    {
                                        phrase.split(" ").map( (word, index) => {
                                            return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                                        })
                                    }
                                    </p>
                                    <motion.p variants={opacity} animate={isInView ? "open" : "closed"} className={styles.whiteColor}>The combination of my passion for design, code & interaction positions me in a unique place in the web design world.</motion.p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ScrollEarth />
            </>
        </motion.div>
    )
}

