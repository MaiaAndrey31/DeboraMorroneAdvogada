import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'


export default function ReviewCard({ person, review, score }) {
  return (
    <Card >
      <CardContent>
        <Typography variant="h6">{person} {score}</Typography>
        <Typography variant="body2" color="text.secondary">
          {review}
          
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
    </Card>
  )
}

ReviewCard.propTypes = {
  person: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired
}
