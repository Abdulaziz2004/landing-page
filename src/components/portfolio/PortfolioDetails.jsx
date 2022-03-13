import styled from "styled-components"
import { PortfolioContainer } from "./PortfolioContainer"
import fashion from "../../assest/fashion.jpg"
import mapty from "../../assest/mapty.jpg"
import weather from "../../assest/weather.jpg"
import todo from "../../assest/todo.jpg"
import states from "../../assest/states.jpg"

export const PortfolioDetails = () => {

    const data = [
        {image: fashion, title: "Fashion", Giturl: "https://github.com/marat20021504/fashionshopwebsite", Neturl: "https://fashionuz.netlify.app/"},
        {image: mapty, title: "Mapty", Giturl: "https://github.com/marat20021504/mapty-starter", Neturl: "https://maratmapty.netlify.app/"},
        {image: weather, title: "Weather API", Giturl: "https://github.com/marat20021504/Weather", Neturl: "https://modest-bhaskara-093d7a.netlify.app/"},
        {image: todo, title: "Todo-List", Giturl: "https://github.com/marat20021504/react-todo-list", Neturl: "https://1-react-proyekt.netlify.app/"},
        {image: states, title: "States API",Giturl: "https://github.com/marat20021504/davlatlar", Neturl: "https://blissful-noyce-463b35.netlify.app/"},
    ]

    return (
        
        <Container>
            {
                data.map(({image, title, Giturl, Neturl}) => {
                    return (
                        <PortfolioContainer image={image} title={title} Giturl={Giturl} Neturl={Neturl} />
                    )
                })
            }
        </Container>
    )
}

const Container = styled.div`
    padding: 100px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 50px;

    @media (max-width: 767px) {
        padding: 15px;
    }
    
`