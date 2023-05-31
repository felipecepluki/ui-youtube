import Tags from "./Tags";
import LeftBottom from "../assets/icons/leftBottom.svg";
import Image from "next/image";
import { Video } from "./Video";

// Video One
import CoverOne from "../assets/covers/CoverOne.svg";
import ProfileOne from "../assets/profiles/Icon-1.svg";
// Video Two
import CoverTwo from "../assets/covers/CoverTwo.svg";
import ProfileTwo from "../assets/profiles/Icon-2.svg";
// Video Three
import CoverThree from "../assets/covers/CoverThree.svg";
import ProfileThree from "../assets/profiles/Icon-3.svg";
// Video Four
import CoverFour from "../assets/covers/CoverFour.svg";
import ProfileFour from "../assets/profiles/Icon-4.svg";

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
      <div className="flex w-full h-full bg-black pt-[25px] pl-6">
        <div className="flex">
          <Video coverImage={CoverOne} profileImage={ProfileOne} nameChanel="James Gouse" />
          <Video coverImage={CoverTwo} profileImage={ProfileTwo} nameChanel="Alan Cooper" />
          <Video coverImage={CoverThree} profileImage={ProfileThree} nameChanel="Marcus Levin" />
          <Video coverImage={CoverFour} profileImage={ProfileFour} nameChanel="Alexis Sears" />
        </div>
      </div>
    </div>
  );
}
