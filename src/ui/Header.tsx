import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header: React.FC<{}> = () => {
  const [isBurgerMenuClicked, setIsBurgerMenuClicked] =
    useState<boolean>(false);

  const handleOnClick = () => {
    setIsBurgerMenuClicked((prev) => !prev);
  };

  return (
    <nav className="absolute left-0 top-0 z-10 flex w-full items-center justify-between bg-neutral-950 py-3">
      <h1 className="mx-8 ml-4 cursor-pointer text-2xl text-[#e50914]">
        Movies
      </h1>

      <div className="ml-auto mr-10 hidden gap-8 text-slate-100 md:flex">
        <h2 className="cursor-pointer hover:text-[#e50914]">Movies</h2>
        <h2 className="cursor-pointer hover:text-[#e50914]">Series</h2>
        <h2 className="cursor-pointer hover:text-[#e50914]">Documentaries</h2>
      </div>

      <div className="md:hidden">
        <GiHamburgerMenu
          className="mr-5 cursor-pointer text-slate-100 hover:text-[#e50914]"
          onClick={handleOnClick}
        />
      </div>

      {isBurgerMenuClicked && (
        <div className="absolute left-0 top-full ml-auto flex w-full flex-col gap-8 bg-neutral-950 px-8 py-4 text-slate-100 transition-all duration-300 md:hidden">
          <h2 className="cursor-pointer hover:text-[#e50914]">Series</h2>
          <h2 className="cursor-pointer hover:text-[#e50914]">Movies</h2>
          <h2 className="cursor-pointer hover:text-[#e50914]">Documentaries</h2>
        </div>
      )}
    </nav>
  );
};

export default Header;
