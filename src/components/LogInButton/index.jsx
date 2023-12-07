import firebase from '@/utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
const auth = firebase.auth();

export default function LogInButton () {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div
      className="flex h-[60px] w-full items-center justify-center rounded-[50px] border-2 border-blue-1 cursor-pointer"
      onClick={signInWithGoogle}
    >
      <p className="font-Bold text-lg text-blue-1">Sign in with Google</p>
    </div>
  );
}