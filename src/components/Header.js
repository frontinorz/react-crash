import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

  const clickHandler = () => {
    console.log('click parent')
  }

  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button color="green" text="Add" clickHandler={clickHandler} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Child Header'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in js
const styleHeader = {
  color: '#555',
  backgroundColor: '#eee'
}

export default Header
