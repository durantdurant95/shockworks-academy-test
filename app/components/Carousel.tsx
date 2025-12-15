import { fetchNewsArticles } from "../actions/news";
import CarouselClient from "./CarouselClient";

/**
 * Server Component wrapper that fetches news data
 * and passes it to the client-side carousel
 */
export default async function Carousel() {
  const result = await fetchNewsArticles();

  type Article = {
    urlToImage?: string;
    [key: string]: unknown;
  };

  const articles =
    result.success && result.data.articles
      ? result.data.articles.filter((article: Article) => article.urlToImage)
      : [];

  return <CarouselClient articles={articles} />;
}
