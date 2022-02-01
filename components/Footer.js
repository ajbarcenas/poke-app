import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 bg-slate-500 w-full h-20">
      <div className="flex flex-col justify-around items-center">
        <h1 className="text-slate-300 font-light">
          Created by Alexisis Barcenas
        </h1>
        <h1 className="text-slate-300 font-light">
          Pokemon Info grabbed from pokeapi.co
        </h1>
        <a href="https://pokeapi.co" className="text-slate-300 underline">
          PokeApi.co
        </a>
      </div>
    </footer>
  );
};

export default Footer;
