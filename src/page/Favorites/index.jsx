import { useContext } from "react";
import { LogInContext } from "@/context/LogInContext";
import Header from '@/layout/header';
import Fav_NotLoggedIn from './Fav_NotLoggedIn';
import Fav_LoggedIn from './Fav_LoggedIn';

export default function Favorites() {
  const isLoggedIn = useContext(LogInContext);

  return (
    <div className="h-full">
      <Header>
        Favorites
      </Header>
      {isLoggedIn ? (
        <Fav_LoggedIn />
      ) : (
        <Fav_NotLoggedIn />
      )}
    </div>
  );
}
