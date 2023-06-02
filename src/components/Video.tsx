import Image from "next/image";
import Link from "next/link";

export function Video({ coverImage, profileImage, nameChanel }: any) {
  return (
    <Link href="/channel" className="flex flex-col max-w-[276px] max-h-[155px] mr-4">
      <Image src={coverImage} className="w-[276px] h-[155px]" alt="Cover Image" />
      <div className="flex flex-row">
        <div className="w-12 h-[74px] flex items-center">
          <Image src={profileImage} className="w-9 h-9 rounded-full" alt="Profile Image" />
        </div>
        <div className="flex flex-col max-w-[204px] max-h-[74px] pt-[11px]">
          <h1 className="text-xs font-bold text-white">
            Lorem ipsum dolor sit amet, consecte adipiscing elit.
          </h1>
          <div className="mt-[1px]">
            <p className="text-xs text-[#AAAAAA]">{nameChanel}</p>
            <p className="text-xs text-[#AAAAAA]">15K Views .1 week ago</p>
          </div>
        </div>
      </div>
    </Link>
  )
}