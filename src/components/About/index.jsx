
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
                    title="About Us"
                    headings={["Who We Are", "Where Ideas Take Flight"]}
                    phrase="We are a forward-thinking digital agency, helping ambitious brands stand out in the ever-evolving digital landscape. Our mission is simple: cut through the noise with bold ideas, seamless design, and impactful digital solutions."
                    descriptionSubtext="At the intersection of design, code, and interaction — we create experiences that challenge the status quo. No fluff. No compromises. Just sharp strategy, innovative thinking, and results that speak for themselves. Together, let's redefine what's possible."
                />
            </>
        </motion.div>
    )
}

