import Image from "next/image";

export function SectionsSidebar({
  variable,
  variableFunctionEnter,
  variableFunctionLeave,
  iconOne,
  iconTwo,
  nameOfSection,
}: any) {
  return (
    <button
      className="w-56 h-10 items-center hover:bg-[#303030] transition-all flex flex-row pl-6"
      onMouseEnter={variableFunctionEnter}
      onMouseLeave={variableFunctionLeave}
    >
      {variable ? <Image src={iconOne} alt="Icon One" /> : <Image src={iconTwo} alt="Icon Two" />}
      <p className="font-roboto text-white text-sm pl-[10px]">
        {nameOfSection}
      </p>
    </button>
  );
}
