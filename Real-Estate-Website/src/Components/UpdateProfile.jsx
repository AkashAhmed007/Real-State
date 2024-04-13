import { useContext } from "react";
import Register from "./Register";
import { AuthContext } from "./FirebaseProvider/FirebaseProvider";
import { Helmet } from "react-helmet";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="mt-10">
      <Helmet>
        <title>Realty-Hub | UpdateProfile</title>
      </Helmet>
        <div className="max-w-md p-6 mx-auto sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800 border-gray-500 border mt-20">
          <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
            <img
              src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
              alt=""
              className="object-cover object-center w-full h-full rounded dark:bg-gray-500 mt-8"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-green-300 border-b border-green-400">
                Your Profile
              </h2>
              <h2 className="text-2xl font-semibold">
                {user?.displayName || "User name not found"}
              </h2>
              <span className="text-sm dark:text-gray-600">
                General manager
              </span>
            </div>
            <div className="space-y-1">
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="Email address"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                  ></path>
                </svg>
                <span className="dark:text-gray-600">
                  {user?.email || "User Email not found"}
                </span>
              </span>
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="Phonenumber"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
                  ></path>
                </svg>
                <span className="dark:text-gray-600">+25 381 77 983</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 mx-auto flex justify-center items-center border border-black m-3 p-3 rounded-xl">
        <h3 className="text-2xl font-bold">Update your profile</h3>
        <div className="">
        <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 border-gray-500">
        <label className="block">
                <span className="mb-1">Email address</span>
                <input
                  type="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-4 py-3  border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </label>
              <label className="block">
                <span className="mb-1">PhotoURL</span>
                <input
                  type="text"
                  placeholder="https:www.freepik.com"
                  className="w-full px-4 py-3  border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
              </label>
              
              <button
                type="button"
                className="bg-[#27b6de] w-full text-white self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600"
              >
                Submit
              </button>
        </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
