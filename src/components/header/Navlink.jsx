import PropTypes from "prop-types"

const Navlink = (props) => {
  return (
    <a href='#' className='hover:text-slate-500 transition-colors text-black'>
      {props.title}
    </a>
  )
}

Navlink.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Navlink
