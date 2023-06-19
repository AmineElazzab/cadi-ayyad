import image from "../assets/image.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import cadi from "../assets/cadi.png";
import React from "react";

const Card: React.FC = () => {
  return (
    <div className="flex  items-center justify-center min-h-screen py-2 bg-[#F5F5F5]">
      <div className="relative mx-auto w-[300px] max-w-sm  bg-white ">
        <div className="rounded-lg">
          <div className="relative flex h-60 justify-center overflow-hidden rounded-lg">
            <div className="w-full">
              <img
                src={image}
                alt=""
                className="absolute inset-0 object-cover w-full h-full"
              />
              <div className="absolute mt-5 ml-5 mb-3 flex justify-center ">
                <div className="flex space-x-5 overflow-hidden  bg-[#A5541C] px-4 py-1 shadow">
                  <p className="flex items-center text-sm text-white">
                    FEATURED
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divide-y">
          <div className="px-8 py-5">
            <h3 className="text-lg font-semibold mb-2">
              Accueil cadi ayyad participe à la 7ème édition de la caravane .
            </h3>
            <p className="-500 mb-2">
              It is a long established fact that a reader will be distracted.
            </p>
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 mt-2 text-sm font-medium text-white bg-[#A5541C] border border-transparent shadow-sm hover:bg-[#A5541C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A5541C]"
            >
              Lire la suite
              <ArrowForwardIcon
                className="
              ml-2
              w-4
              h-4
              fontSize small
              "
              />
            </button>
          </div>
          <div className="px-8 py-5 flex justify-between">
            <h3 className="text-lg font-semibold mb-2">Publier par :</h3>
            <div className="flex items-center">
              <div className="flex items-center">
                <img src={cadi} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
