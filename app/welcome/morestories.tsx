import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";
import { articles, type Article } from "../lib/articles";



function MiniArticleCard(article: Article) {
    const href = article.externalUrl || `/stories/${article.slug}`;
    const isExternal = Boolean(article.externalUrl);

    const cardContent = (
        <>
            <div className="row-start-1 aspect-4/3 overflow-hidden rounded-sm bg-gray-200">
                <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {article.credit && (
                <div className="row-start-2 mt-1">
                    <p className="text-xs text-gray-700">{article.credit}</p>
                </div>
            )}

            <div className="row-start-3">
                <p className="pt-3 pb-2 font-bold text-gray-900">
                    {article.category}
                </p>

                <h3 className="text-xl font-semibold text-gray-900 group-hover:underline group-hover:underline-offset-4">
                    {article.title}
                </h3>

                <p className="pt-2 text-gray-800">{article.description}</p>
            </div>
        </>
    );

    if (isExternal) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full no-underline"
            >
                {cardContent}
            </a>
        );
    }

    return (
        <Link to={href} className="group block h-full no-underline">
            {cardContent}
        </Link>
    );
}

function getCardSpanClass(index: number, totalCards: number) {
    const cardsPerRow = 3;
    const remainder = totalCards % cardsPerRow;
    if (remainder === 0) {
        return "md:col-span-4";
    }
    const finalRowStartIndex = totalCards - remainder;
    if (index < finalRowStartIndex) {
        return "md:col-span-4";
    }
    if (remainder === 1) {
        return "md:col-span-12";
    }
    return "md:col-span-6";
}
export default function MoreStories() {
    const storiesPage = "./stories"
    const moreStoriesArticles = articles.filter((article) => article.moreStories).sort((a, b) => {
        const aTime = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
        const bTime = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
        return bTime - aTime;
    });;


    return (
        <section className="bg-green-400 py-10 md:py-16">
            <div className="mx-auto max-w-360 px-6 md:px-12 lg:px-20">
                <div className="grid gap-8 md:grid-cols-12">
                    <div className="md:col-span-8">
                        <h1 className="text-pretty text-3xl leading-10 text-gray-900 md:text-5xl md:leading-tight">
                            <b>Our work</b>
                            <span className="text-white">
                                {" "}to reverse nature loss and conserve biodiversity has never been more urgent
                            </span>
                        </h1>
                    </div>

                    <div className="md:col-span-2 md:col-start-11 md:flex md:items-end md:justify-end">
                        <Link
                            to={storiesPage}
                            className="group inline-flex items-center justify-center rounded-full border border-gray-900 px-6 py-3 font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white focus-visible:bg-gray-900 focus-visible:text-white"
                        >
                            Stories
                            <ArrowRightIcon className="ml-2 size-4 shrink-0 transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1" />
                        </Link>
                    </div>
                </div>

                <ul className="mt-10 grid gap-8 md:grid-cols-12">
                    {moreStoriesArticles.map((article, index) => (
                        <li
                            key={article.slug}
                            className={getCardSpanClass(index, moreStoriesArticles.length)}
                        >
                            <MiniArticleCard {...article} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}