import { Container, ContainerLeft, ContainerRight } from './style'
import Logo from '../../assets/logo.png'
import FadeMenu from './menuBar'
export default function Header() {
  return (
    <Container>
      <ContainerLeft>
<img src={Logo} className="logo" alt="Logo" /> {/* Added alt attribute */}
      </ContainerLeft>
      <ContainerRight>
      <FadeMenu />

      </ContainerRight>
    </Container>
  )
}
