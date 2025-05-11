import React from "react";
import { FaArrowUp } from "react-icons/fa"

interface PropsType {
  setPrompt: React.Dispatch<React.SetStateAction<string>>,
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function InputContainer({ setPrompt, handleSubmit }: PropsType) {
  return (
    <>
      <form onSubmit={handleSubmit} className="fixed bottom-0 left-0 right-0 py-3 bg-[#444] rounded-t-xl">
        <div className="w-[95%] sm:w-[400px] mx-auto p-2 flex justify-between items-end">
            <textarea 
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPrompt(e.target.value)} 
              className="p-2 text-white w-[90%] border-none focus:bg-transparent focus:ring-0 focus:outline-none resize-none overflow-auto min-h-[2rem] placeholder-white" 
              placeholder="What's on your mind?" 
              aria-label="What's on your mind?" 
              rows={1}
              aria-describedby="div-addon2" 
              name="message">
            </textarea>   
            <button className="ml-3" type="submit">
              <div className="bg-white flex justify-center items-center h-8 w-8 rounded-full">
                <FaArrowUp />
              </div>
            </button>
        </div>
      </form>
    </>
  )
}