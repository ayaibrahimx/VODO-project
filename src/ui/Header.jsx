import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

function Header() {
  const [isBurgerMenuClicked, setIsBurgerMenuClicked] = useState(false);

  const handleOnClick = () => {
    setIsBurgerMenuClicked((b) => !b);
  };

  return (
    <nav className="flex items-center justify-between bg-neutral-950 py-3">
      <h1 className="mx-8 cursor-pointer text-2xl text-[#e50914]">Movies</h1>

      <div className="mr-2 hidden gap-8 text-slate-100 md:flex">
        <h2 className="cursor-pointer hover:text-[#e50914]">Movies</h2>
        <h2 className="cursor-pointer hover:text-[#e50914]">Series</h2>
        <h2 className="cursor-pointer hover:text-[#e50914]">Documentaries</h2>
        <input
          type="text"
          placeholder="Search..."
          className="my-auto rounded-lg border-none bg-neutral-300 px-2 outline-none"
        />
      </div>

      <div className="md:hidden">
        <GiHamburgerMenu
          className="mr-5 cursor-pointer text-slate-100 hover:text-[#e50914]"
          onClick={handleOnClick}
        />
      </div>

      {isBurgerMenuClicked && (
        <div className="  flex w-full flex-col gap-8 bg-neutral-950 px-8 py-4 text-slate-100 transition-all duration-300 md:hidden">
          <h2 className="cursor-pointer hover:text-[#e50914]">Series</h2>
          <h2 className="cursor-pointer hover:text-[#e50914]">Movies</h2>
          <h2 className="cursor-pointer hover:text-[#e50914]">Documentaries</h2>
          <input
            type="text"
            placeholder="Search..."
            className=" rounded-lg border-none bg-neutral-300 px-2 outline-none"
          />
        </div>
      )}
    </nav>
  );
}

export default Header;
