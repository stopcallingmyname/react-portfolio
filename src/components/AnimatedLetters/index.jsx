import './styles.scss'

const AnimatedLetters = ({ str, letterClass }) => {
  const characters = Array.from(str)

  return (
    <h1>
      {characters.map((char, i) => (
        <span
          key={char + i}
          className={`${letterClass} _${i}`}
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
