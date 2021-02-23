import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        clickHandler={onAdd} />
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
