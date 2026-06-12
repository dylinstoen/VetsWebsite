export function About() {
    return (
        <section className="bg-yellow-950">
            <header>
                <div className="mx-auto max-w-360 px-6 md:px-12 lg:px-20">
                    <div className="py-20">
                        <div className="grid grid-cols-12 gap-8">
                            <div className="col-span-12 lg:col-span-11">
                                <h1 className="text-7xl font-bold text-gray-300">
                                    About us
                                </h1>

                                <p className="mt-4 text-lg text-gray-400">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolores eius sapiente sed asperiores iste reiciendis.
                                </p>
                                <p className="mt-4 text-lg text-white">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolores eius sapiente sed asperiores iste reiciendis. 
                                    Dolorum adipisci voluptate aperiam nulla tempora corporis facere obcaecati molestias excepturi quod! Dignissimos, natus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae eveniet in ipsa optio, 
                                    explicabo aliquam deleniti eligendi neque aperiam at nemo sunt amet. Magni veniam nemo id voluptatum veritatis. Cumque.
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quaerat reprehenderit cumque minima error officia magnam expedita. 
                                    Ex maiores a tempora earum, nemo obcaecati voluptate rem quae dolorum incidunt libero.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </section>
    );
}

export default function AboutUs() {
    return (
        <main>
            <About/>
        </main>
    );
}