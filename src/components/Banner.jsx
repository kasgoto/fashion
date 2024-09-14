import ImgBanner from "../assets/images/promo-img.jpg"

const Banner = () => {
  return (
    <div className='max-w-[1895px] w-screen mt-[60px] md:mt-[143px] min-h-[700px] md:min-h-[900px] 2xl:min-h-fit flex items-center justify-center mx-auto bg-banner-gradient overflow-hidden'>
      <img
        src={ImgBanner}
        alt='banner image'
        className='max-h-full w-1/2 2xl:block hidden'
      />
      <div className='md:pl-[100px] pl-[25px] pt-3 md:pl[10px] flex-1 w-full h-full mt-7 md:my-auto overflow-hidden'>
        <h1 className='md:text-[96px] text-[60px] font-black leading-tight max-w-full md:max-w-[630px]'>
          <span className='before:block before:absolute before:-inset-1 before:-skew-y-2 before:skew-x-2 before:w-[280px] before:h-[80px] before:ml-[-5px] md:before:w-[474px] md:before:h-[122px] md:before:ml-[-20px] before:bg-white relative inline-block'>
            <span className='relative'>PAYDAY</span>
          </span>
          <br />
          SALE NOW
        </h1>
        <p className='my-[40px] font-medium text-[26px] md:text-[32px] tracking-tighter lg:max-w-[590px] text-[#231300]'>
          Spend minimal $100 get 30% off <br />
          voucher code for your next purchase
        </p>
        <p className='my-[40px] font-regular text-[26px] md:text-[32px] tracking-tighter lg:w-[610px]'>
          <span className='font-bold'>1 June - 10 June 2024</span>
          <br />
          *Terms & Conditions apply
        </p>
        <div className='flex my-[32px] gap-[34px] flex-col sm:flex-row'>
          <button className='w-[220px] h-[82px]  rounded-[10px] border-2 bg-black border-black text-white tracking-tighter font-medium text-[30px] hover:border-black hover:text-black hover:bg-white transition'>
            Shop Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
