import { ArrowRightIcon } from "@heroicons/react/24/outline";
import minicard1 from "../images/minicard1.webp";
import minicard2 from "../images/minicard2.webp";
import minicard3 from "../images/minicard3.webp";

type MiniArticleCardProps = {
    image: string;
    imageCredit: string;
    category: string;
    title: string;
    description: string;
    href: string;
    className?: string;
};

const stories: MiniArticleCardProps[] = [
    {
        image: minicard1,
        imageCredit: "© WWF-US / Alejandro Prieto",
        category: "News",
        title: "Herencia Maya",
        description: "Historic initiative will protect 1.4 million acres of Yucatán State and honor Maya culture",
        href: "./",
    },
    {
        image: minicard2,
        imageCredit: "© WWF / Anita van Breda",
        category: "Story",
        title: "How to rebuild sustainably",
        description: "Without careful planning, post-disaster reconstruction can damage ecosystems, strain supply chains, and undermine long-term community resilience.",
        href: "./",
    },
    {
        image: minicard3,
        imageCredit: "© Paul Mckenzie / WWF-HK",
        category: "Explainer",
        title: "Sharks are key to the health of our oceans and climate",
        description: "Reframing the story of one of the ocean's most enduring champions",
        href: "./",
    }
];


function MiniArticleCard({
    image,
    imageCredit,
    category,
    title,
    description,
    href,
    className = "",
}: MiniArticleCardProps) {
    return (
        <a
            href={href}
            className={`group grid grid-rows-subgrid row-span-3 gap-0 no-underline md:col-span-4 ${className}`}
        >
            {/* Image */}
            <div className="row-start-1 aspect-4/3 overflow-hidden rounded-sm bg-gray-200">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Image credit */}
            <div className="row-start-2 mt-1">
                {imageCredit && (
                    <p className="text-xs text-gray-700">
                        {imageCredit}
                    </p>
                )}
            </div>

            {/* Text content */}
            <div className="row-start-3">
                {/* Category */}
                <p className="pb-1 text-sm font-bold text-gray-900">
                    {category}
                </p>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 group-hover:underline group-hover:underline-offset-4">
                    {title}
                </h3>

                {/* Description */}
                <p className="pt-2 text-gray-800">
                    {description}
                </p>
            </div>
        </a>
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
    const storiesPage = "./"
    return (
        <section className="bg-green-400 px-6 py-10 md:px-10 md:py-16">
            <div className="mx-auto max-w-6xl">
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
                        <a
                            href={storiesPage}
                            className="group inline-flex items-center justify-center rounded-full border border-gray-900 px-6 py-3 font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white focus-visible:bg-gray-900 focus-visible:text-white"
                        >
                            Stories
                            <ArrowRightIcon className="ml-2 size-4 shrink-0 transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1" />
                        </a>
                    </div>
                </div>
                <div className="mt-10 grid gap-8 md:grid-cols-12">
                    {stories.map((story, index) => (
                        <MiniArticleCard
                            key={story.href}
                            {...story}
                            className={getCardSpanClass(index, stories.length)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}