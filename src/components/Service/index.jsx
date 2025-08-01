
'use client';
import styles from './style.module.scss';
import { useEffect, useState, useRef} from 'react';
import { useInView, motion } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import SplitType from 'split-type';
import Lenis from '@studio-freight/lenis';
import SectionHeading from '../SectionHeading';
import ScrollEarth from '../ScrollEarth';

export default function Service() {
    return (
        <motion.div id="services">
            <>
                <SectionHeading
                    title="Service"
                    headings={["Were a digital", "Marketing Agency", "with expertise"]}
                    phrase="We bring our passion for good design to brave brands and deliver something you can shout about."
                    descriptionSubtext="The combination of my passion for design, code & interaction positions me in a unique place in the web design world."
                />
                <ScrollEarth />
            </>
        </motion.div>
    )
}
