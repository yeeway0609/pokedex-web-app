import Header from '@/layout/header';
import Fav_NotLoggedIn from './Fav_NotLoggedIn';
import Fav_LoggedIn from './Fav_LoggedIn';

import firebase from '@/utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Favorites() {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  return (
    <div className="h-full" >
      <Header>
        Favorites
      </Header>
      <div className="page-scrolling">
        {user ? <Fav_LoggedIn /> : <Fav_NotLoggedIn />}
      </div>
    </div>
  );
}
