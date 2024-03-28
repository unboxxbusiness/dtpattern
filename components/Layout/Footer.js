import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    const footerNavs = [
        {
            href: '/Terms',
            name: 'Terms'
        },
        {
            href: '/Contact',
            name: 'Contact Us'
        },
        {
            href: '/Faq',
            name: 'FAQ'
        },
        {
            href: '/About',
            name: 'About us'
        }
    ];

    return (
        <footer className="pt-10">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="space-y-6 sm:max-w-md sm:mx-auto sm:text-center">
                    <Image src="/dt1.png" className="w-32 sm:mx-auto" alt="" width={120} height={80} />
                    <p>
                        Discover endless possibilities in fashion design with DT Pattern Master - where creativity meets craftsmanship.
                    </p>
                    <div className="items-center gap-x-3 space-y-3 sm:flex sm:justify-center sm:space-y-0">
                        <Link href="tel:+919911642574" className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                            Apply Now
                        </Link>
                    </div>
                </div>
                <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
                    <p>© 2024 DT Pattern Master All rights reserved.</p>
                    <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
                        {
                            footerNavs.map((item, idx) => ( // Added idx as the key
                                <li key={idx} className="text-gray-800 hover:text-gray-500 duration-150">
                                    <Link href={item.href}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
