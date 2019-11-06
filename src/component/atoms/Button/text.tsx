import * as React from 'react'
import styled from '../../../theme'

type Props = {
    text: string
    onClick: (e: React.MouseEvent) => void
}

const TextButton = React.memo<Props>(
    ({ text, onClick }) => {
        return (
                <Button
                    onClick={onClick}
                >
                    <Text>{text}</Text>
                </Button>
        )
    }
)

const Button = styled.button`
    background: ${props => props.theme.colors.primaryColors.primary};
    color: ${props => props.theme.colors.primaryColors.onPrimary};
    max-width: 100px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    &:focus {
        outline: 0;
    }
`

const Text = styled.div`
    margin: 8px;
`

//これ入れないとエラー出る
export default TextButton;