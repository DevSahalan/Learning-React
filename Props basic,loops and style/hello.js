class Hello extends React.Component {
  render() {
    const { name, age, hobbies } = this.props

    return (
      <div>
        <h3>
          my name is {name} and i am {age} years old and my hobbies are
          <ul>
            {hobbies.map((hobby) => (
              <li>{hobby}</li>
            ))}
          </ul>
        </h3>
      </div>
    )
  }
}
