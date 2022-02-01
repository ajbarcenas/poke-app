import React from "react";
import Head from "next/head";
import Image from "next/image";
const Layout = ({ children }) => {
  return (
    <>
      <header className="flex justify-between items-center bg-rose-500 h-12">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-rose-300 m-4">Poke App</h1>
          <Image
            priority
            src="/images/pokeball.png"
            height={40}
            width={40}
            alt="pokeball icon"
            className="m-4 shadow-md"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold border-4 rounded text-rose-300 mr-4">
            PlaceHolder
          </h1>
        </div>
      </header>
      <main className="min-w-full min-h-full">{children}</main>
    </>
  );
};

export default Layout;
