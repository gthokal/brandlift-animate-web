
'use client'; 
import { useInView, motion } from 'framer-motion';
import gsap from 'gsap';
import SectionHeading from '../SectionHeading';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export default function About() {
    return (
        <motion.div id="about">
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

