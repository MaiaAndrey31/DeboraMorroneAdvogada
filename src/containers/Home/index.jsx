import Header from '../../components/Header'
import { Background, Container } from './style'
import HomeBG from '../../assets/videoBGHome.mp4'
import TopBar from '../../components/TopBar'



export default function Home() {
  return (
    <Container>
          <TopBar />
      <Header />
      <Background>
        <video loop autoPlay muted className="conteudo-background ">
          <source src={HomeBG} />{' '}
        </video>
      </Background>
    </Container>
  )
}
