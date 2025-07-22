import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Leadership = () => {
  return (
  <>
  <Header/>
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative  w-full">
        <img
          src="./imgs/aboutus/leadership/leadershipbanner.png"
          alt="Leadership Banner"
          className="object-cover w-full h-full md:h-[70vh] lg:h-[70vh] xl:h-[80vh]"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 lg:px-32 text-white bg-black/50">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-1 text-justify font-montserrat, sans-serif " >
            Leadership
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl italic text-justify ">
            Growth for us means collective progress for all our stakeholders – our customers, employees, investors and the community at large
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 py-10 space-y-8 max-w-7xl mx-auto ">
        <section>
          <h2 className="font-extrabold text-xl sm:text-2xl mb-1 text-justify font-signika" >Customer</h2>
          <p className="leading-6 text-sm text-gray-700 text-justify font-signika" >
            Customers, without a glimmer of doubt, are the most important stakeholders
            at Nandan Denim. We take immense pride in reviewing their constructive
            feedback that comprises of complaints, suggestions and appreciation with an impartial ear.
            We love to implement all pragmatically possible and achievable pointers from customer feedback
            to ensure we satisfy their needs and demands. A customer-centric approach, for obvious reasons,
            aids us in inexplicable proportions as it helps us improve and become better Denim Manufacturers.
          </p>
        </section>

        <section>
          <h2 className="font-extrabold text-xl sm:text-2xl mb-1 text-justify font-signika" >Suppliers</h2>
          <p className="leading-6 text-sm text-gray-700 text-justify font-signika" >
            Our suppliers ensure we are up to date with the necessary raw materials to function consistently.
            Often, the suppliers are ignored stakeholders but, right since our inception, our top management has
            emphasized on being on the same page with them. We work on the material provided by them, and hence we treat them
            as no less than customers or investors as they initiate the production chain for us. At Nandan Denim, we value our
            suppliers immensely and keep emphasizing on having healthy relationships with them.
          </p>
        </section>

        <section>
          <h2 className="font-extrabold text-xl sm:text-2xl mb-1 text-justify font-signika" >Investors</h2>
          <p className="leading-6 text-sm text-gray-700 text-justify font-signika" >
            We’ve always maintained that we treat external funds with tremendous care and caution.
            The fact that our investors have faith in us and back us in all our ventures, new or existing,
            motivates us to further improve our processes and the outcomes.
            Ample support from financers also ensures that the company can boundlessly
            dream big and attempt previously uncharted territories.
          </p>
        </section>
      </div>
    </div>
      <Footer/>
  </>
  );
};

export default Leadership;
