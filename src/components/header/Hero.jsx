import ImgDecoration from "../../assets/icons/decor-yellow.svg"
import ImgHero from "../../assets/images/header-img.jpg"

const Hero = () => {
  return (
    <div className='container mx-auto 2xl px-4 my-4 min-h-[740px] md:min-h-[852px] bg-[#f4f6f5] rounded-[59px] flex pt-[40px] md:pt-[77px] md:pr-[80px]'>
      <div className='my-auto md:pl-[100px] px-[25px] md:px[10px] flex-1 max-w-full md:max-w-[610px] z-10'>
        <h1 className='md:text-[96px] text-[60px] font-black leading-tight max-w-full md:max-w-40'>
          <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:skew-x-3 before:w-[200px] before:h-[80px] before:ml-[-10px] md:before:w-[464px] md:before:h-[112px] md:before:ml-[-30px] before:bg-white relative inline-block'>
            <span className='relative'>{"LET'S"}</span>
          </span>
          <br />
          EXPLORE <br />
          <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:skew-x-3 before:w-[290px] before:h-[75px] before:ml-[-10px] md:before:w-[494px] md:before:h-[112px] md:before:ml-[-20px] before:mt-1 before:bg-[#ebd96b] relative inline-block'>
            <span className='relative'>UNIQUE</span>
          </span>
          <br /> CLOTHES.
        </h1>
        <p className='my-[40px] font-regular text-[32px] tracking-tighter lg:w-[610px]'>
          Live for Influential and Innovative fashion!
        </p>
        <div className='flex my-[32px] gap-[34px] flex-col sm:flex-row'>
          <img src={ImgDecoration} alt='decoration' className='w-[190px]' />
          <button className='w-[220px] h-[82px]  rounded-[10px] border-2 bg-black border-black text-white tracking-tighter font-medium text-[30px] hover:border-black hover:text-black hover:bg-white transition'>
            Shop Now
          </button>
        </div>
      </div>
      <img
        src={ImgHero}
        alt='hero image'
        className='max-h-[784px] max-w-[890px] mt-auto rounded-r-[100px] 2xl:block hidden'
      />
    </div>
  )
}

export default Hero
