import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { Container, ContainerButton } from './style'
import PropTypes from 'prop-types'

export function Button({ children }) {
  return (
    <Container id="btnwhats">
      <a href="https://wa.me/5511976008146/?text=Ola!%20Gostaria%20de%20mais%20informações" target='_blank'>

      <ContainerButton>
        {children}
        <WhatsAppIcon
          style={{ fontSize: 40, fontWeight: 'bold' }}
          className="icon"
        />
      </ContainerButton>
      </a>
    </Container>
  )
}

Button.propTypes = {
  children: PropTypes.string
}
