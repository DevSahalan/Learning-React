class App extends React.Component {
  render() {
    return (
      <div className="box">
        <Hello name="myth" age={30} hobbies={["js", "html", "css"]} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
