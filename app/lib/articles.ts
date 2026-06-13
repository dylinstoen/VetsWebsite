import frontMatter from "front-matter";

type Article = {
  slug: string;
  title: string;
  description: string;
  image: string;
  credit?: string;
  featured?: boolean;
  body: string;
};

type ArticleAttributes = {
  title?: string;
  description?: string;
  image?: string;
  credit?: string;
  featured?: boolean;
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
    const parsed = frontMatter<ArticleAttributes>(rawFile);

    return {
      slug: getSlugFromPath(path),
      title: parsed.attributes.title ?? "",
      description: parsed.attributes.description ?? "",
      image: parsed.attributes.image ?? "",
      credit: parsed.attributes.credit,
      featured: parsed.attributes.featured ?? false,
      body: parsed.body,
    };
  }
);

export function getArticleBySlug(slug: string | undefined) {
  return articles.find((article) => article.slug === slug);
}

export function getFeaturedArticle() {
  return articles.find((article) => article.featured) ?? articles[0];
}