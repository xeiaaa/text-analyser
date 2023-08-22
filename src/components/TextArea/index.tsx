import './index.scss'

interface TextAreaProps {
  setText: React.Dispatch<React.SetStateAction<string>>
}

const TextArea = ({ setText }: TextAreaProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value.trim())
  }
  return (
    <textarea className="text-area" placeholder="Paste your text here..." onChange={handleChange} />
  )
}

export default TextArea
