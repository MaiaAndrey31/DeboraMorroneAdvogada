import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import { ContainerButton } from './style'
import PropTypes from 'prop-types'

export function Button({children}) {
  return <ContainerButton>
        {children}
        <WhatsAppIcon className='icon'/>
      
    </ContainerButton>
  
}

Button.propTypes={
    children:PropTypes.string
}
