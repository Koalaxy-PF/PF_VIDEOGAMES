import icons from "../../assets/footer/icons.js";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-100 text-slate-900 dark:bg-[#17202A] dark:text-slate-100">
      <div className="container flex flex-col p-4 mx-auto md:p-2 lg:flex-row divide-gray-400">

        <ul className="self-center py-6  text-xl space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-8 lg:flex-1 lg:justify-start">
			    <Link to={"/Store"}><li className="hover:underline">Store</li></Link>
          <Link to={"/AboutUs"}><li className="hover:underline">About us</li></Link>
          <Link to={"/QA"}><li className="hover:underline">QA</li></Link>
        </ul>

        <div className="flex flex-col justify-center pt-6 lg:pt-0">
          <div className="flex justify-center space-x-4">

            <a
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/message/XRV2T4B3QFT5P1?autoload=1&app_absent=0"
              title="WhatsApp"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-violet-400 text-gray-900"
            >
              <img src={icons.img1} className="transform hover:scale-110 rounded-full shadow-xl shadow-slate-700" alt="" />
            </a>

            <a
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/message/XRV2T4B3QFT5P1?autoload=1&app_absent=0"
              title="Youtube"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-violet-400 text-gray-900"
            >
              <img src={icons.img2} className="transform hover:scale-110 rounded-full shadow-xl shadow-slate-700" alt="" />
            </a>

            <a
              rel="noopener noreferrer"
              href="https://www.instagram.com/koalaxy_store/?igshid=YmMyMTA2M2Y%3D"
              title="Facebook"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-violet-400 text-gray-900"
            >
              <img src={icons.img3} className="transform hover:scale-110 rounded-full shadow-xl shadow-slate-700" alt="" />
            </a>

            <a
              rel="noopener noreferrer"
              href="https://www.facebook.com/profile.php?id=100090899347396&mibextid=ZbWKwL"
              title="Gmail"
              className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-violet-400 text-gray-900"
            >
              <img src={icons.img4} className="transform hover:scale-110 rounded-full shadow-xl shadow-slate-700" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
