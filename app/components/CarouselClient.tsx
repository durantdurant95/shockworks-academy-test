"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./Carousel.module.css";

/**
 * Article interface for News API response
 */
interface Article {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
}

interface CarouselClientProps {
  articles: Article[];
}

/**
 * Client-side Carousel component that handles interactivity
 * Features:
 * - Displays 3 center cards at full size (532px)
 * - Side cards are scaled down to 486px
 * - Smooth animations and transitions
 */
export default function CarouselClient({ articles }: CarouselClientProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * Navigate to previous card
   */
  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  /**
   * Navigate to next card
   */
  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= articles.length - 3 ? prev : prev + 1));
  };

  if (!articles.length) {
    return <div className={styles.loading}>No articles available</div>;
  }

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselContainer}>
        <div
          className={styles.carouselTrack}
          style={{
            transform: `translateX(-${currentIndex * (423 + 24)}px)`,
          }}
        >
          {articles.map((article, index) => {
            // Determine if card is on the side (partially visible)
            const isSideCard =
              index < currentIndex || index >= currentIndex + 3;

            return (
              <div
                key={index}
                className={`${styles.card} ${
                  isSideCard ? styles.sideCard : ""
                }`}
              >
                <div className={styles.cardImage}>
                  <Image
                    src={article.urlToImage || "/placeholder.jpg"}
                    alt={article.title}
                    width={255}
                    height={255}
                    unoptimized
                    className={styles.image}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>
                    {article.title?.substring(0, 60)}
                    {article.title?.length > 60 ? "..." : ""}
                  </h3>
                  <p className={styles.cardSubtitle}>
                    {article.description?.substring(0, 100)}
                    {article.description?.length > 100 ? "..." : ""}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.navigationButtons}>
        <button
          className={styles.navButton}
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          aria-label="Previous"
        >
          <Image src="/arrow-left.svg" alt="Previous" width={18} height={18} />
        </button>
        <button
          className={styles.navButton}
          onClick={handleNext}
          disabled={currentIndex >= articles.length - 3}
          aria-label="Next"
        >
          <Image src="/arrow-right.svg" alt="Next" width={18} height={18} />
        </button>
      </div>
    </div>
  );
}
