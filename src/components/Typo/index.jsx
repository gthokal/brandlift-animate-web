
'use client';
import styles from './style.module.scss';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import SplitType from 'split-type';
import Lenis from '@studio-freight/lenis';

// import Description from '../Description';
import AnimatedTitle from '../AnimatedTitle';


export default function Index() {

    const containerRef = useRef(null);
    const sections = [
        { title: "Welcome to <br /> BrandLift Media" },
        { title: "Our Creative <br /> Services" },
        { title: "Why Choose <br /> Our Team" }
    ];
    
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
                        end: 'top 35%',
                        scrub: true,
                        //markers: true
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
                        //markers: true,
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
                    <h2 className={styles.heading}>About</h2>
                    <AnimatedTitle />
                    <h2 className={styles.contentTitle}>
                        <span ref={containerRef} className={styles.target}>Who We Are</span>
                        <span ref={containerRef} className={styles.target}>Where Ideas Take Flight</span>
                    </h2>
                    <Description />
                </div>
            </>
        </motion.div>
    )
}

