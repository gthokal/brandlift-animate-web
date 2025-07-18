

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
    return (
        <motion.div>
            <>
                <SectionHeading
                    title="About"
                    headings={["Who We Are", "Where ideas take flight"]}
                    phrase="Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge"
                    descriptionSubtext="We're top digital agency, carving our own path in the digital world for design, code & interaction positions me in a unique place in the web design world."
                />
            </>
        </motion.div>
    )
}

