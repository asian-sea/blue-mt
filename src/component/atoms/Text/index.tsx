import * as React from 'react'
import styled from '../../../theme'

type Props = {
    text: string
}

const Text = (props: Props) => {
    return (
        <Wrap>
            {props.text}
        </Wrap>
    )
}

const Wrap = styled.div``

export default Text;