import React from "react";
import { AiFillApple } from "react-icons/ai";
import { BiLogoPlayStore, BiDownload } from "react-icons/bi";

export default function Header() {
  return (
    <div>
      <header>
        <div className="max-w-6xl mx-auto px-5 py-5 border-b-2">
          <div className="flex flex-col md:flex-row justify-between items-center py-4">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-20">
                <img src="logo180.png" alt="Logo" />
              </div>
            </div>
            <div className="flex items-center flex-col md:flex-row">
              <a
                href="https://apps.apple.com/app/best-taxi-meter/id1061329817"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full md:w-auto hover:bg-gray-700 hover:text-white text-gray font-bold py-2 px-4 rounded mb-2 md:mb-0 md:mr-2 border border-gray-700">
                  <AiFillApple className="w-6 h-6 mr-2 inline" />
                  Download from App Store
                </button>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.welcomemanchester.btmPlus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full md:w-auto hover:bg-gray-700 hover:text-white text-gray font-bold py-2 px-4 rounded mt-2 md:mt-0 md:ml-0 border border-gray-700">
                  <BiLogoPlayStore className="w-6 h-6 mr-2 inline" />
                  Download from Play Store
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
