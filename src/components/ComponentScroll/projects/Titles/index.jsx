import React, { useRef } from 'react'
import styles from './style.module.scss';
import { useScroll, motion, useTransform, useMotionTemplate } from 'framer-motion';

export default function Index({data, setSelectedProject}) {
  return (
    <div className={styles.titles}>
        {
            data.map( (project, i) => {
                return <Title key={i} data={{...project, i}} setSelectedProject={setSelectedProject}/>
            })
        }
    </div>
  )
}

function Title({data, setSelectedProject}) {

    const { title, speed, i } = data;
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', `${25 / speed}vw end`]
    })

    const clipProgress = useTransform(scrollYProgress, [0,1], [100, 0]);
    const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;
    
    return (
        <motion.div ref={container} className={styles.title} 
            onMouseOver={() => {setSelectedProject(i)}}
            onMouseLeave={() => {setSelectedProject(null)}} style={{clipPath: clip}}>
            <div className={styles.wrapper}>
                <motion.p>
                    {title}
                </motion.p>
                <p>
                    {title}
                </p>
            </div>
        </motion.div>
    )
}