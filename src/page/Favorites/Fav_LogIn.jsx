import Magikarp_Jump from '@/img/others/Magikarp_Jump.png'

export default function Fav_LogIn() {
  return (
    <>
      <img className="mb-4" src={Magikarp_Jump} />
      <p className="mb-4 px-12 text-center font-Bold text-xl text-gray-3">
        You haven't favorited any Pokémon :(
      </p>
      <p className="mb-4 text-center text-gray-2">
        Click on the heart icon of your favor ite Pokémons and they will appear here.
      </p>
    </>
  );
}