// CONDITIONAL RENDERING USING PROPS UNION

type StatusProps = {
  status: 'loading' | 'success' | 'error';
}

export const Status = ({status} : StatusProps) => {
  let msg;
  if(status === 'loading') msg = 'Loading...'
  else if(status === 'success') msg = 'Data fetched sucessfully!'
  else if(status === 'error') msg = 'Error fetching data'
  return (
    <div>
      <h2>{msg}</h2>
    </div>
  )
}