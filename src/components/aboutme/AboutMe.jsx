import { Fade } from "react-reveal"
import styled from "styled-components"
import marat from "../../assest/marat.jpg"

export const AboutMe = () => {
    return (
        <Wrapper>
            <Title>
                <Fade bottom cascade><h3>About me</h3></Fade>
                <Fade bottom cascade><p className="paragraph">A lot information about me</p></Fade>
            </Title>
            <Content>
                <Fade bottom cascade>
                    <div className="image">
                        <img src={marat} alt="" />
                    </div>
                </Fade>
                    <div className="about">
                    <p>
                        Hello my dear! I am Marat Kochkarov, I am 20 years old.
                        I am from Uzbekistan, Samarkand and now
                        I live in Tashkent. So I started.
                        I am currently a student at Tashkent University of Information Technologies.
                        I have been studying Frontend Development at PDP IT Academy since 2021.
                        <Fade bottom cascade><div>Why did I choose Frontend?</div></Fade>
                        Because I love creating websites without frontend, without web apps, and I enjoy my work!
                    </p>
                </div>
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: auto;
`
const Title = styled.div`
    text-align: center;
    padding-top: 75px;

    @media (max-width: 767px) {
        pading-top: 45px;
    }

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

    .paragraph {
        color: #33a5da;
        font-size: 30px;
        letter-spacing: .7px;

        @media (max-width: 767px) {
            font-size: 25px;
        }
    }
`
const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
    padding: 100px;

    @media (max-width: 767px) {
        padding: 12px;
    }

    .image {
        height: 500px;

        @media (max-width: 767px) {
            height: auto;
        }        

        img {
            width: 100%;
            height: 100%;
        }
    }

    .about {
        height: 500px;
        padding: 12px;

        @media (max-width: 767px) {
            height: auto;
        } 

        p {
            color: white;
            font-size: 25px;
            letter-spacing: 1.5px;

            @media (max-width: 767px) {
                font-size: 17px;
            } 

            div {
                font-size: 30px;
                font-weight: bold;
                padding: 20px 0;

                @media (max-width: 767px) {
                    font-size: 20px;
                    padding: 15px 0;
                } 
            }
        }
    }
`