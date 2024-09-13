import PropTypes from "prop-types"

const ArrivalsCard = (props) => {
  return (
    <div className='w-[320px] 2xl:w-[454px]'>
      <img
        src={props.cardImage}
        alt='card image'
        className='rounded-[20px] w-full h-auto 2xl:h-[664px]'
      />
      <div className='mt-[16px] 2xl:mt-[28px] flex justify-between items-center'>
        <div className=''>
          <h3 className='text-[24px] 2xl:text-[32px] font-medium leading-normal tracking-tighter'>
            {props.title}
          </h3>
          <p className='text-[16px] 2xl:text-[24px] font-medium text-[#7f7f7f] leading-loose tracking-tighter'>
            Explore Now!
          </p>
        </div>
        <button className='w-[34px] h-[34px] relative mb-10'>
          <div className='absolute w-full h-full m-auto left-0 right-0 bg-slider-button bg-no-repeat hover:brightness-0 transition-all'></div>
        </button>
      </div>
    </div>
  )
}

ArrivalsCard.propTypes = {
  cardImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default ArrivalsCard
