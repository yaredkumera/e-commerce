import { Link } from "react-router-dom";

const BodyPage = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 py-12 sm:py-20 lg:py-28 px-4 justify-center items-center text-center max-w-4xl mx-auto my-4 sm:my-8">
      <h1 className="font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-text-primary">
        404 Not Found
      </h1>
      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-md">
        Your visited page not found. You may go home page.
      </p>
      <Link
        to="/"
        className="text-white bg-[#DB4444] hover:bg-red-600 transition-colors py-3 px-6 sm:px-8 rounded-lg mt-4 sm:mt-6 text-xs sm:text-sm font-medium shadow-xs"
      >
        Back to home page
      </Link>
    </div>
  );
};

export default BodyPage;