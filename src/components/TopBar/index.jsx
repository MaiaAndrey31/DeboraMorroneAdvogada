import { Contact, Container } from "./style";
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function TopBar(){

    return (

        <Container>
        
        
          <Contact>
          <a href="https://www.instagram.com/deboramorrone.adv?igsh=bmc3NGZsM2x4cTN0" target="_blank">
          <InstagramIcon className='icon' fontSize="large"/>
          <p>Instagram</p>
          </a>
          </Contact>
           
           <Contact>
            <a href="mailto:deboramorrone@adv.oabsp.org.br" >
           <EmailIcon className='icon' fontSize="large"/>
           <p>deboramorrone@adv.oabsp.org.br</p>
           </a>
           </Contact>
           <Contact>
           <a href="https://wa.me/5511976008146/?text=Ola!%20Gostaria%20de%20mais%20informações" target='_blank'>


           <PhoneIcon className='icon' fontSize="large" />
           
           <p>(11) 97600-8146</p>
           </a>
           </Contact>


       
      </Container>
    )
}