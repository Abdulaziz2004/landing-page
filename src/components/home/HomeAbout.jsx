import { Link } from "react-router-dom"
import styled from "styled-components"
import Maratjon from "../../assest/maratjon.jpg"
import Fade from "react-reveal/Fade"


export const About = () => {
    return (
        <AboutContainer>

            <Side1>
               
               <Fade bottom cascade>
                    <div className="title">
                        <h1>Hi, I'm Maratjon!</h1>  

                        <p>
                            20 y.o Frontend Developer, YouTuber from Uzbekistan,
                            Samarkand region. Welcome to my
                            personal website
                        </p>
                    </div>
               </Fade>

                <Fade bottom cascade>
                    <AboutPotrfolio>
                        <AboutLink to="/about-me">
                            About me
                        </AboutLink>

                        <PortfolioLink to="/portfolio">
                            Portfoilo
                        </PortfolioLink>
                    </AboutPotrfolio>
                </Fade>

                <Fade bottom cascade>
                    <IconsLink>
                        <a href="https://github.com/marat20021504">
                            <svg class="MuiSvgIcon-root iconSvg" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path></svg>    
                        </a>

                        <a href="https://www.instagram.com/qochqorovmarat/">
                            <svg class="MuiSvgIcon-root iconSvg" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>     
                        </a>

                        <a href="https://t.me/Khuchkarovwebsites">
                            <svg class="MuiSvgIcon-root iconSvg" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"></path></svg>    
                        </a>
                    </IconsLink>
                </Fade>

            </Side1>

            <Side2>
                <Fade bottom cascade><img src={Maratjon} alt="" /></Fade>
            </Side2>

        </AboutContainer>
    )
}

export const AboutContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 110px;
    background-color: #000000;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 767px){
        height: 100vh;
        flex-direction: column;
        padding: 40px 0;
        justify-content: space-evenly;
    }

`

const Side1 = styled.div`
    h1 {
        font-size: 70px;
        color: #fff;
        font-weight: 700;

        @media (max-width: 767px){
            font-size: 30px;
            text-align: center;
        }
    }

    p {
        width: 490px;
        color: #aaa;
        font-size: 20px;

        @media (max-width: 767px) {
            font-size: 18px;
            text-align: center;
            width: 100%;
            padding: 0 15px;
            margin: 15px 0 25px;
            padding: 0 15px;
        }
    }


`
export const AboutPotrfolio = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 767px){
        margin: auto;
        justify-content: center;
    }
`
export const AboutLink = styled(Link)`
    font-size: 20px;
    background-color: #2b2b2b;
    padding: 13px 26px;
    color: #fff;
    font-size: 20px;
    border-radius: 15px;
    font-weight: 500;

    @media (max-width: 767px){
        padding: 10px 20px;
        font-size: 15px;
    }
`
export const PortfolioLink = styled(Link)`
    font-size: 20px;
    background-color: #33a5da;
    padding: 13px 26px;
    color: #fff;
    font-size: 20px;
    border-radius: 15px;
    font-weight: 500;

    @media (max-width: 767px){
        padding: 10px 20px;
        font-size: 15px;
    }
`
const IconsLink = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 15px;

    @media (max-width: 767px){
        justify-content: center;
    }

    a {
        fill: currentColor;
        width: 1em;
        height: 1em;
        display: inline-block;
        font-size: 2rem;
        flex-shrink: 0;
        color: white;
        transition: .2s ease;

        &:hover {
            color: #33a5da;
        }
    }
`

const Side2 = styled.div`
    img {
        width: 400px;
        border-radius: 50%;

        @media (max-width: 767px) {
            width: 220px;
        }
    }
`

