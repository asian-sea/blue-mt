import * as React from 'react'
import styled from '../../../theme'

type Props = {
    listItems: Item[]
}

type Item = {
    item: string
    onClick: (e: React.MouseEvent) => void
}

const Selector = (props: Props) => {
    const renderItem = (listItem: Item, index: number) => {
        return (
            <SelectItem
                onClick={listItem.onClick}
                key={index}
            >
                {listItem.item}
            </SelectItem>
        )
    }
    return (
        <Wrap>
            {props.listItems.map(renderItem)}
        </Wrap>
    )
}

const Wrap = styled.div`
    display: inline-flex;
    border: solid 1px ${props => props.theme.colors.primaryColors.primary};
`
const SelectItem = styled.span`
    height: 50px;
    width: 100px;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    background: ${props => props.theme.colors.primaryColors.onPrimary};
    transition: 0.4s;
    & + & {
        border-left: solid 1px ${props => props.theme.colors.primaryColors.primary};
    }
    &:hover {
        background: ${props => props.theme.colors.primaryColors.primaryVariant};
        color: ${props => props.theme.colors.primaryColors.onPrimary};
    }
    &:focus {
        outline: 0;
    }
`

export default Selector;
