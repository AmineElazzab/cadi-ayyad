import propose from "../assets/propos.png";
import React from "react";

const Prop: React.FC = () => {
  return (
    <div className="text-gray-900 pt-12 pr-0 pb-14 pl-0 w-full ">
      <div
        className="flex  mr-20 ml-20  space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-full
    "
      >
        <div className="flex flex-col items-center sm:px-5 md:flex-row w-screen justify-between">
          <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
            <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16 md:space-y-5">
              <div className="pt-2 pr-0 pb-0 pl-0">
                <p className="font-inter text-base font-semibold leading-6 tracking-wider text-left text-amber-800">
                  CENTER DE DOCUMENTATION
                </p>
              </div>
              <a className="text-4xl font-bold leading-none lg:text-5xl xl:text-5xl">
                Le Monde des Connaissances à votre Portée
              </a>
              <div className="pt-2 pr-0 pb-0 pl-0 max-w-[574.23px]">
                <p className="text-base font-medium inline">
                  Que vous soyez étudiant, chercheur, professionnel ou
                  simplement curieux, notre portail regorge de ressources
                  précieuses pour vous accompagner dans vos explorations
                  intellectuelles.
                </p>
              </div>
              <div className="max-w-[574.23px]">
                <p className="text-base font-medium inline ">
                  Nous avons rassemblé une vaste collection de documents
                  provenant de divers domaines tels que les sciences, les arts,
                  l'histoire, la technologie, la littérature, et bien d'autres
                  encore. Vous y trouverez des articles, des livres, des études,
                  des vidéos et des images soigneusement sélectionnés pour leur
                  qualité et leur pertinence.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#A5541C]  ">
            <div className="block translate-x-5 -translate-y-5 ">
              <img
                src={propose}
                className="object-cover max-h-64 sm:max-h-96 btn- w-[800px] h-[450px] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prop;
