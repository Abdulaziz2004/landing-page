import { Fade } from "react-reveal"
import styled from "styled-components"
import { PortfolioDetails } from "./PortfolioDetails"


export const PortfolioMain = () => {

    return (
        <Wrapper>
            <Fade bottom>
                <h1>Portfolio</h1>
                <p>Check my portfolios</p>
            </Fade>
            <PortfolioDetails />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: auto;

    h1 {
        text-align: center;
        font-size: 45px;
        color: #fff;
        padding-top: 70px;
        font-weight: 700;
        letter-spacing: 2px;

        @media (max-width: 767px) {
            font-size: 35px;
        }
    }

    p {
        text-align: center;
        font-size: 30px;
        color: #33a5da;
        letter-spacing: .7px;

        @media (max-width: 767px) {
            font-size: 23px;
            margin-bottom: 10px;
        }
    }
`