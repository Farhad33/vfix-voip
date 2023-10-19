import styled from "styled-components";
import { color } from "@/common/Theme";

export const CollapsibleContainer = styled.div`
    width: 100%;
`

export const CollapsibleHead = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`
export const HeadTitle = styled.div`
    padding-top: calc(2vw + 20px);
    padding-bottom: calc(2vw + 2px);
    width: 90%;
    text-align: center;
`
export const HeadParagraph = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: calc(2vw + 4px);
    width: 90%;
    p {
        font-weight: 500;
    }
`


export const CollapsibleListContainer = styled.div`
    max-width: 100%;
    margin: 0 auto;
`
export const ListContainer = styled.div`
    box-shadow: 0px 6px 30px 5px ${color.Blue300};
    border-radius: 8px;
`

export const ListTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: ${color.White};
    user-select: none;
    cursor: pointer;
    border-radius: 8px;
    margin-bottom: calc(1vw + 2px);
    padding-top: calc(1vw + 2px);
    padding-bottom: calc(1vw + 2px);
    padding-left: calc(1vw + 6px);
`

export const Icons = styled.div`
    padding-right: calc(2vw + 6px);
    color: ${color.White};
    svg {
        background: linear-gradient(90deg, ${color.Green200} 0%, ${color.Blue200} 100%);
        border-radius: 50%;
        font-size: 30px;
    }
`

export const ListContent = styled.div`
    display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
    padding: 8px;
    background:${color.White};
    padding-top: calc(1vw + -12px);
    padding-bottom: calc(1vw + 2px);
    padding-left: calc(1vw + 6px);
    padding-right: calc(2vw + 6px);
    p {
        font-weight: 500;
    }
`

export const FAQList = styled.ul`
    list-style: none;
    padding-top: 8px;
    padding-left: 15px;
`
export const FAQListItem = styled.li`
    padding: 5px 0;
`