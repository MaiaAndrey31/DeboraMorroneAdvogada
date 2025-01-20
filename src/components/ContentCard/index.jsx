import { Button } from "../Button";
import { ContentContainer, ImageContainer, TextContainer } from "./style";
import PropTypes from "prop-types";


export default function ContentCard({title, image, text}) {

    return (

        <ContentContainer>
                <ImageContainer>
                  <h5>{title}</h5>
<img src={image} alt="" />
                </ImageContainer>
        
                <TextContainer>
                  <p>
                    {text}
                  </p>
                  <Button>Enviar Mensagem</Button>
                </TextContainer>
              </ContentContainer>
    )
}

ContentCard.propTypes={
    title:PropTypes.string,
    image:PropTypes.array,
    text:PropTypes.string
}