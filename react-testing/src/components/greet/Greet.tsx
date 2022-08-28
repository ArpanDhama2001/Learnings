type GreetProps = {
  name?: string
}

export const Greet = ({name}: GreetProps) => {
  return (
    <div>
      <h1>Hello {name} </h1>
    </div>
  )
}