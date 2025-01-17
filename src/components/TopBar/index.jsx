import { Contact, Container } from "./style";
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

export default function TopBar(){

    return (

        <Container>
        
        
          <Contact>
          <InstagramIcon className='icon'/>
          <p>Instagram</p>
          </Contact>
           <Contact>
           <PhoneIcon className='icon'/>
           
           <p>(11) 98877-6655</p>
           </Contact>
           <Contact>
           <EmailIcon className='icon'/>
           <p>deboraadvogada@adv.com.br</p>
           </Contact>


       
      </Container>
    )
}