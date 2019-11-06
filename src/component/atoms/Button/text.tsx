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
    display: inline-block;
    color: ${props => props.theme.colors.primaryColors.onPrimary};
    background: ${props => props.theme.colors.primaryColors.primary};
    border-color: ${props => props.theme.colors.primaryColors.primary};
    border-bottom: solid 4px ${props => props.theme.colors.primaryColors.primaryVariant};
    max-width: 100px;
    border-radius: 6px;
    cursor: pointer;
    &:active{
        transform: translateY(4px);
        border-bottom: none;
    }
    &:focus {
        outline: 0;
    }
`

const Text = styled.div`
    margin: 8px;
`

//これ入れないとエラー出る
export default TextButton;