import { Fade } from "react-reveal"
import styled from "styled-components"


export const Faqs = () => {
    return (
        <Wrapper>
            <Fade bottom cascade>
                <Title>
                    <h3>FAQs</h3>
                    <p>The most frequently asked questions</p>
                </Title>
            </Fade>
            <Questions>
                <Fade bottom cascade>
                    <div className="faqsmenu">
                        <h3>What company do you currently work for?</h3>
                        <p>I don’t work for any company right now</p>
                    </div>
                </Fade>

                <Fade bottom cascade>
                    <div className="faqsmenu">
                        <h3>Where did you learn Frontend?</h3>
                        <p>I did study to learn Frontend in PDP IT-Academy, after YouTube and I still haven’t stopped my research 💪</p>
                    </div>
                </Fade>

                <Fade bottom cascade>
                    <div className="faqsmenu">
                        <h3>Where are you from?</h3>
                        <p>I am from Uzbekistan, Samarkand. I now live in Tashkent ⏳</p>
                    </div>
                </Fade>

                <Fade bottom cascade>
                    <div className="faqsmenu">
                        <h3>How old are you?</h3>
                        <p>I was born in 2002-years 15- April and Now I'm 20 </p>
                    </div>
                </Fade>
            </Questions>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 20px;
    min-height: auto;

    @media (max-width: 767px) {
        height: 100vh;
    }
`

const Title = styled.div`
    text-align: center;
    margin-top: 75px;

    h3 {
        font-size: 45px;
        color: #fff;
        margin: 0;
        font-weight: 700;
        letter-spacing: 2px;

        @media (max-width: 767px) {
            font-size: 35px;
        }
    }

    p {
        font-size: 30px;
        color: #faff00;
        letter-spacing: .7px;

        @media (max-width: 767px) {
            font-size: 23px;
        }
    }
`
const Questions = styled.div`
    .faqsmenu {
        text-align: center;
        margin: 50px 0;

        @media (max-width: 767px) {
            margin: 30px 0;
        }

        h3 {
            color: #faff00;
            font-weight: 700;
            font-size: 35px;
            margin-bottom: 10px;

            @media (max-width: 767px) {
                font-size: 25px;
                margin-top: 7px;
            }
        }

        p {
            font-size: 20px;
            color: white;

            @media (max-width: 767px) {
                font-size: 18px;
            }
        }
    }
`