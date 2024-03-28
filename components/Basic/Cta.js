import Link from "next/link"


const Cta = () => {
    return (
        <section className="relative overflow-hidden py-28 px-4 bg-gray-900 md:px-8">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10"></div>
            <div className="max-w-xl mx-auto text-center relative">
                <div className="py-4">
                    <h3 className="text-3xl text-gray-200 font-semibold md:text-4xl">
                    Ready to Elevate Your Fashion Design Skills?
                    </h3>
                    <p className="text-gray-300 leading-relaxed mt-3">
                    Enroll Now and Start Crafting Your Fashion Future!
                    </p>
                </div>
                <div className="mt-5 items-center justify-center gap-3 sm:flex">
                    <Link
                        href="tel:+919911642574"
                        className="block w-full mt-2 py-2.5 px-8 text-gray-700 bg-white rounded-md duration-150 hover:bg-gray-100 sm:w-auto"
                    >
                        Apply Now
                    </Link>
                    
                </div>
            </div>
        </section>
    )
}

export default Cta