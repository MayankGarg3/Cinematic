
import { Button } from "../Components/Button";
import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/404_error_checking_FI.png"
import { useEffect } from "react";
export const PageNotFound = () => {

  useEffect(() => {
    document.title = `Page Not Found / Cinematic World`;
  })

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center ">
          <p className="text-7xl text-gray-700 font-bold my-5 dark:text-white italic"> 404 OOPs!</p>
          <div className="max-w-2xl">
          <img className="rounded" src={PageNotFoundImage} alt="404 Page Not Found" />
          </div>
          
        </div>
        <div className="flex justify-center my-4">
          <Link to= "/" >
          <Button>Welcome to the world of Cinema</Button>
          </Link>
          

        </div>
      </section>
    </main>
  )
}
