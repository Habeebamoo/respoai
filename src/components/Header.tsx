import { FaMoon, FaSun } from "react-icons/fa"
import { useTheme } from "../context/ThemeContext"

export default function Header() {
  const { theme, setTheme } = useTheme()

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  const iconTheme = theme === "light" ? "black" : "white"
  const light = theme == "light"

  return (
    <header style={{ backgroundColor: light ? "#fff" : "#444", borderBottom: light ? "1px solid rgb(207, 204, 204)" : "" }} className="text-black dark:text-white fixed p-3 flex justify-between items-center top-0 left-0 right-0">
      <h3 className="text-3xl" style={{ color: theme == "light" ? "black" : "white"}}>Respo AI</h3>
      <div className="cursor-pointer" onClick={handleTheme}>
        {theme == "light" ? <FaMoon size={20} color={iconTheme} /> : <FaSun size={20} color={iconTheme} />}
      </div>
    </header>
  )
}
