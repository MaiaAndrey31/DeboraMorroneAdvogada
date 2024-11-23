import { Container, ContainerLeft, ContainerRight } from './style'
import Logo from '../../assets/logo.png'
export default function Header() {
  return (
    <Container>
      <ContainerLeft>
        <img src={Logo} className="logo" />
        <ul>
          <li>Home</li>
          <li>Quem Somos</li>
          <li>Serviços</li>
          <li>Contato</li>
        </ul>
      </ContainerLeft>
      <ContainerRight></ContainerRight>
    </Container>
  )
}
