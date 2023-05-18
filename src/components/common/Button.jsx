import styled from 'styled-components'


export default function Button({ children }) {

    return (
        <ButtonComponent>{children}</ButtonComponent>
    )
}


const ButtonComponent = styled.button`
    color: #00AEEF;
    width: fit-content;
    background-color: white;
    border-radius: 100px;
    padding: 9px 40px;
    padding: 1rem;
    font-size: 18px;
    padding: .5rem 3rem;
    color: #00AEEF;
    box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
    border: solid 3px transparent;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, #78e4ff, #ff48fa);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 2px 1000px 1px #fff inset;
    :hover {
        box-shadow: none;
        color: white;
    }
`