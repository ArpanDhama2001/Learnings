type GreetProps = {
  first: string,
  last?: string,
  speed: number
}

export const Greet = ({first, last, speed}: GreetProps) => {
  return <h1>Hello {first} {last} ! Today wind is {speed}km/h</h1>
}