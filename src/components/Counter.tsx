import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
    value: number;
    duration?: number;
    suffix?: string;
}

const Counter = ({ value, duration = 2, suffix = '' }: CounterProps) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            if (start === end) return;

            let totalMiliseconds = duration * 1000;
            let incrementTime = totalMiliseconds / end;

            let timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === end) clearInterval(timer);
            }, incrementTime);

            return () => clearInterval(timer);
        }
    }, [value, duration, isInView]);

    return <span ref={ref}>{count}{suffix}</span>;
};

export default Counter;
