export default function Tags({ title }: any) {
  return (
    <div className="bg-[#030303] cursor-pointer hover:bg-white hover:text-[#030303] rounded-[32px] flex items-center justify-center w-[53px] h-8 font-roboto font-normal text-[14px] text-white mr-3 my-3">
      {title}
    </div>
  );
}
