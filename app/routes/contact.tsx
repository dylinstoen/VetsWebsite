import {getContactPageSettings} from "../lib/contactPageParser"

function ContactHeader({
  headline,
  subheader,
}: {
  headline: string;
  subheader: string;
}) {
  return (
    <header>
      <div className="mx-auto max-w-360 px-6 md:px-12 lg:px-20">
        <div className="pt-20">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-11">
              <h1 className="text-7xl font-bold text-gray-300">
                {headline}
              </h1>

              <p className="mt-4 text-lg text-gray-400">
                {subheader}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function ContactInfoSection({
  contactInfo,
}: {
  contactInfo: {
    label: string;
    value: string;
    href?: string;
  }[];
}) {
  return (
    <section>
      <div className="mx-auto max-w-360 px-6 py-10 md:px-12 lg:px-20">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-6">
            <div className="flex flex-col gap-4 text-lg text-gray-300">
              {contactInfo.map((item) => (
                <p key={item.label}>
                  <span className="font-semibold">{item.label}: </span>

                  {item.href ? (
                    <a href={item.href} className="underline">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  const contactPage = getContactPageSettings();

  return (
    <main className="bg-yellow-950">
      <ContactHeader
        headline={contactPage.headline}
        subheader={contactPage.subheader}
      />

      <ContactInfoSection contactInfo={contactPage.contactInfo} />
    </main>
  );
}