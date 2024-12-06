import { Container, ContainerLeft, ContainerRight } from './style'
import Logo from '../../assets/logo.png'
import LongMenu from './menuBar'
export default function Header() {
  return (
    <Container>
      <ContainerLeft>
        <LongMenu />
      </ContainerLeft>
      <ContainerRight>
        <img src={Logo} className="logo" />
      </ContainerRight>
    </Container>
  )
}
