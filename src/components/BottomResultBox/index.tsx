import './index.scss'

interface BottomResultBoxProps {
  averageReadTime: number
  longestWord: string
}

const BottomResultBox = ({ averageReadTime, longestWord }: BottomResultBoxProps) => {
  const bottomResultBar = [
    {
      title: 'Average Reading Time:',
      value: averageReadTime > 0 ? `~${averageReadTime} minute(s)` : '-',
    },
    {
      title: 'Longest word:',
      value: longestWord || '-',
    },
  ]

  return (
    <div className="bottom-result-bar">
      {bottomResultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default BottomResultBox
