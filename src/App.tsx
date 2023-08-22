import { useMemo, useState } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'
import { pronouns } from './data/pronouns'
import { getLongestWord } from './utils'

const App = () => {
  const [text, setText] = useState<string>('')

  const stats = useMemo(() => {
    const wordMatch = text.match(/\S+/g) || []
    const words = wordMatch.length || 0
    const characters = text.length
    const paragraphMatch = text.match(/[\w|)][.?!](\s|$)/g)
    const sentences = paragraphMatch ? paragraphMatch.length : 0

    const WPM = 225
    const time = Math.ceil(words / WPM)

    const paragraphs = text.split(/[\r\n]+/).filter((str) => !!str.trim()).length

    const pronounsCount = wordMatch
      .map((str) =>
        str
          .trim()
          .toLowerCase()
          .replace(/[^a-zA-Z0-9 ]/g, '')
      )
      .filter((str) => pronouns.includes(str)).length

    return {
      words,
      characters,
      sentences,
      paragraphs,
      longestWord: getLongestWord(text),
      averageReadTime: time,
      pronouns: pronounsCount,
    }
  }, [text])

  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox
            words={stats.words}
            characters={stats.characters}
            sentences={stats.sentences}
            paragraphs={stats.paragraphs}
            pronouns={stats.pronouns}
          />
          <TextArea setText={setText} />
          <BottomResultBox
            averageReadTime={stats.averageReadTime}
            longestWord={stats.longestWord}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
