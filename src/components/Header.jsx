export default function Header({ children }) {
  return (
    <div className="flex h-20 w-full items-center border-b-2 border-b-gray-1 px-4 py-5 font-Bold">
      {children}
    </div>
  );
}
