'use client';
import styles from './style.module.scss'
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import Card from './components/Card';

export default function Index() {
    return(
        <>
            <div className='container'>
                <section className='hero'>
                    <h1>Keep Scrolling to <br /> reveals the card</h1>
                </section>
                <section className='cards'>
                    {[...Array(4)].map((_, index) => (
                        <Card 
                            key={index}
                            id={`card-${index + 1}`}
                            frontSrc="/images/back.png"
                            frontAlt="Card Image"
                            backText="Your card details appear here"
                        />
                    ))}

                </section>
                <section className='footer'>
                    <h2>Footer Or Upcoming Section</h2>
                </section>
            </div>
        </>
    )
}