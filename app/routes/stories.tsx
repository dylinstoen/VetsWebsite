
import { Link } from "react-router";
import { articles, type Article } from "../lib/articles";

function formatDate(date: string) {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}
function NewsArticleItem({ article }: { article: Article }) {
    const formattedDate = formatDate(article.publishedAt);
    return (
        <li className="flex flex-col-reverse gap-6 border-b border-gray-300 py-10 first:pt-0 last:border-b-0 last:pb-0 md:grid md:grid-cols-12">
            <div className="flex flex-col justify-center gap-3 md:order-2 md:col-span-5 md:col-start-8">
                <h2 className="text-2xl font-bold leading-tight text-white">
                    <Link
                        to={`/stories/${article.slug}`}
                        className="transition hover:text-blue-700"
                    >
                        {article.title}
                    </Link>
                </h2>

                {article.publishedAt && (
                    <p className="font-bold text-gray-500">
                        <time dateTime={article.publishedAt}>
                            <span className="sr-only">Published on </span>
                            {formattedDate}
                        </time>
                    </p>
                )}
            </div>

            <div className="mb-4 md:order-1 md:col-span-6 md:mb-0">
                <Link to={`/stories/${article.slug}`} aria-label={article.title} className="block">
                    <img
                        src={article.image}
                        alt=""
                        className="aspect-4/3 w-full rounded-sm object-cover"
                        loading="lazy"
                    />

                    <p className="mt-2 text-sm text-gray-500">
                        {article.credit}
                    </p>
                </Link>
            </div>
        </li>
    );
}


export default function Pages() {
    return (
        <main className="bg-yellow-950">
            <header>
                <div className="mx-auto max-w-360 px-6 md:px-12 lg:px-20">
                    <div className="py-20">
                        <div className="grid grid-cols-12 gap-8">
                            <div className="col-span-12 lg:col-span-11">
                                <h1 className="text-7xl font-bold text-gray-300">
                                    Stories
                                </h1>

                                <p className="mt-4 text-lg text-gray-400">
                                    Read the latest conservation stories and updates from WWF about wildlife,
                                    wild places, people, and the planet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="px-6 py-12 md:px-10 md:py-16">
                <div className="mx-auto max-w-5xl">
                    <ul className="w-full divide-y divide-gray-300">
                        {articles.map((article) => (
                            <NewsArticleItem key={article.slug} article={article} />
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
}