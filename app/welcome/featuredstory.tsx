import BisonImage from "../images/elephants.webp";
import { Link } from "react-router";
import { getFeaturedArticle } from "../lib/articles";

type ArticleCardProps = {
  image: string;
  title: string;
  description: string;
  href: string;
  credit?: string
};

function ArticleCard({ image, title, description, href, credit }: ArticleCardProps) {
  return (
    <>
      <div className="grid items-center md:grid-cols-12 md:gap-8">
        {/* Image */}
        <div className="md:col-start-6 md:col-span-7 md:row-start-1">
          <div className="mx-auto aspect-4/3 w-full overflow-hidden rounded-t-sm md:rounded-sm">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Text card */}
        <article className="relative z-10 flex min-h-40 flex-col justify-center rounded-b-sm md:gap-2 bg-white p-6 md:col-start-1 md:col-span-6 md:row-start-1 md:min-h-80 md:rounded-sm md:p-10">
          <h2 className="text-2xl font-bold leading-tight text-gray-900 md:text-4xl">
            {title}
          </h2>

          <p className="mt-4 leading-relaxed text-gray-600 md:text-xl">
            {description}
          </p>

          <Link
            to={href}
            className="mt-4 inline-flex w-full justify-center rounded-full bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700 md:w-auto md:self-start"
          >
            Read More
          </Link>
        </article>
      </div>

      <div className="grid gap-8 md:grid-cols-12">
        <div className="mt-1 md:col-start-6 md:col-span-7 md:text-right">
          <p className="text-xs text-gray-700">{credit}</p>
        </div>
      </div>
    </>
  );
}

export default function FeaturedStory() {
  const featuredArticle = getFeaturedArticle();
  return (
    <>
      <section className="bg-amber-700 py-10 md:py-16">
        <div className="mx-auto max-w-360 px-6 md:px-12 lg:px-20">
          {/* Title */}
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-12 xl:col-span-10">
              <h1 className="text-pretty text-3xl leading-10 text-gray-900 md:text-5xl md:leading-tight">
                <b>Our mission</b>
                <span className="text-white">
                  {" "}is to build a future which our vets can be supported
                </span>
              </h1>
            </div>
          </div>

          {/* Article */}
          <div className="mt-12 md:mt-16">
            <ArticleCard
              image={featuredArticle?.image ?? BisonImage}
              title={featuredArticle?.title ?? "Untitled Article"}
              description={featuredArticle?.description ?? "No description available."}
              credit={featuredArticle?.credit ?? "@ nothing written"}
              href={featuredArticle?.slug ? `/stories/${featuredArticle.slug}` : "./"}
            />
          </div>
        </div>
      </section>
    </>
  );
}