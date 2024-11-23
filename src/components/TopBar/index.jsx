import { Contact, Container, ContainerLeft, ContainerRight } from "./style";
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

export default function TopBar(){

    return (

        <Container>
        <ContainerLeft>
          <InstagramIcon className='icon'/>
          <YouTubeIcon className='icon' />

        </ContainerLeft>
        <ContainerRight>
           <Contact>
           <PhoneIcon className='icon'/>
           <p>(11) 98877-6655</p>
           </Contact>
           <Contact>
           <EmailIcon className='icon'/>
           <p>deboraadvogada@adv.com.br</p>
           </Contact>


        </ContainerRight>
      </Container>
    )
}