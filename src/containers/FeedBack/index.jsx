import ReviewCard from "../../components/ReviewCard";
import { Container, Title } from "./style";




export default function Feedback() {

    return (
        <Container>
        <Title><h1>FeedBacks</h1></Title>

        <div><ReviewCard person= "Katyuscia Silva" review= "A Dra. Debora é uma profissional excelente. O atendimento é personalizado, ela tem olhar completamente técnico ao mesmo tempo é completamente humanizado e a gente se sente em uma conversa amigável. Ela transmite confiança porque busca compreender os detalhes antes de começar a orientar. É uma profissional muito acima da média, não visa apenas a orientação jurídica, mas tem todo o cuidado com quem está sendo atendido. Eu e minha família ficamos completamente satisfeitos com o atendimento da Dra. Debora, recomendo com toda certeza." /></div>
        </Container>
    )
}