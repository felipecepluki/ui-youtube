import Tags from "./Tags";
import LeftBottom from "../assets/icons/leftBottom.svg";
import Image from "next/image";

export default function Videos() {
  return (
    <div className="w-screen overflow-hidden">
      <div className="flex w-screen h-[58px] bg-[#212121] items-center justify-between">
        <Tags title="All" />
        <Tags title="Item" />
        <Tags title="Item" />
        <Tags title="Item" />
        <Tags title="Item" />
        <Tags title="Item" />
        <Tags title="Item" />
        <Tags title="Item" />
        <Tags title="Item" />
        <Tags title="Item" />
        <Tags title="Item" />
        <Tags title="Item" />
        <Tags title="Item" />
        <Tags title="Item" />
        <Tags title="Item" />
        <Tags title="Item" />
        <Tags title="Item" />
        <button className="absolute z-10 right-0 w-14 h-14 bg-[#212121] opacity-90">
          <Image src={LeftBottom} alt="Left Bottom Icon" />
        </button>
      </div>
    </div>
  );
}
