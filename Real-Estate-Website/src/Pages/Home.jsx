import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import EstatesCard from "../Components/EstatesCard";
import { Helmet } from "react-helmet";
const Home = () => {
  const card = useLoaderData();
  return (
    <>
    <Helmet>
      <title>Realty Hub | Home</title>
    </Helmet>
      <Banner></Banner>
      <h1 className="text-xl sm:text-2xl md:text-3xl text-center m-4 sm:m-6 md:m-8 ">
        OUR BEST OFFERS
      </h1>
      <p className="border-t-2 border-indigo-500 m-2 sm:m-3 lg:m-5 p-5"></p>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 sm:gap-5 gap-3 m-3 sm:m-5 pb-8">
        {
         card.map(card=><EstatesCard key={card.id} card={card}></EstatesCard>) 
        }
      </div>


      <p className="border-t-2 border-indigo-500 m-2 sm:m-3 lg:m-5"></p>
      <div className="lg:flex lg:justify-between items-center m-3 sm:m-8 lg:py-16 py-5">
        <h1 className="sm:text-3xl font-bold lg:w-3/4 w-full lg:pr-5 pr-3">
          GET STARTED ON BUYING YOUR NEW Place! FIND YOUR AGENT!
        </h1>
        <NavLink to ='/feature' className="btn btn-success transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">Visit Here</NavLink>
      </div>
      <div>
        <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
          <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
            <img
              src="https://i.ibb.co/m9qZYH7/alex-kotliarskyi-QBp-ZGq-EMs-Kg-unsplash.jpg"
              alt=""
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://i.ibb.co/m4h10qV/pexels-laura-paredis-21253731.jpg"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://i.ibb.co/HK83qZD/construction-site-from-above.jpg"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://i.ibb.co/wrB7HGv/pexels-pixabay-260931.jpg"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://i.ibb.co/C65wX2V/pexels-mario-cuadros-2706653.jpg"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://i.ibb.co/gb2NL23/ceremony-arch-wedding-arch-wedding-wedding-moment-decorations-decor-wedding-decorations-543567-2061.jpg"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://i.ibb.co/64KzgCQ/lucas-vasques-9vn-ACv-X2748-unsplash.jpg"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://i.ibb.co/9g6hNQr/austin-distel-mp-N7xj-KQ-Ns-unsplash.jpg"
            />
            <img
              alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
              src="https://i.ibb.co/WB2Y6dR/view-land-plot-real-estate-business-development.jpg"
            />
            <img
              src="https://i.ibb.co/Hpq0N79/commercial-properties-in-ahemedabad-res-management.webp"
              alt=""
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
