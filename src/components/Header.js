import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'Child Header'
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
