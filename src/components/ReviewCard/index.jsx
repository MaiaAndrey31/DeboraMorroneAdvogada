import { Container, ProfileContainer } from './style'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import PropTypes from 'prop-types'

export default function ReviewCard({ person, review }) {
  return (
    <Container>
      <ProfileContainer>
        <div className="profile">
          <AccountCircleIcon style={{ fontSize: 50, color: '#515151'  }} />
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
