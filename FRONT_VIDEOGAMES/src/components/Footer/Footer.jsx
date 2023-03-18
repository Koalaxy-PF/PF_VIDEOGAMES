import icons from "../../assets/footer/icons.js";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-50 dark:bg-gray-400">
      <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">

        <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
			    <Link to={"/Store"}><li>Tienda</li></Link>
          <Link to={"/AboutUs"}><li>¿Quiénes Somos?</li></Link>
          <Link to={"/QA"}><li>Preguntas Frecuentes</li></Link>
        </ul>

        <div className="flex flex-col justify-center pt-6 lg:pt-0">
          <div className="flex justify-center space-x-4">
            <a
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/message/XRV2T4B3QFT5P1?autoload=1&app_absent=0"
              title="Instagram"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-violet-400 text-gray-900"
            >
              <img src={icons.img1} alt="" />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.youtube.com/@koalaxystore"
              title="Pinterest"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-violet-400 text-gray-900"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                  fill="#FF0000"
                />
                <path
                  d="M36.265 18.0732C35.9706 16.9422 35.1031 16.0516 34.0016 15.7493C32.0054 15.2 24 15.2 24 15.2C24 15.2 15.9946 15.2 13.9983 15.7493C12.8967 16.0516 12.0292 16.9422 11.7348 18.0732C11.2 20.1231 11.2 24.4 11.2 24.4C11.2 24.4 11.2 28.6768 11.7348 30.7268C12.0292 31.8578 12.8967 32.7484 13.9983 33.0508C15.9946 33.6 24 33.6 24 33.6C24 33.6 32.0054 33.6 34.0016 33.0508C35.1031 32.7484 35.9706 31.8578 36.265 30.7268C36.8 28.6768 36.8 24.4 36.8 24.4C36.8 24.4 36.8 20.1231 36.265 18.0732Z"
                  fill="white"
                />
                <path
                  d="M21.6 28.8V20.8L28 24.8001L21.6 28.8Z"
                  fill="#FF0000"
                />
              </svg>
            </a>

            <a
              rel="noopener noreferrer"
              href="https://www.instagram.com/koalaxy_store/?igshid=YmMyMTA2M2Y%3D"
              title="Facebook"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-violet-400 text-gray-900"
            >
              <img src={icons.img2} alt="" />
            </a>

            <a
              rel="noopener noreferrer"
              href="https://www.facebook.com/profile.php?id=100090899347396&mibextid=ZbWKwL"
              title="Gmail"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-violet-400 text-gray-900"
            >
              <img src={icons.img3} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
