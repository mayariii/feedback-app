import React from "react"
import { useState } from "react"
import FeedbackData from "./data/FeedbackData"
import Header from "./components/Header.tsx"
import FeedbackList from "./components/FeedbackList.tsx"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList feedback={feedback} />
      </div>
    </>
  )
}

export default App
