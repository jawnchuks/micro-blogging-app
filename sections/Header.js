import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Logo from "../components/logo";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme;
  const [mounted, setMounted] = useState(false);

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

        {renderThemeChanger()}
      </div>
    </header>
  );
};

export default Header;
