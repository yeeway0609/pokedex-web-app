import pokedex_1 from './pokedex_1.svg';
import pokedex_2 from './pokedex_2.svg';
import regions_1 from './regions_1.svg';
import regions_2 from './regions_2.svg';
import favorites_1 from './favorites_1.svg';
import favorites_2 from './favorites_2.svg';
import profile_1 from './profile_1.svg';
import profile_2 from './profile_2.svg';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const location = useLocation();

  return (
    <div className="absolute bottom-0 flex h-[72px] w-full justify-around border-t-2 border-t-gray-1 bg-white">
      <div className="flex items-center justify-center">
        <Link to="/pokedex">
          <div className="flex w-[50px] flex-col">
            {location.pathname === '/pokedex' ? (
              <>
                <img src={pokedex_1} className="h-6" />
                <p className="text-xs text-blue-1">Pokedéx</p>
              </>
            ) : (
              <img src={pokedex_2} className="h-6" />
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <Link to="/regions">
          <div className="flex w-[50px] flex-col">
            {location.pathname === '/regions' ? (
              <>
                <img src={regions_1} className="h-6" />
                <p className="text-xs text-blue-1">Regions</p>
              </>
            ) : (
              <img src={regions_2} className="h-6" />
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <Link to="/favorites">
          <div className="flex w-[50px] flex-col">
            {location.pathname === '/favorites' ? (
              <>
                <img src={favorites_1} className="h-6" />
                <p className="text-xs text-blue-1">Favorites</p>
              </>
            ) : (
              <img src={favorites_2} className="h-6" />
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <Link to="/profile">
          <div className="flex w-[50px] flex-col">
            {location.pathname === '/profile' ? (
              <>
                <img src={profile_1} className="h-6" />
                <p className="text-xs text-blue-1">Profile</p>
              </>
            ) : (
              <img src={profile_2} className="h-6" />
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}
