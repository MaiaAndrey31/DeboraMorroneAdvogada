import { Container, ProfileContainer } from './style'
import PropTypes from 'prop-types'

export default function ReviewCard({ person, review }) {
  return (
    <Container>
      <ProfileContainer>
        <div className="profile">
         
          <p>{person}</p>
        </div>
        <div className="stars">
          <p>⭐⭐⭐⭐⭐</p>
        </div>
        <div className="review">
          <p>{review}</p>
        </div>
      </ProfileContainer>
    </Container>
  )
}

ReviewCard.propTypes = {
  person: PropTypes.string,
  review: PropTypes.string
}
