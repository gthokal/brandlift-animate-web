'use client';
import React from 'react'
import styles from './style.module.scss';
import Image from 'next/image';

export default function Index({index, title, manageModal,url}) {

    return (
        <div onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={styles.project}>
            <a href={`${url}`} target="_blank" className={styles.urlLink}>
                <h2>{title}</h2>
                <p><Image 
                    src={`/images/${title}-logo.png`}
                    width={50}
                    height={50}
                    alt="image"
                    /></p>
            </a>
        </div>
    )
}
