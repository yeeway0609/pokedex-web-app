import Header from "@/components/Header";
import LogInButton from "@/components/LogInButton";
import firebase from '@/utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Profile() {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  return (
    <div className="h-full">
      <Header>
        {user ? (
          <>
            <img className="h-10 w-10 rounded-full bg-blue-1" src={user.photoURL} alt="user photo" />
            <p className="ml-3 font-Bold">{user.displayName}</p>
          </>
        ) : (
          <LogInButton />
        )}
      </Header>
      <div className="page-scrolling">
        {user ? (
          <Section>
            <p className="mb-4 font-Bold text-lg">Accoount Information</p>
            <div className="mb-4">
              <p className="font-Bold text-sm text-gray-3">Name</p>
              <p className="text-sm text-gray-2">{user.displayName}</p>
            </div>
            <div className="mb-4">
              <p className="font-Bold text-sm text-gray-3">Email</p>
              <p className="text-sm text-gray-2">{user.email}</p>
            </div>
            <div className="mb-4">
              <p className="font-Bold text-sm text-gray-3">Password</p>
              <p className="text-sm text-gray-2">••••••••••••••••</p>
            </div>
          </Section>
        ) : (
          <></>
        )}
        <Section>
          <p className="mb-4 font-Bold text-lg">Pokédex</p>
          <div className="mb-4">
            <p className="font-Bold text-sm text-gray-3">Mega evolution</p>
            <p className="text-sm text-gray-2">Enables the display of mega evolution.</p>
          </div>
          <div className="mb-4">
            <p className="font-Bold text-sm text-gray-3">Other Form</p>
            <p className="text-sm text-gray-2">Enables the display of alternative Pokémon forms.</p>
          </div>
        </Section>
        <Section>
          <p className="mb-4 font-Bold text-lg">Language</p>
          <div className="mb-4">
            <p className="font-Bold text-sm text-gray-3">Interface</p>
            <p className="text-sm text-gray-2">UPortuguês (PT-BR)</p>
          </div>
          <div className="mb-4">
            <p className="font-Bold text-sm text-gray-3">Information in game</p>
            <p className="text-sm text-gray-2">English (US)</p>
          </div>
        </Section>
        <Section>
          <p className="mb-4 font-Bold text-lg">General</p>
          <div className="mb-4">
            <p className="font-Bold text-sm text-gray-3">Version</p>
            <p className="text-sm text-gray-2">0.8.12</p>
          </div>
          <div className="mb-4">
            <p className="font-Bold text-sm text-gray-3">Terms and Conditions</p>
            <p className="text-sm text-gray-2">Everything you need to know.</p>
          </div>
          <div className="mb-4">
            <p className="font-Bold text-sm text-gray-3">Help Center</p>
            <p className="text-sm text-gray-2">Need help? Contact us.</p>
          </div>
          <div className="mb-4">
            <p className="font-Bold text-sm text-gray-3">About</p>
            <p className="text-sm text-gray-2">More about the app.</p>
          </div>
        </Section>

        {user ? (
          <Section>
            <p className="mb-4 font-Bold text-lg">Other</p>
            <div className="mb-4 cursor-pointer">
              <p className="font-Bold text-sm text-red" onClick={() => auth.signOut()}>Log out</p>
              <p className="text-sm text-gray-2">You are logged in as UserName.</p>
            </div>
          </Section>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

const Section = ({children}) => {
  return (
    <div className="mb-4">{children}</div>
  )
}