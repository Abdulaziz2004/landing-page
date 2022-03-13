import { useState } from "react"
import Fade from "react-reveal/Fade"
import { Link } from "react-router-dom"
import styled from "styled-components"

export const NavSec = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <>
            <Fade top cascade>
                <Header id="navbar" className="header">
                    <Logo to="/"><b>Maratjon</b></Logo>
                    <div onClick={handleClick} className="nav">
                        <div className="navigaite"></div>
                        <div className="navigaite"></div>
                        <div className="navigaite"></div>
                    </div>
                    <div className={click ? "nav-menu active" : "nav-menu"}>
                        <NavLink to="/" onClick={handleClick}>Home</NavLink>
                        <NavLink to="/portfolio" onClick={handleClick}>Portfolio</NavLink>
                        <NavLink to="/about-me" onClick={handleClick}>About me</NavLink>
                        <NavLink style={{color: "red"}} to="/FAQs" onClick={handleClick}>FAQs</NavLink>
                    </div>
                </Header>
            </Fade>
        </>
    )
}
const Header = styled.div`
    width: 100%;
    padding: 20px 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    transition: .6s;
    top: 0;
    left: 0;
    z-index: 50000;
    background-color: black;

    .nav {
        width: 40px;
        height: 100%;
        display: none;
        cursor: pointer;

        @media (max-width: 767px) {
            display: block;
        }
    

        .navigaite {
            width: 100%;
            height: 5px;
            background-color: white;
            border-radius: 8px;
            margin: 5px 0;
        }
    }

    @media (max-width: 767px) {
        .nav-menu {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            position: absolute;
            left: -100%;
            top: 51px;
        }

        .active {
            border-top: 1px solid grey;
            background-color: black;
            left: 0;
            transition: all .5s ease;
            height: 100vh;
            padding: 200px 100px;
        }
    }

    @media (max-width: 767px) {
        padding: 12px;
    }
    
    .menu-btn {
        display: none;
        @media (max-width: 767px) {
            display: block;
            position: absolute;
            right: 12px;
        }
    }
`

const Logo = styled(Link)`
    b {
        font-size: 30px;
        font-weight: bold;
        color: #ffffff;

        @media (max-width: 767px) {
            font-size: 20px;
        }
    }
`

const NavLink = styled(Link)`
    margin-left: 50px;
    color: #949494;
    font-size: 20px;
    transition: .3s ease;

    &:hover {
       color: white;
    }

    @media (max-width: 767px) {
        text-align: center;
        margin: auto;
        font-size: 30px;
    }
`