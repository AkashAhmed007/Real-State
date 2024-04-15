import { useContext} from "react";
import { AuthContext } from "./FirebaseProvider/FirebaseProvider";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const {user,updateUserProfile,createUser} = useContext(AuthContext);
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit =(data)=>{
    const{username,image,email,password} = data;
    createUser(email,password,username,image)
    .then(()=>{
      alert('You have registered succesfully')
      updateUserProfile(username,image)
      .then(()=>{
        navigate("/")
      })
    }).catch(error=>{
      console.log(error.message)
    })
  }
 return (
    <>
      <div className="mt-10">
      <Helmet>
        <title>Realty-Hub | UpdateProfile</title>
      </Helmet>
        <div className="max-w-md p-6 mx-auto sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800 border-gray-500 border mt-20">
          <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
            <img
              src={user?.photoURL || "https://i.ibb.co/C26wRTg/istockphoto-1300845620-1024x1024.jpg"}
              alt="user-image"
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
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="w-full mx-auto max-w-md p-8 space-y-3 border rounded-xl dark:bg-gray-50 dark:text-gray-800">
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block dark:text-gray-600">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-3 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              {...register("username", { required: true })}
            />
            {errors.username && <span className="text-red-500" >This field is required</span>}

            <label htmlFor="email" className="block dark:text-gray-600">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="emial"
              placeholder="email"
              className="w-full px-4 py-3 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-red-500" >This field is required</span>}

            <label htmlFor="password" className="block dark:text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-red-500" >This field is required</span>}

            <label htmlFor="image" className="block dark:text-gray-600">
              PhotoURL
            </label>
            <input
             {...register("image")}
              type="text"
              name="image"
              id="image"
              placeholder="PhotURL"
              className="w-full px-4 py-3  border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600 bg-[#27b6de] text-white">
            Sign in
          </button>
        </div>
          
    </form>
    </>
  );
};

export default UpdateProfile;
