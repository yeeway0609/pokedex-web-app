import { TypeColor } from '@/utils/TypeColor';

export default function TypeFilterButton({ type, onClick }) {
  return (
    <div
      className={`flex h-11 w-full items-center justify-center rounded-[50px] ${TypeColor[type][1]} ${TypeColor[type][2]}`}
      onClick={onClick}
    >
      <p className="font-Bold text-sm">{type}</p>
    </div>
  );
}
