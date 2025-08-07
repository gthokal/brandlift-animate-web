'use client';

import styles from './style.module.scss';
import { useEffect, useState, useRef} from 'react';
import { useInView, motion } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const clients = [
  {
    title: "snackszo",
    src: "snackzo.png", 
    color: "#000000",
    desc: "Cafe,  Social Media,  Reels",
    url: "https://www.instagram.com/snackszocafe/"
  },
  {
    title: "The Home Buddy",
    src: "theHomeBuddy.png",
    color: "#000000",
    desc: "Smart shopping starts at home",
    url: "https://www.instagram.com/thehomebuddy.in/"
  },
  {
    title: "Cavalli class",
    src: "CC.png",
    color: "#000000",
    desc: "Social Media, Amazons, AI shoot",
    url: "https://www.instagram.com/cavalliclassindia/"
  },
  {
    title: "chishti global solution",
    src: "Chisti.png",
    color: "#000000",
    desc: "Best Hiring Services",
    url: "https://www.instagram.com/_chishti_global_solutions_/"
  },
  {
    title: "Monsoon Solutions",
    src: "Monsoon.png",
    color: "#000000",
    desc: "Rain Protection, reliable",
    url: "https://monsoonsolution.com/"
  }
]

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

  const clientImgRefs = useRef([]);
  const cardRefs = useRef([]);
  clientImgRefs.current = []; 
  
  

  const manageModal = (active, index, x, y) => {
    setModal({ active, index });
  };

  useEffect(()=>{
    const scrollTriggerSettings = {
      trigger: ".main",
      start: "top 25%",
      toggleActions: "play reverse play reverse",
    };

    const leftXValues = [-800, -900, -400];
    const rightXValues = [800, 900, 400];

    const leftRotationValues = [-30, -20, -35];
    const rightRotationValues = [30, 20, 35];

    const yValues = [100, -150, -400];

    clientImgRefs.current.forEach((imgEl, idx) => {
      const cardEl = cardRefs.current[idx];
      if (!imgEl || !cardEl) return;
      //const isLeft = cardEl.classList.contains(styles.leftCard);

      const isLeft = idx % 2 === 0;

      gsap.fromTo(
        imgEl,
        {
          rotate: isLeft ? 14 : -14,
          x: isLeft ? 220 : -220,
          y: -100,
        },
        {
          rotate: 0,
          x: 0,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imgEl,
            start: 'top 80%',
            end: 'top 30%',
            scrub: true,
            //markers: true, // uncomment for debug
          },
        }
      );
    }); 

  }, []);


  return (
    <>
      <motion.div ref={clientSection} className={styles.clientSection}>
            <div className={styles.clientContainer}>
              {clients.map((client, idx) => {
                const { src } = client;
                return (
                  <div 
                    key={idx} 
                    ref={(el) => (cardRefs.current[idx] = el)}
                    className={`${styles.clientRow}`}
                  >
                    <ClientItem
                      key={idx}
                      index={idx}
                      title={client.title}
                      desc={client.desc}
                      url={client.url}
                      manageModal={manageModal}
                    />

                    <div
                      ref={(el) => (clientImgRefs.current[idx] = el)}
                      className={`${styles.clientImage} ${idx % 2 === 0 ? 'rightCard' : 'leftCard'}`}
                    >
                      <Image 
                        className={`${styles.image}`}
                        src={`/images/${client.src}`}
                        width={638}
                        height={478}
                        alt="image"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
      </motion.div>
    </>
  );
}
