export default function SortingButton({ order, onClick }) {
  return (
    <div
      className={`flex h-11 w-full items-center justify-center rounded-[50px] bg-gray-3 text-white`}
      onClick={onClick}
    >
      <p className="font-Bold text-sm">{order}</p>
    </div>
  );
}
