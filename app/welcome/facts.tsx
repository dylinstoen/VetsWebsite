import { facts, type Fact } from "../lib/facts";


function FactCard({ title, description }: Fact) {
  return (
    <li className="border-b border-white/20 first:[&>div]:pt-0">
      <div className="grid gap-8 py-8 md:grid-cols-12 md:items-center">
        <div className="md:col-span-7">
          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            {title}
          </h2>
        </div>

        <div className="md:col-span-5">
          <p className="text-lg leading-relaxed text-white/80">
            {description}
          </p>
        </div>
      </div>
    </li>
  );
}

export default function Facts() {
  return (
    <section className="bg-blue-900 py-10 md:py-16">
      <div className="mx-auto max-w-360 px-6 md:px-12 lg:px-20 md:py-10">
        {/* Title section */}
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-10">
            <h1 className="text-pretty text-4xl font-bold leading-tight text-white md:text-5xl">
              Our Impact
              <span className="text-white/50"> is transformative</span>
            </h1>
          </div>

          <div className="md:col-span-8">
            <p className="text-lg leading-relaxed text-white/80">
              Every dollar you give makes a difference for our community.
            </p>
          </div>
        </div>

        {/* Facts section */}
        <ul className="mt-15">
          {facts.map((fact) => (
            <FactCard key={fact.slug} {...fact} />
          ))}
        </ul>
      </div>
    </section>
  );
}