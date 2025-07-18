'use client';

import styles from './style.module.scss';
import { useEffect, useState, useRef} from 'react';
import { useInView, motion } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Lenis from '@studio-freight/lenis';
import ScrollEarth from '../ScrollEarth';
import SectionHeading from '../SectionHeading'
import { ReactLenis } from "lenis/react"

gsap.registerPlugin(ScrollTrigger);

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

  //   gsap.utils.toArray(clientImgRefs.current).forEach((imgEl, index) => {
  //   if (imgEl) {
  //     gsap.fromTo(imgEl, 
  //       { 
  //         y: 100, 
  //         opacity: 0 
  //       }, 
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: 1,
  //         ease: 'power2.out',
  //         scrollTrigger: {
  //           trigger: imgEl,
  //           start: 'top 80%',
  //           toggleActions: 'play none none reverse',
  //         }
  //       }
  //     );
  //   }
  // });

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
                            src={`/images/${client.src}`}
                            width={738}
                            height={578}
                            alt="image"
                          />
                        </div>
                      </div>

                    // <div 
                    // key={idx}
                    // className={styles.clientRow}
                    // >
                    //     <ClientItem
                    //         key={idx}
                    //         index={idx}
                    //         title={client.title}
                    //         desc={client.desc}
                    //         url={client.url}
                    //         manageModal={manageModal}
                    //     />

                    //     <div
                    //       ref={(el) => (clientImgRefs.current[idx] = el)}
                    //       className={styles.clientImage}
                    //     >
                    //       <Image 
                    //         src={`/images/${src}`}
                    //         width={769}
                    //         height={578}
                    //         alt="image"
                    //       />
                    //     </div>

                    // </div>
                );
              })}
            </div>
        


      </motion.div>
    </>
  );
}
