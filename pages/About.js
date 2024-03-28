import React from 'react'
import Link from 'next/link'
const About = () => {
  return (
    <section className="py-28 relative bg-blue-600">
            <div className="relative z-10 max-w-screen-7xl mx-auto px-4 md:text-center md:px-8">
                <div className="max-w-3xl md:mx-auto">
                    <p className="text-white text-3xl font-semibold sm:text-4xl">
                       About us
                    </p>
                    <p className="text-blue-100 mt-3">
                    DT Pattern Master offers training in pattern making for fashion enthusiasts. Their courses cover everything from basic principles to advanced techniques, ensuring students can create precise patterns for various garments. With a focus on creativity and practical skills, students learn to bring their design ideas to life. DT Pattern Master provides a supportive environment where aspiring designers can collaborate and grow, preparing them for success in the fashion industry.
                    </p>
                </div>
                <div className="mt-4">
                    <Link href="tel:+919911642574" className="inline-block py-2 px-4 text-gray-800 font-medium bg-white duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-full">
                       Apply Now
                    </Link>
                </div>
            </div>
            <div className="absolute top-0 w-full h-full" style={{ background: "linear-gradient(268.24deg, rgba(59, 130, 246, 0.76) 50%, rgba(59, 130, 246, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%)" }}></div>
        </section>
  )
}

export default About