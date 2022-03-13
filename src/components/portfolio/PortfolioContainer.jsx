import { Fade } from "react-reveal"
import styled from "styled-components"

export const PortfolioContainer = ({image, title, Giturl, Neturl}) => {
    return (
        <Fade bottom>
            <Wrapper>
                <img src={image} alt="" />
                <Info>
                    <h2>{title}</h2>
                    <Links>
                        <a className="Name" style={{background: "#2b2b2b"}} href={Giturl}>
                            Source
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path></svg>    
                        </a>

                        <a className="Name" style={{background: "#33a5da"}} href={Neturl}>
                            Demo
                            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg>
                        </a>
                    </Links>
                </Info>
            </Wrapper>
        </Fade>
    )
}

const Wrapper = styled.div`
    height: auto;
    background-color: black;

    img {
        border-radius: 10px 10px 0 0;
        width: 100%;
        height: 60%;
    }
`

const Info = styled.div`
    width: 100%;
    height: 40%;
    padding: 20px;

    h2 {
        text-align: center;
        color: white;
        padding: 0;
    }
`

const Links = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    .Name {
        padding: 10px 20px;
        color: #fff;
        text-decoration: none;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 10px;
        border-radius: 10px;

        .MuiSvgIcon-root {
            width: 25px;
        }
    }
`