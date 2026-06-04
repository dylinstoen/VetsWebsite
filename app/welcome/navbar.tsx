import logo from "./logo.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useElementOnScreen } from "../hooks/useElementOnScreen";
import { useState, useEffect } from "react";
import type { ReactNode } from "react";


function HideWhenMenuOpen({ isMenuOpen = false, children, className = "" }: { isMenuOpen: boolean, children: ReactNode, className?: string }) {
    return (
        <div className={`inline-flex shrink-0 transition-opacity duration-300 ${isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"} ${className}`}>
            {children}
        </div>
    );
}


function DropDownMenu({ isOpen, contactPage, aboutPage, giftPage, donatePage }: { isOpen: boolean, contactPage: string, aboutPage: string, giftPage: string, donatePage: string }) {
    return (
        <div
            className={`fixed left-0 top-20 z-50 grid h-[calc(100vh-5rem)] w-screen content-start gap-3 bg-gray-900 px-10 py-4 transition-opacity duration-300 ease-in-out lg:hidden ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}>
            <a
                href={contactPage}
                className={`py-6 text-2xl text-white transition-all duration-300 ease-in-out ${isOpen ? "translate-y-0 opacity-100 delay-150" : "translate-y-4 opacity-0"
                    }`}
            >
                Contact
            </a>

            <a
                href={aboutPage}
                className={`py-6 text-2xl text-white transition-all duration-300 ease-in-out ${isOpen ? "translate-y-0 opacity-100 delay-150" : "translate-y-4 opacity-0"
                    }`}
            >
                About Us
            </a>

            <a
                href={donatePage}
                className={`inline-flex w-full items-center justify-center rounded-full bg-blue-700 py-2 text-lg font-medium text-white transition-all duration-300 ease-in-out ${isOpen ? "translate-y-0 opacity-100 delay-300" : "translate-y-4 opacity-0"
                    }`}
            >
                Donate
            </a>
        </div>
    )
}

function AnimatedMenuButton({ isOpen, onClick }: { isOpen: boolean, onClick: () => void }) {
    return (
        <button onClick={onClick} className="flex relative items-center justify-center size-8 shrink-0 lg:hidden">
            <Bars3Icon
                className={`
          absolute inset-0 size-8 text-gray-900
          transition-all duration-300 ease-out
          ${isOpen ? "rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"}
        `}
            />

            <XMarkIcon
                className={`
          absolute inset-0 size-8 text-gray-900
          transition-all duration-300 ease-out
          ${isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-75 opacity-0"}
        `}
            />
        </button>
    );
}

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", isMenuOpen);
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isMenuOpen])
    const [shouldShrink, setShouldShrink] = useState(false);

    // Runs once after mount. The state update causes one extra render,
    // but the empty dependency array prevents an infinite loop.
    useEffect(() => {
        function handleScroll() {
            const y = window.scrollY;

            setShouldShrink((currentlyShrunk) => {
                if (!currentlyShrunk && y > 80) return true;
                if (currentlyShrunk && y < 20) return false;
                return currentlyShrunk;
            });
        }
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const contactPage = "/";
    const aboutPage = "/";
    const donatePage = "/";
    const giftPage = "/";

    return (
        <>
            <div className="absolute py-4" />

            <header className="md:sticky md:top-0 w-full bg-gray-950 z-50">
                <nav
                    className={`relative mx-auto grid max-w-7xl grid-cols-12 items-center gap-3 bg-gray-950 px-5 transition-all duration-300 ${shouldShrink ? "md:py-1" : "py-4 md:py-4"
                        }`}
                >
                    {/* Logo */}
                    <div className="col-span-3 flex items-center justify-start md:col-span-2">
                        <a href="/" className="inline-block w-fit">
                            <img
                                src={logo}
                                alt="Logo"
                                className={`w-auto transition-[height] duration-300 ${shouldShrink ? "h-9" : "h-12"
                                    }`}
                            />
                        </a>
                    </div>

                    {/* Right Side: Gift, Donate, Contact, About, Hamburger */}
                    <div className="col-span-9 col-start-4 flex items-center justify-end gap-3 md:gap-7 lg:col-span-10 lg:col-start-3">
                        {/* Gift / Donate */}
                        <div className="flex items-center gap-2 md:gap-4">
                            <HideWhenMenuOpen isMenuOpen={isMenuOpen}>
                                <a
                                    href={donatePage}
                                    className={`inline-flex rounded-full bg-blue-700 px-5 py-2 text-lg font-semibold text-white transition-all duration-300 hover:bg-blue-800 md:px-10 ${shouldShrink ? "max-md:scale-75 md:py-1" : "max-md:scale-100 md:py-3"
                                        }`}
                                >
                                    Donate
                                </a>
                            </HideWhenMenuOpen>
                        </div>

                        {/* Contact / About / Hamburger */}
                        <div className="flex items-center gap-6">
                            <a href={contactPage} className="hidden text-lg font-semibold text-white lg:flex">
                                Contact
                            </a>

                            <a href={aboutPage} className="hidden text-lg font-semibold text-white lg:flex">
                                About Us
                            </a>

                            <AnimatedMenuButton
                                isOpen={isMenuOpen}
                                onClick={() => setMenuOpen(!isMenuOpen)}
                            />
                        </div>
                    </div>
                </nav>
            </header>

            <DropDownMenu
                contactPage={contactPage}
                aboutPage={aboutPage}
                giftPage={giftPage}
                donatePage={donatePage}
                isOpen={isMenuOpen}
            />
        </>
    );
}