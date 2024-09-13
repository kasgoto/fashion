import PropTypes from "prop-types"

const MobileNavlink = (props) => {
  return (
    <a
      onClick={() => props.setOpen((prev) => !prev)}
      className={
        "flex items-center justify-center w-full p-5 rounded-xl bg-white"
      }
      href='#'
    >
      <span className='flex gap-1 text-lg text-center'>{props.title}</span>
    </a>
  )
}

MobileNavlink.propTypes = {
  setOpen: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

export default MobileNavlink
