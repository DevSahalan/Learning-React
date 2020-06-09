function getMood() {
  const moods = ["angry", "happy", "hungry", "silly", "paranoid"]
  return moods[Math.floor(Math.random() * moods.length)]
}

class JSXDemo extends React.Component {
  render() {
    return <h1>My Mood is {getMood()} rn!</h1>
  }
}
ReactDOM.render(<JSXDemo />, document.getElementById("root"))

function getNum() {
  return Math.floor(Math.random() * 10) + 1
}
class PickNum extends React.Component {
  render() {
    let num = getNum()
    let msg
    if (num === 7) {
      msg = (
        <div>
          <h2> you're lucky </h2>
          <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" />
        </div>
      )
    } else {
      msg = <h2> you're unlucky </h2>
    }
    return (
      <div>
        <h2> your number is {num} </h2>
        {msg}
      </div>
    )
  }
}

// class PickNum extends React.Component {
//   render() {
//     let num = getNum()
//     return (
//       <div>
//         <h2> your number is {num} </h2>
//         <p> {num === 7 ? "congratz" : "failed"} </p>
//         {num === 7 ? (
//           <img src="https://i.giphy.com/media/nXxOjZrbnbRxS/giphy.webp" />
//         ) : null}
//       </div>
//     )
//   }
// }

ReactDOM.render(<PickNum />, document.getElementById("root2"))
