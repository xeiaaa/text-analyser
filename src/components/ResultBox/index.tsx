import './index.scss'

interface ResultBoxProps {
  words: number
  characters: number
  sentences: number
  paragraphs: number
  pronouns: number
}

const ResultBox = ({ words, characters, sentences, paragraphs, pronouns }: ResultBoxProps) => {
  const resultBar = [
    {
      title: 'Words',
      value: words,
    },
    {
      title: 'Characters',
      value: characters,
    },
    {
      title: 'Sentences',
      value: sentences,
    },
    {
      title: 'Paragraphs ',
      value: paragraphs,
    },
    {
      title: 'Pronouns',
      value: pronouns,
    },
  ]

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
