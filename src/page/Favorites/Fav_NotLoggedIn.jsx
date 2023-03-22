import trainer12 from '@/img/trainers/trainer12.png';

export default function Fav_NotLoggedIn() {
  return (
    <>
      <img className="mb-4" src={trainer12} />
      <p className="mb-4 px-12 text-center font-Bold text-xl text-gray-3">
        You need to log in to an account to do this.
      </p>
      <p className="mb-4 text-center text-gray-2">
        To access this functionality, you need to log in or create an account. Do it now!
      </p>
      <div className="flex h-[60px] w-full items-center justify-center rounded-[50px] border-2 border-blue-1 ">
        <p className="font-Bold text-lg text-blue-1">
          Log in or Register
        </p>
      </div>
    </>
  );
}
