import { Link, useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";
import { getArticleBySlug } from "../lib/articleParser";

const markdownComponents: Components = {
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-blue-300 underline decoration-blue-300 underline-offset-4 hover:text-blue-200"
    >
      {children}
    </a>
  ),

  p: ({ children }) => (
    <p className="mb-4 last:mb-0">
      {children}
    </p>
  ),
};

export default function StoryPage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-20 ">
        <h1 className="text-3xl font-bold text-white">Article not found</h1>

        <Link to="/" className="mt-6 inline-block text-white underline">
          Go back home
        </Link>
      </main>
    );
  }

  return (
    <main className=" bg-amber-600">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="max-w-4xl text-4xl font-bold text-white">
          {article.title}
        </h1>

        <div className="mt-8 max-w-4xl text-xl leading-relaxed text-white">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
          >
            {article.description}
          </ReactMarkdown>
        </div>

        <figure className="mt-10">
          <picture>
            {article.imageDesktop && (
              <source
                media="(min-width: 1024px)"
                srcSet={article.imageDesktop}
              />
            )}

            {article.imageMobile && (
              <source
                media="(max-width: 767px)"
                srcSet={article.imageMobile}
              />
            )}

            <img
              src={article.image}
              alt={article.title}
              className="aspect-video w-full rounded-sm object-cover"
            />
          </picture>

          {article.credit && (
            <figcaption className="mt-2 text-xs text-white">
              {article.credit}
            </figcaption>
          )}
        </figure>

        <div className="mt-10 max-w-4xl text-lg leading-relaxed text-white">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
          >
            {article.body}
          </ReactMarkdown>
        </div>
      </div>

    </main>
  );
}