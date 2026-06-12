import matter from "gray-matter";

type Article = {
  slug: string;
  title: string;
  description: string;
  image: string;
  credit?: string;
  featured?: boolean;
  body: string;
};

const articleFiles = import.meta.glob("../../content/stories/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function getSlugFromPath(path: string) {
  return path.split("/").pop()!.replace(".md", "");
}

export const articles: Article[] = Object.entries(articleFiles).map(
  ([path, rawFile]) => {
    const { data, content } = matter(rawFile);

    return {
      slug: getSlugFromPath(path),
      title: data.title ?? "",
      description: data.description ?? "",
      image: data.image ?? "",
      credit: data.credit,
      featured: data.featured ?? false,
      body: content,
    };
  }
);

export function getArticleBySlug(slug: string | undefined) {
  return articles.find((article) => article.slug === slug);
}

export function getFeaturedArticle() {
  return articles.find((article) => article.featured) ?? articles[0];
}