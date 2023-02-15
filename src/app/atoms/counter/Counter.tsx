import { useRef, useState } from 'react';
import { bem } from '../../../utils/ComponentUtils';
import './Counter.scss';
const cl = bem('a-counter');

function Counter({ extraClasses = '' }: { extraClasses?: string }) {
    const [count, setCount] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    function incrementCount() {
        setCount((c) => c + 1);
    }

    function focusInput() {
        inputRef?.current?.focus();
    }

    return (
        <div className={`${cl()} ${extraClasses}`.trim()}>
            <button
                type="button"
                className={cl('button')}
                onClick={() => {
                    incrementCount();
                    focusInput();
                }}
            >
                Increment
            </button>
            <p className={cl('text')}>count is {count}</p>
            <input
                type="text"
                ref={inputRef}
                onChange={(e) => {
                    setCount(parseInt(e.target.value));
                }}
            />
        </div>
    );
}

export default Counter;
