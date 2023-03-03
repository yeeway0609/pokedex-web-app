export default function OrderListButton ({order}) {
  return (
    <div className={`flex h-11 w-full items-center justify-center rounded-[49px] bg-gray-3 text-white`}>
      <p className="text-sm">{order}</p>
    </div>
  );
};