import { Link } from "react-router-dom"

const BodyPage = () => {
  return (
    <div className="flex flex-col gap-6 py-20 justify-center items-center text-center">
      <p className="font-bold text-6xl md:text-7xl">404 Not Found</p>
      <p className="text-sm text-gray-500">Your visited page not found. You may go home page.</p>
      <Link
        to="/"
        className="text-white bg-red-600 hover:bg-red-700 py-3 px-8 rounded-md mt-6"
      >
        Back to home page
      </Link>
    </div>
  )
}

export default BodyPage