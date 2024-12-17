import { Button } from "../Button";
import { ContentContainerReverse, ImageContainerReverse, TextContainerReverse } from "./style";
import PropTypes from "prop-types";


export default function ContentCardReverse({title, image, text}) {

    return (

        <ContentContainerReverse>
                <TextContainerReverse>
                  <p>
                    {text}
                  </p>
                  <Button>Enviar Mensagem</Button>
                </TextContainerReverse>
                <ImageContainerReverse>
                  <h5>{title}</h5>
                  <img src={[image]} alt="" />
                </ImageContainerReverse>
              </ContentContainerReverse>
    )
}

ContentCardReverse.propTypes={
    title:PropTypes.string,
    image:PropTypes.array,
    text:PropTypes.string
}