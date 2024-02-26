import { Link } from "@tanstack/react-router";

const SiteFooter = () => {
    return (
        <footer>
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link
                        to="/"
                        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                    >
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Made by Sayan (MMXXIV)
                        </span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to="https://sayanbiswas.hashnode.dev" className="hover:underline me-4 md:me-6">
                                Hashnode
                            </Link>
                        </li>
                        <li>
                            <Link to="https://github.com/Dank-del" className="hover:underline me-4 md:me-6">
                                Github
                            </Link>
                        </li>
                        <li>
                            <Link to="https://twitter.com/TheDankDel" className="hover:underline me-4 md:me-6">
                                Twitter
                            </Link>
                        </li>
                        <li>
                            <Link to="mailto:me@sayanbiswas.in" className="hover:underline">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2024{" "}
                    <a href="https://flowbite.com/" className="hover:underline">
                        Sayan Biswas
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}

export default SiteFooter;