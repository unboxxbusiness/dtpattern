const Features = () => {


    const features = [
        {
            title: "Comprehensive Curriculum",
            desc: "Master the fundamentals and advanced techniques of pattern making with our structured curriculum"
        },
        {
            title: "Hands-On Practice",
            desc: " Gain practical experience through hands-on exercises and projects, ensuring proficiency in pattern drafting and manipulation"
        },
        {
            title: "Expert Instruction",
            desc: "Learn from experienced instructors dedicated to nurturing your skills and providing personalized guidance"
        },
        {
            title: "Industry-Relevant Training",
            desc: "Stay abreast of current trends and standards in the fashion industry with our up-to-date curriculum"
        },
        {
            title: "Networking Opportunities",
            desc: "Connect with industry professionals through workshops and events, expanding your professional network"
        },
        {
            title: "Portfolio Development",
            desc: "Build a portfolio showcasing your skills, preparing you for a successful career in fashion design"
        },
    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-xl space-y-3">
                    <h3 className="text-indigo-600 font-semibold">
                        Features
                    </h3>
                    <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Experience the Difference with DT Pattern Master
                    </p>
                    <p>
                    Unlock Your Creativity and Excel in Fashion Design
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="space-y-3">
                                    <div className="w-12 h-12 border text-indigo-600 rounded-lg flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg text-gray-800 font-semibold">
                                        {item.title}
                                    </h4>
                                    <p>
                                        {item.desc}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Features