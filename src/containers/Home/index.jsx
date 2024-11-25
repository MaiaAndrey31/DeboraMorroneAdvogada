import Header from '../../components/Header'
import TopBar from '../../components/TopBar'
import { Background, Container } from './style'
import HomeBG from '../../assets/videoBGHome.mp4'




export default function Home() {
  return (
    <Container>     
      <Background>
      <TopBar />
      <Header />
        <video loop autoPlay muted className="conteudo-background ">
          <source src={HomeBG} />{' '}
        </video>
      </Background>
    </Container>
  )
}
