function getMood() {
  const moods = ["angry", "happy", "hungry", "silly", "paranoid"]
  return moods[Math.floor(Math.random() * moods.length)]
}

class JSXDemo extends React.Component {
  render() {
    return <h1>My Mood is {getMood()} rn!</h1>
  }
}
