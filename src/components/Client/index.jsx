'use client';
import styles from './style.module.scss'
import { useState, useEffect, useRef } from 'react';
import Project from './components/project';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';

export default function Client() {
    return (
        <>
            <div className={styles.clientSection}>
                <div className={styles.clientContainer}>
                    <div className={styles.clientRow}>
                        <div className={styles.clientInfo}>
                            <div className={styles.clientInfoWrapper}>
                                <strong className={styles.clientTitle}>snackszo</strong>
                                <span className={styles.clientContent}>Cafe,  Social Media,  Reels</span>
                                <span className={styles.viewButton}>View Project</span>
                            </div>
                        </div>
                        <div className={styles.clientImage}>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}