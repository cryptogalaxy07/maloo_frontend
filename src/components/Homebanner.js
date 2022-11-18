import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import Logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";

const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "About us", href: "/about", current: false },
    { name: "Rewards", href: "/reward", current: false },
    { name: "ComCoin", href: "/comcoin", current: false },
    { name: "Contact us", href: "/contact", current: false },
];

export default function HomeBanner() {
    const { t } = useTranslation();
    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-white">
                    {({ open }) => (
                        <>
                            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="flex justify-center items-center">
                                            <img
                                                className="h-[64px] w-[64px]"
                                                src={Logo}
                                                alt="Maloo"
                                            />
                                            <p className="font-semibold whitespace-normal align-[-4px] text-[#232323] text-[2rem]">
                                                {t("MALOO")}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-10 flex items-baseline space-x-4 gap-8">
                                            {navigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.href}
                                                    className="nav-link text-[1.1rem]"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                            <div>
                                                <button className="rounded-[100px] py-[0.3rem] px-[2rem] text-white bg-[#212428] border-[#212428] shadow-[2px_2px_20px_0_rgba(33,36,40,1)]">
                                                    Login
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-black">
                                            <span className="sr-only">
                                                Open main menu
                                            </span>
                                            {open ? (
                                                <XMarkIcon
                                                    className="block h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                <Bars3Icon
                                                    className="block h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3 text-center">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className="block bg-white p-4 text-black"
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                    <Disclosure.Button
                                        as="a"
                                        href="#"
                                        className="rounded-[100px] py-[0.3rem] px-[2rem] text-white bg-[#212428] border-[#212428] shadow-[2px_2px_20px_0_rgba(33,36,40,1)]"
                                    >
                                        {t("LOGIN")}
                                    </Disclosure.Button>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </>
    );
}
