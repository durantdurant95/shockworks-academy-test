"use server";

/**
 * Server Action to fetch news from News API
 * This runs on the server side, keeping the API key secure
 */
export async function fetchNewsArticles() {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${
        process.env.NEWS_API_KEY || "b42951452b37423faf4cc0f654aeb2e6"
      }`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error("Error fetching news:", error);
    return { success: false, error: "Failed to fetch news articles" };
  }
}
