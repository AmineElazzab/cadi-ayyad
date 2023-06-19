import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="flex items-center">
      <section
        className="bg-cover bg-center py-24 w-full"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('https://mednet.ma/wp-content/uploads/2022/08/AF1QipMUFhal3s0bEuJjw71xwGGuT3XPIQLI7JAXi2p0w1600-h1000-k-no.jpeg')",
        }}
      >
        <div className="container pl-14 text-left text-white">
          <div className="flex items-center">
            <div className="w-2/3">
              <h1 className="text-5xl font-medium mb-6">
                "Explorez notre portail documentaire. Découvrez, apprenez et
                partagez des connaissances"
              </h1>
              <p className="text-lg mb-12 w-2/3">
                Bienvenue sur notre portail documentaire ! Notre mission est de
                vous offrir un espace de découverte, d'apprentissage et de
                partage des connaissances.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
