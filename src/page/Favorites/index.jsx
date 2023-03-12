import Fav_NotLogIn from './Fav_NotLogIn';
import Fav_LogIn from './Fav_LogIn';

export default function Favorites() {
  return (
    <div className="h-full">
      <div className="page-title">
        Favorites
      </div>
      <div className="page-scrolling flex flex-col items-center justify-center px-4 pt-16">
        <Fav_LogIn />
      </div>
    </div>
  );
}
