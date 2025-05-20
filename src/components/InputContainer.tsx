import React from "react";
import { FaArrowUp } from "react-icons/fa"
import { useTheme } from "../context/ThemeContext";

interface PropsType {
  prompt: string,
  setPrompt: React.Dispatch<React.SetStateAction<string>>,
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function InputContainer({ prompt, setPrompt, handleSubmit }: PropsType) {
  const { theme } = useTheme()

  const iconTheme = theme === "light" ? "white" : "black"
  const light = theme == "light"

  return (
    <>
      <form onSubmit={handleSubmit} style={{ backgroundColor: theme == "light" ? "#fff" : "#444", borderTop: light ? "1px solid rgb(207, 204, 204)" : "" }} className="fixed bottom-0 left-0 right-0 py-3 rounded-t-xl">
        <div className="w-[95%] sm:w-[400px] mx-auto p-2 flex justify-between items-end">
            <textarea 
              value={prompt}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPrompt(e.target.value)} 
              style={{ color: theme == "light" ? "#000" : "#fff" }}
              className="p-2 w-[90%] border-none focus:bg-transparent focus:ring-0 focus:outline-none resize-none overflow-auto min-h-[2rem] placeholder-black dark:placeholder-white" 
              placeholder="What's on your mind?" 
              aria-label="What's on your mind?" 
              rows={1}
              aria-describedby="div-addon2" 
              name="message">
            </textarea>   
            <button className="ml-3" type="submit">
              <div style={{ backgroundColor: theme == "light" ? "#000" : "#fff"}} className="flex justify-center items-center h-8 w-8 rounded-full">
                <FaArrowUp color={iconTheme} />
              </div>
            </button>
        </div>
      </form>
    </>
  )
}