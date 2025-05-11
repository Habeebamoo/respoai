import React, { useState, useEffect, useRef } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ReactMarkdown from "react-markdown";
import Header from "./components/Header";
import getReply from "./data/ai";
import InputContainer from "./components/InputContainer";

type Message = {
  sender: "user" | "bot",
  content: string,
  markdown: boolean
}

const App = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [prompt, setPrompt] = useState<string>("")
  const messageSection = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    messageSection.current?.scrollIntoView(
      {behavior: "smooth", block: "end"}
    )
  }, [messages])

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMessages(prev => [
      ...prev,
      {sender: 'user', content: prompt, markdown: false}
    ]);
    
    displayReply(prompt);
  }
  
  const displayReply = async(prompt: string) => {
    const reply = await getReply(prompt);
    const isReply = reply ? reply : "**Monthly request limit exceeded.** Please come back later.";
    
    setMessages(prev => [...prev, {sender: 'bot', content: isReply, markdown: true}]);
    setPrompt("")
  }
  
  const messagesDiv = messages.map(obj => {
    return (
      <div className={`${obj.sender}-content`}>
        <span className="p-3 rounded mb-3">
          {obj.markdown ? 
            <ReactMarkdown>
              {obj.content}
            </ReactMarkdown>
          : <>
              {obj.content}
            </>
          }
        </span>
      </div>
    )
  })

  return (
    <main>
      <Header />
      <div ref={messageSection} className="mt-[60px] p-4 mb-[50px] sm:w-[90%] mx-auto">
        {messagesDiv}
      </div>
      <InputContainer setPrompt={setPrompt} handleSubmit={sendMessage} />
    </main>
  )
}

export default App

