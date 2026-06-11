export function ContactHeader() {
    return (
        <header>
            <div className="mx-auto max-w-360 px-6 md:px-12 lg:px-20">
                <div className="pt-20">
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
    );
}
function ContactInfoSection() {
    return (
        <section>
            <div className="mx-auto max-w-360 px-6 py-10 md:px-12 lg:px-20">
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-12 lg:col-span-6">
                        <div className="flex flex-col gap-4 text-lg text-gray-300">
                            <p>
                                Email: support@example.com
                            </p>
                            <p>
                                Phone: (555) 555-5555
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default function ContactPage() {
    return (
        <main className="bg-yellow-950">
            <ContactHeader />
            <ContactInfoSection />
        </main>
    );
}