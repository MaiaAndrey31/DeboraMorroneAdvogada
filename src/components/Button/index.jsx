import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import { Container, ContainerButton } from './style'
import PropTypes from 'prop-types'

export function Button({children}) {
  return <Container id="btnwhats">
    <ContainerButton>
       {children}
        <WhatsAppIcon style={{ fontSize: 40, fontWeight: 'bold', }} className='icon'/>
      
    </ContainerButton>
  </Container>
  
}

Button.propTypes={
    children:PropTypes.string
}

