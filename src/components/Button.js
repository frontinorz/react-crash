import PropTypes from 'prop-types'

function Button({ color, text, clickHandler }) {
  return <button onClick={clickHandler} style={{ backgroundColor: color }} className="btn"> {text}</button >
}

Button.defaultProps = {
  color: 'steelblue',
}

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  clickHandler: PropTypes.func
}

export default Button
