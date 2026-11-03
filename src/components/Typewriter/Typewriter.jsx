import { useEffect, useState } from 'react'

const TYPING_SPEED = 90
const DELETING_SPEED = 50
const PAUSE_DURATION = 1500

function Typewriter({ words }) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    const isWordComplete = text === currentWord

    let delay = isDeleting ? DELETING_SPEED : TYPING_SPEED
    if (!isDeleting && isWordComplete) delay = PAUSE_DURATION

    const timer = setTimeout(() => {
      if (!isDeleting && isWordComplete) {
        setIsDeleting(true)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setWordIndex((wordIndex + 1) % words.length)
      } else {
        const nextLength = text.length + (isDeleting ? -1 : 1)
        setText(currentWord.slice(0, nextLength))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, isDeleting, wordIndex, words])

  return (
    <span className="typewriter">
      {text}
      <span className="typewriter__cursor" aria-hidden="true">
        |
      </span>
    </span>
  )
}

export default Typewriter