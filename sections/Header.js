import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useSession, signIn } from "next-auth/react";

import Logo from "../components/logo";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // for signing use this hook below
  const { session, loading } = useSession();

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <header className="border-b border-gray-100 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Logo />

        <div className="flex items-center space-x-3">
          {renderThemeChanger()}

          {!loading ? (
            <div>
              {!session ? (
                <button
                  type="button"
                  onClick={signIn}
                  className="bg-blue-600 hover:bg-blue-700
              text-white px-4 py-2 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-600
              focus:ring-opacity-50 whitespace-nowrap"
                >
                  Sign in
                </button>
              ) : (
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <img
                    src={session.user.image}
                    alt={session.user.name}
                    className="rounded-full border-2 border-blue-600 w-8 h-8"
                  />
                  {/* the sentence below means that if there is a user name split and display the value,
                  else display default value */}
                  <p>Hello, {session.user.name?.split(" ")?.[0] ?? "there"}</p>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;
