import frontMatter from "front-matter";

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  publishedAt: string;
  credit?: string;
  externalUrl?: string;
  featured?: boolean;
  moreStories?: boolean;
  body: string;
};

type ArticleAttributes = {
  title?: string;
  description?: string;
  category?: string;
  image?: string;
  publishedAt?: string;
  credit?: string;
  externalUrl?: string;
  featured?: boolean;
  moreStories?: boolean;

};

const articleFiles = import.meta.glob("../../content/stories/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function getSlugFromPath(path: string) {
  return path.split("/").pop()!.replace(".md", "");
}

export const articles: Article[] = Object.entries(articleFiles)
  .map(([path, rawFile]) => {
    const parsed = frontMatter<ArticleAttributes>(rawFile);

    return {
      slug: getSlugFromPath(path),
      title: parsed.attributes.title ?? "",
      description: parsed.attributes.description ?? "",
      category: parsed.attributes.category ?? "Story",
      image: parsed.attributes.image ?? "",
      publishedAt: parsed.attributes.publishedAt ?? "",
      credit: parsed.attributes.credit,
      externalUrl: parsed.attributes.externalUrl,
      featured: parsed.attributes.featured ?? false,
      moreStories: parsed.attributes.moreStories ?? false,
      body: parsed.body,
    };
  })
  .sort((a, b) => {
    const aTime = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
    const bTime = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
    return bTime - aTime;
  });

export function getArticleBySlug(slug: string | undefined) {
  return articles.find((article) => article.slug === slug);
}

export function getFeaturedArticle() {
  return articles.find((article) => article.featured) ?? articles[0];
}