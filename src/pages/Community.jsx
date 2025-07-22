import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Header from "../component/Header";
import Footer from "../component/Footer";

const CommunityCard = ({ title }) => (
  <div className="bg-white hover:bg-gray-200 rounded-lg shadow-md px-6 py-16 w-full sm:w-[45%] md:w-[30%]">
    <h2 className="text-xl font-semibold text-blue-900 text-center">{title}</h2>
  </div>
);

const Community = () => {
  const cards = [
    { title: 'Plantation/Housekeeping Day' },
    { title: 'Blood donation/health check-up camps' },
    { title: 'Resource mobilization for Government schools' },
    { title: 'Adult night school' },
    { title: 'Polytechnic college for villagers' },
    { title: 'Shanti Sahara-running an old age home' },
    { title: 'Providing Labour' },
    { title: 'Livelihood programs for Labours' },
  ];

  return (
 <>
 <Header/>
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full">
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
          className="h-full"
        >
          {['communitybanner1', 'communitybanner3', 'communitybanner4', 'communitybanner2'].map((img, idx) => (
            <SplideSlide key={idx}>
              <img
                src={`./imgs/wecare/community/${img}.png`}
                alt={`Slide ${idx + 1}`}
                className="object-cover w-full h-full md:h-[70vh] lg:h-[80vh] xl:h-[80vh]"
              />
            </SplideSlide>
          ))}
        </Splide>

        {/* Overlay Title */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-yellow-400 text-3xl sm:text-5xl md:text-8xl font-roboto, Arial, sans-serif ">
            Community
          </h1>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-gray-50 px-4  py-16">
        <div className="max-w-7xl mx-auto text-justify space-y-6">
          <h2 className="font-bold text-2xl sm:text-4xl text-center mb-16 font-montserrat, sans-serif" >Initiatives taken for our community</h2>
          <div className="text-xs sm:text-sm text-gray-700  font-medium space-y-7 text-justify font-signika" >
            <p classname="text-xs ">
              Businesses are powerful constituents of society and the most successful, respected, and desirable businesses
              exist to do much more than make money; they exist to use the power of business to solve social and environmental problems.
            </p>
            <p classname="text-xs  ">
              Nandan Denim is involved in a wide variety of community development and environment preservation projects.
              Nandan’s social activities relate to health, primary education, livelihoods, women empowerment and environment preservation.
            </p>
            <p classname="text-xs ">
              The company believes corporate social responsibility (CSR) is a critical mission that is at the heart of everything
              that it does, how it thinks and what it is.Nandan is committed to integrating environmental, social and ethical principles
              into the core business, thereby enhancing long-term stakeholder value and touching the lives of India’s population.
            </p>
            <p classname="text-xs ">The company’s CSR programmes aim to be relevant to local, national and global contexts, keep disadvantaged
              communities as the focus, be based on globally-agreed sustainable development principles and be implemented in
              partnership with governments, NGOs and other relevant stakeholders.
              The CSR approach adopted envisages that the company evolves and executes strategies to support communities in partnership
              with governments, civil society and relevant stakeholders.
            </p>
            <p classname="text-xs ">
              Key to this approach is Nandan employees who generously give of their time, experience and talent to serve
              communities; the company encourage and facilitate them to do so.
              Nandan equips communities with the capacity to achieve improved health, education and livelihood outcomes.
              It also works towards enabling other living things on the planet get their fair share of the resources.
              Some of Nandan’s initiatives to promote environment protection include promoting green plantations and spreading
              environmental awareness.
            </p>
            <p classname="text-xs mt-5">
              We contribute to the well being of people by introducing sustainable measures of water supply and providing medical
              assistance to local institutions, villages and schools located in the rural areas.
              A large number of initiatives are focused on developing community infrastructure and protecting the environment.
            </p>
          </div>
        </div>
      </div>

      {/* Community Cards */}
      <div className="w-full bg-white py-20 px-4 ">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10 font-extrabold font-signika "  >
          {cards.map((card, idx) => (
            <CommunityCard key={idx} title={card.title}  />
          ))}
        </div>
      </div>
    </div>
      <Footer/>
 </>
  );
};

export default Community;
