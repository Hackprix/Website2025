'use client'

import { Toggle } from "@/components/ui/toggle"
import { useTheme } from "next-themes"
import { FaMoon, FaSun } from "react-icons/fa"

export function ThemeToggle() {
    const {theme, setTheme} = useTheme();
  return (
    <Toggle variant="default" size="sm" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} >
        <FaSun className="absolute w-4 h-4 md:h-8 md:w-8 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 text-yellow-300"/>
        <FaMoon className="absolute w-4 h-4 md:h-8 md:w-8 rotate-90 scale-0 dark:rotate-0 dark:scale-100 text-yellow-300"/>
    </Toggle>

)
}