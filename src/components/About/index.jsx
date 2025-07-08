'use client'
import styles from './style.module.scss'
import { motion } from 'framer-motion';
import React from 'react';

import dynamic from 'next/dynamic';

const Earth = dynamic(() => import('@/components/earth'), {
  ssr: false,
  loading: () => <img src="/images/placeholder.png"></img>
})

export default function Index() {
    return (
        <motion.div>
            <>
                <main className={styles.main}>
                    <Earth />
                </main>
            </>
        </motion.div>
    )
}
