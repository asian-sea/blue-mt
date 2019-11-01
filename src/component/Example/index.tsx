import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

export interface ExampleProps {
    text: string
    flag?: boolean
    action(): void;
}

const Example = (props: ExampleProps) => {
    const { text, flag, action} = props
    const [count, countChg] = useState(0)
    const countUp = useCallback(() => countChg(prev => prev + 1),[])
    const countDown = useCallback(() => countChg(prev => prev -1),[])

    return (
        <div>
            {flag && <p>{text}</p>}
            <Button onClick={action}>ボタン</Button>
            <p>count:{count}</p>
            <CountUp onClick={countUp}>+</CountUp>
            <CountDown onClick={countDown}>-</CountDown>
        </div>
    )
}

const Button = styled.button`
    background: pink;
    color: white;
    border-radius: 6px;
    border: none;
`
const CountUp = styled.button`
    width: 30px;
    border-color: pink;
    border-radius: 6px;
    margin-right: 5px;
`
const CountDown = styled.button`
    width: 30px;
    border-color: lightblue;
    border-radius: 6px;
`
export default Example;