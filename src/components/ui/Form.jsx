import { Link } from "react-router-dom";

const Form = ({heading, des, children, ...props}) => {
    return (
      <>
        <form className="border dark:border-border-1 dark:bg-bg-1 space-y-3 bg-white rounded-xl p-5 py-10 h-fit w-full md:w-8/12 lg:w-5/12 xl:w-4/12 flex items-center flex-col" {...props}>
          <Link
            to={"/"}
            className="flex items-center gap-3 text-2xl font-medium dark:text-white text-black scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.2"
              viewBox="0 0 1326 1326"
              width="30"
              height={30}
            >
              <style />
              <path
                className="dark:fill-white"
                d="m971.5 128c12.9 4.5 25.5 9.3 37.7 14.7q109.6 48.7 168.1 139.7c7.4 11.5 13.8 23.5 19.8 35.8v-190.2zm-687.7 0v1069.1h-155.8v-1069.1zm709.9 729.5l203.4 290.5v-470.3c-7.1 14.4-14.9 28.4-23.9 41.7q-62.5 92.6-179.5 138.1zm-42.2-190.9q71.4-59.3 71.5-168.1c0-72.6-23.9-128.4-71.5-167.4q-71.5-58.5-209.6-58.5h-246.9v453.3h246.9c92 0 161.9-19.7 209.6-59.3zm-199.9 233.1h-256.6v297.4h509.1l-208.6-299q-14.6 1.7-43.9 1.6z"
              />
            </svg>
            Razels
          </Link>
          <div className="text-center space-y-1">
            <h2 className="text-2xl font-medium dark:text-white text-black">
              {heading}
            </h2>
            <p>{des}</p>
          </div>
          {children}
        </form>
      </>
    );
  };
  
  export default Form;
  