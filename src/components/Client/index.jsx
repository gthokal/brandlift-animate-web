'use client';
import styles from './style.module.scss';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const clients = [
  {
    title: "snackszo",
    src: "snackzo.png", 
    color: "#000000",
    desc: "Cafe,  Social Media,  Reels",
    url: "https://www.instagram.com/officialbrandlift/"
  },
  {
    title: "Bella lifesyles",
    src: "bella.png",
    color: "#000000",
    desc: "Cafe,  Social Media,  Reels",
    url: "https://www.facebook.com/people/Brandlift-Media/61575937634214/"
  },
  {
    title: "Cavalli class",
    src: "CC.png",
    color: "#000000",
    desc: "Cafe,  Social Media,  Reels",
    url: "https://www.linkedin.com/company/official-brandlift-media/"
  },
  {
    title: "chishti global solution",
    src: "chisti.png",
    color: "#000000",
    desc: "Cafe,  Social Media,  Reels",
    url: "https://www.pinterest.com/officialbrandlift"
  },
  {
    title: "Monsoon Solutions",
    src: "Monsoon.png",
    color: "#000000",
    desc: "Cafe,  Social Media,  Reels",
    url: "https://www.pinterest.com/officialbrandlift"
  }
]

// ✅ Create a separate component to prevent recursion
function ClientItem({ title, url, index, manageModal, desc }) {
  return (
    <div
      key={index}
      className={styles.clientInfo}
      onMouseEnter={(e) => manageModal(true, index, e.clientX, e.clientY)}
      onMouseLeave={() => manageModal(false, 0)}
      onClick={() => window.open(url, "_blank")}
    >
        
            <div className={styles.clientInfoWrapper}>
                <strong className={styles.clientTitle}>{title}</strong>
                <span className={styles.clientContent}>{desc}</span>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <span className={styles.viewButton}>View Project</span>
                </a>
            </div>
    </div>
  );
}

export default function Client() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const clientSection = useRef(null);

  const manageModal = (active, index, x, y) => {
    setModal({ active, index });
  };

  return (
    <>
      <motion.div ref={clientSection} className={styles.clientSection}>
        <div className={styles.clientContainer}>
          {clients.map((client, idx) => {
            const { src } = client;
            return (
                <div 
                key={idx}
                className={styles.clientRow}
                >
                    <ClientItem
                        key={idx}
                        index={idx}
                        title={client.title}
                        desc={client.desc}
                        url={client.url}
                        manageModal={manageModal}
                    />
                    <div className={styles.clientImage}>
                        <Image 
                        src={`/images/${src}`}
                        width={769}
                        height={578}
                        alt="image"
                        />
                    </div>
                </div>
            );
          })}
        </div>

            {/* <div className={styles.clientSection}>
                <div className={styles.clientContainer}>
                    <div 
                    key={idx}
                    className={styles.modal}
                    style={{ backgroundColor: color }}>
                        <div className={styles.clientInfo}>
                            <div className={styles.clientInfoWrapper}>
                                <strong className={styles.clientTitle}>snackszo</strong>
                                <span className={styles.clientContent}>Cafe,  Social Media,  Reels</span>
                                <span className={styles.viewButton}>View Project</span>
                            </div>
                        </div>
                        <div className={styles.clientImage}>
                            <Image 
                            src={`/images/${src}`}
                            width={300}
                            height={0}
                            alt="image"
                            />
                        </div>
                    </div>
                </div>
            </div> */}


      </motion.div>
    </>
  );
}
