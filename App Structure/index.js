class App extends React.Component {
  render() {
    return (
      <div>
        <PickNum />
        <JSXDemo />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
