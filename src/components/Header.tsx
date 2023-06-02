import Image from "next/image";
import Cover from "../assets/channel/Channel-Cover.svg";
import Profile from "../assets/profiles/Icon-3.svg";

export function Header() {
  return (
    <div className="w-full h-[340px] bg-[#181818]">
      <Image src={Cover} alt="Cover Image" className="bg-green-400 max-h-48 w-full" />
      <div className="flex flex-col mt-[34px] ml-[65px]">
        <div className="flex pt-0 pr-6 pb-0 pl-0">
          <div className="w-[104px] h-20">
          <Image src={Profile} alt="Profile Image" className="w-20 h-20" />
          </div>
          <div>
            <h1 className="text-white text-2xl">Marcus Levin</h1>
            <h2 className="text-sm text-[#AAAAAA]">1.2M subscribers</h2>
          </div>
        </div>
        <div className="flex flex-row py-0 px-[65px] w-full h-12">
          <h1>HOME</h1>
          <h1>VIDEOS</h1>
          <h1>PLAYLISTS</h1>
          <h1>COMMUNITY</h1>
          <h1>CHANNELS</h1>
          <h1>ABOUT</h1>
        </div>
      </div>
    </div>
  )
}