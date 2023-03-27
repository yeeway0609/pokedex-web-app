import trainer12 from '@/img/trainers/trainer12.png';
import LogInButton from "@/components/LogInButton";

export default function Fav_NotLoggedIn() {
  return (
    <div className="flex flex-col">
      <img className="mb-4" src={trainer12} />
      <p className="mb-4 px-12 text-center font-Bold text-xl text-gray-3">
        You need to log in to an account to do this.
      </p>
      <p className="mb-4 text-center text-gray-2">
        To access this functionality, you need to log in or create an account. Do it now!
      </p>
      <LogInButton />
    </div>
  );
}
