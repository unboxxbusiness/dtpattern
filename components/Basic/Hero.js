
import Link from "next/link"
import Image from "next/image"



const Hero = () => {

   

    return (
        <>
           
            <section className="py-28">
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h1 className="text-sm text-indigo-600 font-medium">
                            DT Pattern Master
                        </h1>
                        <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                        Master the Art of Pattern Making for Fashion Excellence
                        </h2>
                        <p>
                        From Basic Principles to Advanced Techniques, Empowering You to Create Precision Patterns for Every Garment Style
                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <Link href="tel:+919911642574" className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                                Apply Now
                            </Link>
                            
                        </div>
                    </div>
                    <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
                        <Image
                            src="/model1.jpg"
                            className=" md:rounded-tl-[108px]"
                            alt=""
                            width={400}
                            height={300}
                        />
                    </div>
                </div>
                
               
            </section>
        </>
    )
}
export default Hero