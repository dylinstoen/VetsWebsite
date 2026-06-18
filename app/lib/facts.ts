import frontMatter from "front-matter";

export type Fact = {
  slug: string;
  title: string;
  description: string;
  order: number;
};

type FactAttributes = {
  title?: string;
  description?: string;
  order?: number;
};

const factFiles = import.meta.glob("../../content/facts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function getSlugFromPath(path: string) {
  return path.split("/").pop()!.replace(".md", "");
}

export const facts: Fact[] = Object.entries(factFiles)
  .map(([path, rawFile]) => {
    const parsed = frontMatter<FactAttributes>(rawFile);

    return {
      slug: getSlugFromPath(path),
      title: parsed.attributes.title ?? "",
      description: parsed.attributes.description ?? "",
      order: parsed.attributes.order ?? 0,
    };
  })
  .sort((a, b) => a.order - b.order);