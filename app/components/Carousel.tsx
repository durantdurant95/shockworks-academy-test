"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Carousel.module.css";

interface Article {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
}

export default function Carousel() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Using top headlines endpoint (doesn't require API key for limited requests)
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=b42951452b37423faf4cc0f654aeb2e6"
        );
        const data = await response.json();

        if (data.articles) {
          setArticles(
            data.articles.filter((article: Article) => article.urlToImage)
          );
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= articles.length - 3 ? prev : prev + 1));
  };

  if (isLoading) {
    return <div className={styles.loading}>Loading articles...</div>;
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
          ←
        </button>
        <button
          className={styles.navButton}
          onClick={handleNext}
          disabled={currentIndex >= articles.length - 3}
          aria-label="Next"
        >
          →
        </button>
      </div>
    </div>
  );
}
