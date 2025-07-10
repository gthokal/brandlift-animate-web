'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Titles from './titles';
import Descriptions from './descriptions';

const data = [
    {
        title: "Branding",
        description: "We propel brands into the digital future with powerful stories, smart strategies, and bold creativity—setting new standards in innovation and impact.",
        speed: 0.5
    },
    {
        title: "Website",
        description: "Are you a startup brand, well established company, in the India or worldwide? It doesn't matter. We work with a range of clients.",
        speed: 0.5
    },
    {
        title: "Experts",
        description: "We blend creativity with strategy, and design with performance. Here's how we help brands win:",
        speed: 0.67
    },
    {
        title: "Shopify",
        description: "Designed a 1M+ users product utilizing my best personal experience: Shopify.",
        speed: 0.8
    },
    {
        title: "SEO",
        description: "SEO is very important if your website is a tool to generate business, whether that be selling services or products.",
        speed: 0.8
    }
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    return (
        <div className={styles.container}>
            <Titles data={data} setSelectedProject={setSelectedProject}/>
            <Descriptions data={data} selectedProject={selectedProject}/>
        </div>
    )
}