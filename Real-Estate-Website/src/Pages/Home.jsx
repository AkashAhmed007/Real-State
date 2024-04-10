import image from "../assets/bg-image.jpeg";
import Banner from "../Components/Banner";
const Home = () => {
  return (
    <>
      <Banner></Banner>
      <h1 className="text-xl sm:text-2xl md:text-3xl text-center m-4 sm:m-6 md:m-8 ">
        OUR BEST OFFERS
      </h1>
      <p className="border-t-2 border-indigo-500 m-2 sm:m-3 md:m-5 p-5"></p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 sm:gap-5 gap-3 m-3 sm:m-5">
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 shadow-xl">
          <figure>
            <img
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <p className="border-t-2 border-indigo-500 sm:m-5 sm:p-5"></p>
      <div className="lg:flex lg:justify-between items-center lg:py-16 py-5 w-10/12 mx-auto">
        <h1 className="sm:text-4xl font-bold lg:w-3/4 w-full lg:pr-5 pr-3">
          GET STARTED ON BUYING YOUR NEW HOME! FIND YOUR AGENT!
        </h1>
        <button className="bg-[#27b6de] text-white lg:text-2xl text-base px-2 py-3 font-bold md:mt-5 mt-3">
          CLICK HERE
        </button>
      </div>
      <div></div>
    </>
  );
};

export default Home;
