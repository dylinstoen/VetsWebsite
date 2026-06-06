import BisonImage from "../images/elephants.webp";

type ArticleCardProps = {
  image: string;
  title: string;
  description: string;
  href: string;
};

function ArticleCard({ image, title, description, href }: ArticleCardProps) {
  return (
    <>
      <div className="grid items-center md:grid-cols-12 md:gap-8 md:px-10">
        {/* Image */}
        <div className="md:col-start-6 md:col-span-8 md:row-start-1">
          <div className="mx-auto aspect-4/3 w-full max-w-2xl overflow-hidden rounded-t-sm md:rounded-sm">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Text card */}
        <article className="relative z-10 bg-white p-6 md:col-start-1 md:col-span-6 md:row-start-1 md:rounded-sm rounded-b-sm md:p-10">
          <h2 className="text-xl font-bold leading-relaxed text-gray-900 md:text-2xl">
            {title}
          </h2>

          <p className="mt-3 leading-relaxed text-gray-600">
            {description}
          </p>

          <a
            href={href}
            className="mt-6 inline-flex w-full justify-center rounded-full bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 md:w-auto md:px-8"
          >
            Read More
          </a>
        </article>
      </div>
      <div className="grid md:grid-cols-12 md:px-10 gap-8 items-center">
        <div className="mt-1 md:col-start-6 md:col-span-8 md:text-right">
          <p className="text-xs text-gray-700">© WWF-US/Gareth Bentley</p>
        </div>
      </div>
    </>


  );
}

export default function FeaturedStory() {
  return (
    <>
      <section className="bg-amber-700 px-6 py-10 md:px-10 md:py-16">
        {/* Title container */}
        <div className="mx-auto md:px-10 max-w-6xl">
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
        </div>

        {/* Article container */}
        <div className="mx-auto mt-12 max-w-6xl md:mt-16">
          <ArticleCard
            image={BisonImage}
            title="Namibia for Life"
            description="A visionary initiative to protect 50 million acres for communities and nature"
            href="./"
          />
        </div>
      </section>
    </>
  );
}