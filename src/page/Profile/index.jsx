import { useContext } from "react";
import { LogInContext } from "@/context/LogInContext";
import Header from "@/layout/Header";
import LogInButton from "@/components/LogInButton";

export default function Profile() {
  const { isLoggedIn, setIsLoggedIn } = useContext(LogInContext);

  return (
    <div className="h-full">
      <Header>
        {isLoggedIn ? (
          <>
            <div className="h-10 w-10 rounded-full bg-blue-1"></div>
            <p className="ml-3 font-Bold">UserName</p>
          </>
        ) : (
          <LogInButton />
        )}
      </Header>
      <div className="page-scrolling">
        <Section>
          <p className="mb-4 font-Bold text-lg">Accoount Information</p>
          <div className="mb-4">
            <p className="font-Bold text-sm text-gray-3">Name</p>
            <p className="text-sm text-gray-2">UserName</p>
          </div>
          <div className="mb-4">
            <p className="font-Bold text-sm text-gray-3">Email</p>
            <p className="text-sm text-gray-2">example@gmail.com</p>
          </div>
          <div className="mb-4">
            <p className="font-Bold text-sm text-gray-3">Password</p>
            <p className="text-sm text-gray-2">••••••••••••••••</p>
          </div>
        </Section>
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
        {isLoggedIn ? (
          <Section>
            <p className="mb-4 font-Bold text-lg">Other</p>
            <div className="mb-4">
              <p className="font-Bold text-sm text-red" onClick={() => setIsLoggedIn(false)}>Log out</p>
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