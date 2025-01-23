import { Container, ContainerRight, ContainerLeft } from './style'


import SessionImg from '../../assets/SessionImg.webp'
import { Button } from '../../components/Button'


export default function BlogSession() {
  return (
    <Container id="blog">
      <ContainerLeft>
        <h2>Informação e Direitos Educacionais ao Seu Alcance</h2>

        <p>
          A educação começa com o conhecimento. Aqui você encontra informações
          essenciais sobre educação domiciliar, inclusão escolar e outros temas
          relevantes para proteger e potencializar os direitos educacionais de
          sua família.
        </p>
        <Button>Entre em Contato</Button>
      </ContainerLeft>
      <ContainerRight>
      {/* <video src={SessionVid} autoPlay muted loop></video> */}

      <img src={SessionImg} alt="" />


      </ContainerRight>
    </Container>
  )
}
