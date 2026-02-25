import { useCounter } from "../hooks/use-counter.hook";

export function CounterPage() {
    const { counter, increment, decrement } = useCounter();
    return (
        <>
            <h3>Counter: {counter}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}