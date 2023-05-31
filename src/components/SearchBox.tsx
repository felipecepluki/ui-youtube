import Image from "next/image";
import Search from "../assets/icons/search.svg";
import Mic from "../assets/icons/mic.svg";

export default function SearchBox() {
  return (
    <div className="w-[470px] flex flex-row">
      <div className="flex flex-row w-[426px] h-10 border-2 border-[#303030]">
        <input
          className="w-[362px] bg-[#121212] outline-none text-white flex h-full items-center justify-start px-[2px] py-[6px] placeholder:text-[#AAAAAA]"
          placeholder="Search"
        ></input>
        <button className="bg-[#303030] w-16 h-full flex items-center justify-center">
          <Image src={Search} alt="Search Icon" />
        </button>
      </div>
      <button className="rounded-full w-10 h-10 bg-black p-2 ml-1">
        <Image src={Mic} alt="Mic Icon" />
      </button>
    </div>
  );
}
