'use client';
import { useState, useEffect, useRef } from 'react';
import styles from "./index.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

const autoAdvanceInterval = 3000;
const imageWidth = 300;

interface ResponsiveCarouselProps {
    images: string[]; // Array de caminhos das imagens
}

export default function ResponsiveCarousel({ images }: ResponsiveCarouselProps) {
    const carousel = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        function updateInnerWidth() {
            const sw = carousel.current?.scrollWidth;
            const ow = carousel.current?.offsetWidth;
            setWidth(sw - ow);
        }
        updateInnerWidth();
        window.addEventListener('resize', updateInnerWidth);

        return () => {
            window.removeEventListener('resize', updateInnerWidth);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, autoAdvanceInterval);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <motion.div ref={carousel} className={styles.carousel} whileTap={{ cursor: "grabbing" }}>
            <motion.div className={styles.inner} drag="x" dragConstraints={{ right: 0, left: -width }}>
                {images.map((image, index) => (
                    <motion.div
                        key={`image-${index}`}
                        className={styles.item}
                        style={{
                            transform: `translateX(${(index * imageWidth) - (currentIndex * imageWidth)}px)`,
                            transition: "transform 0.5s ease" // Adiciona uma transição suave
                        }}
                    >
                        <Image src={image} alt="Image" width={300} height={300} priority className={styles.Imagem} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}
