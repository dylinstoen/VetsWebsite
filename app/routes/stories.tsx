
import minicard1 from "../images/minicard1.webp";
import minicard2 from "../images/minicard2.webp";
import minicard3 from "../images/minicard3.webp";

type NewsArticle = {
    title: string;
    href: string;
    image: string;
    imageCredit: string;
    date?: string;
    datetime?: string;
};

const newsArticles: NewsArticle[] = [
    {
        title: "In the Yucatan, the women known as Las Vecinas find economic opportunity and a connection to Mayan culture with stingless bees",
        href: "./",
        image: minicard1,
        imageCredit: "© WWF-US / Alejandro Prieto",
    },
    {
        title: "Rebuilding after disasters",
        href: "./",
        image: minicard2,
        imageCredit: "© WWF / Anita van Breda",
        date: "June 1, 2026",
        datetime: "2026-06-01",
    },
    {
        title: "Namibia for Life",
        href: "./",
        image: minicard3,
        imageCredit: "© WWF-US/Gareth Bentley",
        date: "May 20, 2026",
        datetime: "2026-05-20",
    },
];

function NewsArticleItem({ article }: { article: NewsArticle }) {
    return (
        <li className="flex flex-col-reverse gap-6 border-b border-gray-300 py-10 first:pt-0 last:border-b-0 last:pb-0 md:grid md:grid-cols-12">
            <div className="flex flex-col justify-center gap-3 md:order-2 md:col-span-5 md:col-start-8">
                <h2 className="text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
                    <a
                        href={article.href}
                        className="transition hover:text-blue-700"
                    >
                        {article.title}
                    </a>
                </h2>

                {article.date && article.datetime && (
                    <p className="font-bold text-gray-500">
                        <time dateTime={article.datetime}>
                            <span className="sr-only">Published on </span>
                            {article.date}
                        </time>
                    </p>
                )}
            </div>

            <div className="mb-4 md:order-1 md:col-span-6 md:mb-0">
                <a href={article.href} aria-label={article.title} className="block">
                    <img
                        src={article.image}
                        alt=""
                        className="aspect-4/3 w-full rounded-sm object-cover"
                        loading="lazy"
                    />

                    <p className="mt-2 text-sm text-gray-500">
                        {article.imageCredit}
                    </p>
                </a>
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
                        {newsArticles.map((article) => (
                            <NewsArticleItem key={article.title} article={article} />
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
}