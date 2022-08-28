type GreetProps = {
  name: {
    first: string,
    last: string,
  },
  speed: number
}

const Greet = ({name, speed}: GreetProps) => {
  return <h1>Hello {name.first} {name.last}! Today wind is {speed}km/h</h1>
}

export default Greet;