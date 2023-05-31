import Hamburguer from "../assets/icons/hamburger.svg";
import Logo from "../assets/icons/Logo.svg";
import SearchBox from "./SearchBox";
import Live from "../assets/icons/create.svg";
import Apps from "../assets/icons/Apps.svg";
import Notification from "../assets/icons/notifications.svg";
import Profile from "../assets/icons/Profile.svg";
import Image from "next/image";

export default function Navigation() {
  return (
    <div className="w-full h-14 bg-[#212121] border-b-2 border-b-[#303030] flex justify-between items-center p-4">
      <div className="flex flex-row">
        <Image src={Hamburguer} className="" alt="Menu Icon" />
        <Image src={Logo} className="" alt="Youtube Logo " />
      </div>
      <SearchBox />
      <div className="w-[204px] py-2 flex flex-row">
        <Image src={Live} alt="Icon" />
        <Image src={Apps} alt="Icon" />
        <Image src={Notification} alt="Ico" />
        <Image src={Profile} alt="Icon" />
      </div>
    </div>
  );
}
