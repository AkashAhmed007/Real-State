import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen my-20">
      <Helmet>
        <title>Realty-Hub | About</title>
      </Helmet>
      <div>
        <section>
          <div className="dark:bg-violet-600">
            <div className="container flex flex-col items-center px-4 pb-24 mx-auto text-center lg:pb-56 md:py-18 md:px-10 lg:px-32 dark:text-gray-50">
              <h1 className="text-5xl font-bold leading-none sm:text-5xl xl:max-w-3xl dark:text-gray-50">
                Welcome to All-in-One Realty Hub
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">
              At All-in-One Properties, we are dedicated to delivering exceptional service and results in the dynamic world of commercial real estate. 
              </p>
              <div className="flex flex-wrap justify-center">
                <Link to='/register'
                  type="button"
                  className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-100 dark:text-gray-900 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                >
                  Get started
                </Link>
                <Link to='/feature'
                  type="button"
                  className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-300 dark:text-gray-50 bg-success"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
          <img
            src="https://i.ibb.co/sjGvTQz/pexels-fauxels-3184418.jpg"
            alt=""
            className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40"
          />
        </section>

        <section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800">
          <div className="container mx-auto p-4 my-6 space-y-2 text-center">
            <h2 className="text-5xl font-bold">Built to empower every team</h2>
            <p className="dark:text-gray-600">Why Choose Us???</p>
          </div>
          <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 dark:text-violet-600"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="my-3 text-3xl font-semibold">Expertise</h3>
              <div className="space-y-1 leading-tight">
                <p>a prime location</p>
                <p>downtown financial district</p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 dark:text-violet-600"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="my-3 text-3xl font-semibold">Integrity</h3>
              <div className="space-y-1 leading-tight">
                <p>With floor-to-ceiling windows</p>
                <p>natural light and panoramic views</p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 dark:text-violet-600"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="my-3 text-3xl font-semibold">Client-Centric Approach</h3>
              <div className="space-y-1 leading-tight">
                <p>ideal for businesses looking</p>
                <p>impress clients and inspire productivity.</p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 dark:text-violet-600"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="my-3 text-3xl font-semibold">Results-Oriented</h3>
              <div className="space-y-1 leading-tight">
                <p>open floor plan allows for flexible layout options</p>
                <p>state-of-the-art amenities including</p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 dark:text-violet-600"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="my-3 text-3xl font-semibold">Leasing and Sales</h3>
              <div className="space-y-1 leading-tight">
                <p>contemporary office space offers</p>
                <p> downtown financial district</p>
              </div>
            </div>
            <div className="flex flex-col items-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 dark:text-violet-600"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <h3 className="my-3 text-3xl font-semibold">Property Management</h3>
              <div className="space-y-1 leading-tight">
                <p>including high-speed internet,</p>
                <p>state-of-the-art amenities</p>
              </div>
            </div>
          </div>
        </section>
        <section className="my-8 dark:bg-gray-100 dark:text-gray-800">
          <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
            <h1 className="p-4 text-4xl font-semibold leading-none text-center">
              What our customers are saying about us
            </h1>
          </div>
          <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
            <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  Working with Prime Commercial Properties was a pleasure from start to finish. Their team's expertise and dedication helped us find the perfect office space for our growing business. 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
                <img
                  src="https://source.unsplash.com/50x50/?portrait?1"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500"
                />
                <p className="text-xl font-semibold leading-tight">
                  Distinctio Animi
                </p>
                <p className="text-sm uppercase">Aliquam illum</p>
              </div>
            </div>
            <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  They took the time to understand our needs and provided personalized service every step of the way. I highly recommend Prime Commercial Properties to anyone in need of professional.
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
                <img
                  src="https://source.unsplash.com/50x50/?portrait?2"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500"
                />
                <p className="text-xl font-semibold leading-tight">
                  Distinctio Animi
                </p>
                <p className="text-sm uppercase">Aliquam illum</p>
              </div>
            </div>
            <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  They took the time to understand our needs and provided personalized service every step of the way. I highly recommend Prime Commercial Properties to anyone in need of professional.
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
                <img
                  src="https://source.unsplash.com/50x50/?portrait?3"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 "
                />
                <p className="text-xl font-semibold leading-tight">
                  Distinctio Animi
                </p>
                <p className="text-sm uppercase">Aliquam illum</p>
              </div>
            </div>
            <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
              <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
                <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  I had the pleasure of working with Prime Commercial Properties on the sale of my retail property. Their team's attention to detail and strategic approach resulted in a smooth and successful transaction.
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute right-0 w-8 h-8 dark:text-violet-600"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-600 dark:text-gray-50">
                <img
                  src="https://source.unsplash.com/50x50/?portrait?4"
                  alt=""
                  className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 "
                />
                <p className="text-xl font-semibold leading-tight">
                  Distinctio Animi
                </p>
                <p className="text-sm uppercase">Aliquam illum</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="py-6 dark:bg-gray-100 dark:text-gray-900 border-t-4 border-t-[rgb(0,51,86)]">
          <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
            <div className="flex flex-col justify-center py-6 md:py-0 md:px-6">
              <h1 className="text-4xl font-bold">Get in touch</h1>
              <p className="pt-2 pb-4">
                Fill in the form to start a conversation
              </p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Fake address, 9999 City</span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>123456789</span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>contact@business.com</span>
                </p>
              </div>
            </div>
            <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 border-gray-500">
              <label className="block">
                <span className="mb-1">Full name</span>
                <input
                  type="text"
                  placeholder="Leroy Jenkins"
                  className="w-full px-4 py-3  border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </label>
              <label className="block">
                <span className="mb-1">Email address</span>
                <input
                  type="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-4 py-3  border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </label>
              <label className="block">
                <span className="mb-1">Message</span>
                <textarea
                  rows="3"
                  className="w-full px-4 py-3  border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                ></textarea>
              </label>
              <button
                type="button"
                className="bg-[#27b6de] w-full text-white self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
