import Header from '../../components/Header'
import TopBar from '../../components/TopBar'
import { Background, Container, HomeContent, HomeTitle } from './style'
import HomeBG from '../../assets/HomeSchooling.mp4'
import { Button } from '../../components/Button'

export default function Home() {
  return (
    <Container id="home">
      <TopBar />
      <Header />

      <Background className="background-video">
        <video src={HomeBG} autoPlay muted loop></video>
        <div className="mascara-video"></div>
      </Background>

      <HomeContent>
        <HomeTitle>
          Apoiando Famílias e Estudantes na Jornada <span>Educacional</span>
        </HomeTitle>
        <p>
          Advogada especialista em Direito Civil e Educacional, com foco em
          inclusão, respeito e pluralidade pedagógica. 
        </p>

        <div>
          <Button>Quer Ajuda? Clique Aqui!</Button>
        </div>
      </HomeContent>
    </Container>
  )
}
