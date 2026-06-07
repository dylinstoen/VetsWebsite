export function Contact() {
    return (
        <section className="bg-yellow-950">
            <header>
                <div className="mx-auto max-w-360 px-6 md:px-12 lg:px-20">
                    <div className="py-20">
                        <div className="grid grid-cols-12 gap-8">
                            <div className="col-span-12 lg:col-span-11">
                                <h1 className="text-7xl font-bold text-gray-300">
                                    Contact
                                </h1>

                                <p className="mt-4 text-lg text-gray-400">
                                    Submit a general question to our support team or explore all options below
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </section>
    );
}

export default function ContactPage() {
    return (
        <main>
            <Contact />

        </main>
    );
}