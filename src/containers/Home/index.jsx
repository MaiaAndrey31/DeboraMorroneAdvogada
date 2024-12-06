import Header from '../../components/Header'
import TopBar from '../../components/TopBar'
import { Background, Container, HomeContent, HomeTitle } from './style'
import HomeBG from '../../assets/HomeSchooling.mp4'
import { Button } from '../../components/Button'




export default function Home() {
  return (
    <Container>     
      <TopBar />
      <Header />
      
      <Background className="background-video" >
        <video src={HomeBG} autoPlay muted loop ></video>
        <div className="mascara-video"></div>
      </Background>
      
      <HomeContent>
        <HomeTitle>Apoiando Famílias e Estudantes na Jornada <span>Educacional</span></HomeTitle>
        <p>Advogada especializada em Direito Civil e Educacional, ofereço soluções jurídicas específicas e acessíveis. Seja para educação domiciliar, inclusão escolar, ou responsabilidade civil, estou aqui para ajudar sua família a superar desafios e construir um futuro educacional mais justo.        .</p>

        <div><Button>Precisa de Ajuda? Clique Aqui!</Button></div>      
      </HomeContent>
      
    </Container>
  )
}
