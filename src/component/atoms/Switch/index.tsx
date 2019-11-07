import * as React from 'react'
import styled from '../../../theme'

type Props = {
    onClick: (e: React.MouseEvent) => void
    active: boolean
    text: { on: string; off: string}
}

const Switch = React.memo<Props>(({ text, active, onClick }) => {
    if(active) {
        return (
            <Wrap>
                <Text>{text.off}</Text>
                <SwitchOuter
                    className="switch-on"
                    onClick={onClick}
                >
                    <SwitchItem
                        className="active-item"
                    />
                </SwitchOuter>
                <Text>{text.on}</Text>
            </Wrap>
        )
    }
    return (
        <Wrap>
            <Text>{text.off}</Text>
            <SwitchOuter
                onClick={onClick}
            >
                <SwitchItem />
            </SwitchOuter>
            <Text>{text.on}</Text>
        </Wrap>
    )
})

/**
 * Styles
 */

const Wrap = styled.div`
    display: inline-flex;
`

const Text = styled.span``

const SwitchOuter = styled.div`
    position: relative;
    margin: 0 5px 0 5px;
    width: 35px;
    height: 20px;
    border-radius: 10px;
    cursor: pointer;
    background: ${props => props.theme.colors.primaryColors.secondaryVariant};
    &.switch-on {
        background: ${props => props.theme.colors.primaryColors.secondary};
    }
`
const SwitchItem = styled.div`
    position: absolute;
    margin: 3px;
    left: 0;
    display: inline-block;
    background: ${props => props.theme.colors.primaryColors.onPrimary};
    width: 14px;
    height: 14px;
    border-radius: 7px;
    box-shadow: 1px 1px 3px;
    opacity: 0.7;
    transition: 0.4s;
    &.active-item {
        left: 14px;
    }
`

export default Switch;