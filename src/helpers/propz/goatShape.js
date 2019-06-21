import PropTypes from 'prop-types';

const goatShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.bool.isRequired,
  disposition: PropTypes.string.isRequired,
  fullness: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  favPose: PropTypes.string.isRequired,
  isFainting: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
});

export default { goatShape };
