import React from 'react'
import './styles.scss'

interface AnimatedLettersProps {
  str: string;
  LetterClass: string;
}

const AnimatedLetters: React.FC<AnimatedLettersProps> = ({ str, LetterClass }) => {
  const characters = Array.from(str)

  return (
    <h1>
      {characters.map((char: string, i : number) => (
        <span
          key={char + i}
          className={`${LetterClass} _${i}`}
          style={{
            marginRight: char === ' ' ? '0.5rem' : 0,
          }}
        >
          {char}
        </span>
      ))}
    </h1>
  )
}

export default AnimatedLetters
