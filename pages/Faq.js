import React from 'react'

const Faq = () => {
  
    const faqsList = [
        {
            q: "What courses does DT Pattern Master offer?",
            a: "We offer a range of courses covering various aspects of pattern making, from basic principles to advanced techniques. Our curriculum includes courses tailored to different skill levels and interests in fashion design."
        },
        {
            q: "How do I know which course is right for me?",
            a: "Our team can help assess your skills and goals to recommend the most suitable course for your needs. Whether you're a beginner or an experienced designer looking to refine your skills, we have options tailored to your level."
        },
        {
            q: "Do you offer any financial aid or scholarships?",
            a: "We understand the importance of accessibility in education and strive to make our courses affordable for all. We offer various financial aid options and scholarships for eligible students. Please reach out to our team for more information on available assistance programs."
        },
        {
            q: "Do you offer any job placement assistance after completing a course?",
            a: "While we do not guarantee job placement, we provide career guidance and support to help students explore opportunities in the fashion industry. Our alumni network and industry connections can also be valuable resources for networking and job hunting."
        }
        
    ]

    return (
        <section className='py-14'>
            <div className="max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8">
                <div className='flex-1'>
                    <div className="max-w-lg">
                        <h3 className='font-semibold text-indigo-600'>
                            Frequently asked questions
                        </h3>
                        <p className='mt-3 text-gray-800 text-3xl font-extrabold sm:text-4xl'>
                            All information you need to know
                        </p>
                    </div>
                </div>
                <div className='flex-1 mt-12 md:mt-0'>
                    <ul className='space-y-4 divide-y'>
                        {faqsList.map((item, idx) => (
                            <li
                                className="py-5"
                                key={idx}>
                                <summary
                                    className="flex items-center justify-between font-semibold text-gray-700">
                                    {item.q}
                                </summary>
                                <p
                                    dangerouslySetInnerHTML={{ __html: item.a }}
                                    className='mt-3 text-gray-600 leading-relaxed'>
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
  )
}

export default Faq