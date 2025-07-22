
import { Splide, SplideSlide } from "@splidejs/react-splide";
import HeaderBlog from "../component/HeaderBlog";
import Footer from "../component/Footer";

const LeadersMustBuildFamilyEnvironmentAchieveExcellence = () => {
    return (
        <>
            <HeaderBlog />

            <div className="mt-14">

                {/* heading che women leadership */}
                <div className=" w-full max-w-7xl mx-auto mb-10 p-2 ">
                    <h3 className="text-red-500 text-lg">
                        May 2, 2018 <span className="text-gray-400 font-montserrat, sans-serif w-max-7xl mx-auto"> / In Leadership / </span>
                        0 Comments
                    </h3>

                    <h2 className="font-bold text-2xl w-max-7xl mx-auto sm:text-3xl md:text-4xl  transition font-montserrat, sans-serif"
                    >
                        Leaders Must Build a Family Environment to Achieve Excellence
                    </h2>
                </div>

                {/* Hero Section */}
                <div className="relative  w-full mb-16 ">
                    <Splide
                        options={{
                            type: "fade",
                            rewind: true,
                            perPage: 1,
                            autoplay: true,
                            interval: 4000,
                            speed: 400,
                            arrows: false,
                            pagination: false,
                            pauseOnHover: false,
                            pauseOnFocus: false,
                        }}
                        className="h-full "
                    >
                        <SplideSlide>
                            <img
                                src="/imgs/media/blog/familyenvironment/familyenvironmentbanner1.png"
                                alt="Slide 1"
                                className="object-cover w-full max-w-7xl mx-auto h-full md:h-[50vh] lg:h-[70vh] xl:h-[55vh] "
                            />
                        </SplideSlide>
                        <SplideSlide>
                            <img
                                src="/imgs/media/blog/familyenvironment/familyenvironmentbanner2.png"
                                alt="Slide 2"
                                className="object-cover w-full max-w-7xl mx-auto h-full md:h-[50vh] lg:h-[70vh] xl:h-[55vh]"
                            />
                        </SplideSlide>
                        <SplideSlide>
                            <img
                                src="/imgs/media/blog/familyenvironment/familyenvironmentbanner3.png"
                                alt="Slide 3"
                                className="object-cover w-full max-w-7xl mx-auto h-full md:h-[50vh] lg:h-[70vh] xl:h-[55vh]"
                            />
                        </SplideSlide>

                    </Splide>


                </div>

                {/* content */}
                <div className="mb-10 p-2">

                    <div className="max-w-7xl mx-auto font-signika text-lg">
                        <p className="text-justify ">There is clearly something to say about running a business with a
                            family approach.   Not all of them are perfect, but that is not the point. Taking a
                            family approach means establishing a foundation of trust and a cultural promise to
                            unite as one; to perform with purpose and the healthier whole in mind
                        </p>
                    </div>
                    {/* paragraphs myth vadu */}
                    <div className="max-w-7xl mx-auto mt-8 mb-10 text-sm text-gray-700 text-justify  font-signika">
                        <div className="mb-10 space-y-2 ">
                            <h2 classname=""> 1.Give your team a sense of ownership</h2>
                            <p>To build a family environment, make everyone on the team feel as if they are a
                                “board member” in your department.  Establish boundaries, but elevate their sense
                                of purpose.
                            </p>
                        </div>
                        <div className="mb-10 space-y-2 ">
                            <h2 classname="">2.Everyone Must Protect One Another</h2>
                            <p>Lead with kindness and intention.  Leadership by fear limits the growth of your
                                employees and the opportunities for achievement.   Treat your employees like family.
                            </p>
                        </div >
                        <div className="mb-10 space-y-2 ">
                            <h2 classname="">3.Instil Values to Enable a Trusted Culture</h2>
                            <p>When you can define the standards of performance based on an understanding
                                of what you, the department and/or the company stands for – it is much easier to establish
                                expectations.   These expectations should be based on a set of core values that everyone
                                can embrace in order to build a trusted culture that is fair with no surprises
                            </p>
                        </div>
                        <div className="mb-10 space-y-2 ">
                            <h2 classname="">4.Encourage People to Speak-up</h2>
                            <p>Enable people to express their voice and allow their perspectives to be heard.
                                People shouldn’t feel that they require permission to express their opinions.
                                The goal is to activate the team, not restrict their participation.
                                The more people you get involved in the conversation,
                                the more you can benefit from a family environment that embraces differences.
                            </p>
                        </div>
                        <div className="mb-10 space-y-2 ">
                            <h2 classname="">5.Develop a Succession Plan </h2>
                            <p>Everyone on the team should be aware of their succession plan.  Be clear in establishing
                                a road-map to get employees excited about the next stage of their careers.  Be transparent
                                with everyone’s plan and allow others to participate in the plan.  With everyone pulling
                                for one another’s success in this family environment, it eliminates traps and cultivates
                                a culture of winning.
                            </p>
                        </div>
                        <div className="mb-10 space-y-2 ">
                            <p>Leaders require maturity and trust in themselves to build a family environment.
                                Those businesses that fail typically are a result of envy, lack of trust and/or
                                an inability to work together. Those leaders who can successfully build a family
                                environment in their department will not only achieve more in the short term but will
                                build a foundation of hard work, determination and perseverance for the long run
                            </p>
                        </div>
                    </div>

                    {/* comments */}
                    <div className="max-w-7xl mx-auto mt-4">
                        <h2 className="text-2xl font-thin">No Comment </h2>
                    </div>
                    <div className="max-w-7xl mx-auto mt-4">
                        <h2 className="text-2xl font-thin">Leave A Comment: </h2>
                        <p className="mt-4 text-gray-700">You must be logged in to post a comment.</p>
                    </div>
                </div>

            </div>

              <Footer/>
        </>
    )
};

export default LeadersMustBuildFamilyEnvironmentAchieveExcellence;
