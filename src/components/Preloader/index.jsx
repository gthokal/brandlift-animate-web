'use client';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { opacity, slideUp } from './anim';
import Image from 'next/image';

const words = ["Brandlift Media", "Where Ideas", "Take Flight"]

export default function Index() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({width: 0, height:0});

    useEffect( () => {
        setDimension({width: window.innerWidth, height: window.innerHeight})
    }, [])

    const delays = [1500, 800, 800, 1000, 1200]; // Customize per word

    useEffect(() => {
        if (index === words.length - 1) return;

        const timeout = setTimeout(() => {
            setIndex(index + 1);
        }, delays[index] || 800); // Default to 800 if not specified

        return () => clearTimeout(timeout);
    }, [index]);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const curve = {
        initial: {
            d: initialPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: targetPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3}
        }
    }

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
            {dimension.width > 0 && 
            <>
                <motion.p variants={opacity} initial="initial" animate="enter">
                    <span>
                        {index === 0 && (
                            <Image 
                                src="/images/animation-logo.png"
                                width={80}
                                height={140}
                                alt="background"
                            />
                        )}
                    </span>{words[index]}</motion.p>
                <svg>
                    <motion.path variants={curve} initial="initial" exit="exit"></motion.path>
                </svg>
            </>
            }
        </motion.div>
    )
}
