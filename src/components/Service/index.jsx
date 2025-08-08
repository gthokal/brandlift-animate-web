
'use client';
import { useInView, motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';
import ScrollEarth from '../ScrollEarth';

export default function Service() {
    return (
        <motion.div id="services">
            <>
                <SectionHeading
                    title="Service"
                    headings={["We're a Digital", "Marketing Agency with a", "Passion for Results"]}
                    phrase="We combine strategy, creativity, and technology to elevate bold brands. With deep expertise in design, development, and digital marketing, we craft experiences that don't just look good  they perform."
                    descriptionSubtext="Our passion for design, code, and user interaction puts us at the intersection of creativity and functionality — making us uniquely positioned to build impactful digital experiences that stand out."
                />
                <ScrollEarth />
            </> 
        </motion.div>
    )
}




