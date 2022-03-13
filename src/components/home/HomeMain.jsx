import styled from "styled-components"
import { About } from "./HomeAbout"
import { NavSec } from "./NavSec"


export const Home = () => {
    return (
        <HomeContainer>
            <About />
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    background-color: black;

    @media (max-width: 767px) {
        height: calc(100vh - 51px);
    }
`