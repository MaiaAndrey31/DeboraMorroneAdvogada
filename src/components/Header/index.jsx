import { Container, ContainerLeft, ContainerRight } from './style'
import Logo from '../../assets/logo.png'
import LongMenu from './menuBar'
export default function Header() {
  return (
    <Container>
      <ContainerLeft>
<img src={Logo} className="logo" alt="Logo" /> {/* Added alt attribute */}
      </ContainerLeft>
      <ContainerRight>
      <LongMenu />

      </ContainerRight>
    </Container>
  )
}
