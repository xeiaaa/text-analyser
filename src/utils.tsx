export const getLongestWord = (paragraph: string) => {
  let longestWords: string[] = []
  paragraph.split(' ').forEach((str) => {
    str = str.replace(/[^a-zA-Z0-9 ]/g, '')

    if (longestWords.length === 0) {
      longestWords.push(str)
      return
    }

    if (str.length > longestWords[0].length) {
      longestWords = [str]
    } else if (str.length === longestWords[0].length) {
      longestWords.push(str)
    }
  })

  return longestWords[0]
}
