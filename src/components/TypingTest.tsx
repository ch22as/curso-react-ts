import { useState, useEffect, useRef } from "react"
import { wordsArray, totalTime } from "../assets/constants"

let timeInterval: number

const getRandonWord = () => {
  const randonId = Math.floor(Math.random() * wordsArray.length)
  return wordsArray[randonId]
}

const TypingTest = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [currentWord, setCurrentWord] = useState< string | null >(null)
  const [typeWord, setTypeWord] = useState("")
  const [correctWords, setCorrecWords] = useState< string[] >([])
  const [inCorrectWords, setIncorrecWords] = useState< string[] >([])
  const [timeLeft, setTimeLeft] = useState< number | null>(null)

  // const [wordState, setWordState] = useState(
  //   {
  //     currentWord: null,
  //     correctWords: [],
  //     inCorrectWords: [],
  //   }
  // )
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if(!isRunning) return
    if(!timeLeft) return
    if(timeLeft > 0) return

    endGame()
  }, [timeLeft, isRunning])

  useEffect(() => {
    if(!isRunning) return

    timeInterval = setInterval(() => {
      setTimeLeft(time => {
        return time! - 1
      })
    }, 1000)

    return () => {
      clearInterval(timeInterval)
    }

  }, [isRunning])

  useEffect(() => {
    if(!isRunning) return
    if(!inputRef.current) return

    inputRef.current.focus()
  }, [isRunning, inputRef])

  const startGame = () => {
    setIsRunning(true)
    setCurrentWord(getRandonWord())
    setTimeLeft(totalTime)
    setCorrecWords([])
    setIncorrecWords([])

    // if(!inputRef.current) return
    // inputRef!.current.focus()
  }

  const endGame = () => {
    setIsRunning(false)
    setTypeWord("")
    setCurrentWord(null)
    clearInterval(timeInterval)

    alert(`Enhorabuena! has accertado ${correctWords.length}`)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
   // If the user press Enter check
   if (e.key !== 'Enter') return
   if (!currentWord) return

  //  console.log(typeWord)
  //  console.log(getRandonWord())

    if (typeWord === currentWord){
      setCorrecWords(words => [...words, currentWord])
    }else{
      setIncorrecWords(words => [...words, currentWord])
    }
    setTypeWord("")
    setCurrentWord(getRandonWord())
  }


  return (
    <div style={{ display: 'grid', placeContent: 'center', padding: "1rem" }}>
      <h1>TypingTest</h1>
      {isRunning ? (
        <>
          <p>Tiempo restante {timeLeft}s </p>
          <p>{currentWord}</p>
          <input
            type={isRunning ? "text" : "hidden"}
            ref={inputRef}
            value={typeWord}
            onChange={(e) => { setTypeWord(e.target.value) }}
            onKeyDown={handleKeyDown}
          />
          <p>Palabras correctas: {correctWords.length}</p>
          <p>Palabras incorrectas: {inCorrectWords.length}</p>
        </>
      ) : (
        <button onClick={startGame}>Empezar</button>
      )}
    </div>
  )
}

export default TypingTest
