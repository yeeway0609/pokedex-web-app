import { TypeColor } from "@/utils/TypeColor";

export default function TypeBadge({ type, fullWidth = false }) {
  const typeIcon = new URL(`../../img/type/${type}_1.svg`, import.meta.url).href

  return (
    <div className={`mr-1 flex h-fit w-fit items-center rounded-[25px] px-[6px] ${TypeColor[type][1]} ${fullWidth ? 'w-full' : ''} ${fullWidth ? 'justify-center' : ''}`}>
      <div className="my-1 flex h-[20px] w-[20px] items-center justify-center rounded-[50%] bg-white">
        <img src={typeIcon} className="h-[60%] w-[60%]" />
      </div>
      <p className={`ml-1 mr-1 align-middle text-xs ${TypeColor[type][2]}`}>
        {type}
      </p>
    </div>
  );
}
