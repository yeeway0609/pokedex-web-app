import { useContext } from "react";
import { LogInContext } from "@/context/LogInContext";

export default function LogInButton () {
  const { setIsLoggedIn } = useContext(LogInContext);

  return (
    <div
      className="flex h-[60px] w-full items-center justify-center rounded-[50px] border-2 border-blue-1 cursor-pointer"
      onClick={() => setIsLoggedIn(true)}
    >
      <p className="font-Bold text-lg text-blue-1">
        Log in or Register
      </p>
    </div>
  );
}