import {useState} from 'react'

const FunctionComponent = () => {
    const [count, setCount] = useState(0)
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)
    const reset = () => setCount(0)

  return (
    <>
    <p>Räknare: {count}</p>
    <button onClick={increment}>Öka +</button>
    <button onClick={decrement}>Minska -</button>
    <button onClick={reset}>Återställ</button>

    </>

  )
}

export default FunctionComponent