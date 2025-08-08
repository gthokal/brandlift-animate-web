'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Titles from './titles';
import Descriptions from './descriptions';

const data = [
    {
        title: "Branding",
        description: "We help brands find their voice and tell their story — with meaning, strategy, and bold creativity. Our goal? To build something memorable that truly connects and drives impact.",
        speed: 0.4
    },
    {
        title: "Website Services",
        description: "Startups or established businesses, local or global — we work with brands of all shapes and sizes. If you need a website that looks great, works beautifully, and grows with your business, you're in the right place.",
        speed: 0.5
    },
    {
        title: "Digital Expertise",
        description: "We blend creativity with strategy, and design with performance. Here's how we help brands win:",
        speed: 0.6
    },
    {
        title: "Shopify Solutions",
        description: "We've designed products used by over a million people — and we bring that same experience and care to every Shopify project. Whether you're just starting or scaling up, we'll help you build something customers love to use.",
        speed: 0.7
    },
    {
        title: "SEO Services",
        description: "If your website is meant to bring in business, SEO isn't optional — it's essential. We make sure your site gets found, ranks well, and brings the right people to your digital doorstep.",
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