export default function TypeButton ({type, bgColor, textColor="text-[#000000]"}) {
  return (
    <div className={`flex h-11 w-36 items-center justify-center rounded-[49px] ${textColor} ${bgColor}`}>
      <p className="text-sm">{type}</p>
    </div>
  );
};