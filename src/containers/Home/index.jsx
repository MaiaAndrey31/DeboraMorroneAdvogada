import Header from '../../components/Header'
import TopBar from '../../components/TopBar'
import { Background, Container, HomeContent, HomeTitle } from './style'
import HomeBG from '../../assets/videoBGHome.mp4'
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
        <HomeTitle>Especialistas em Direito <span>Educacional</span></HomeTitle>
        <p>Dedicados a oferecer soluções jurídicas eficientes para questões relacionadas a propriedades. Conte com nossa expertise para orientação precisa, seja em despejos, reintegração de posse, usucapião ou outras demandas imobiliárias. Garantimos uma assessoria jurídica sólida para proteger seus interesses no universo imobiliário.</p>

        <div><Button>Fale com um especialista</Button></div>      
      </HomeContent>
      
    </Container>
  )
}
