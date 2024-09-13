import FooterImg1 from "../assets/socials/fb.svg"
import FooterImg2 from "../assets/socials/inst.svg"
import FooterImg3 from "../assets/socials/tw.svg"
import FooterImg4 from "../assets/socials/in.svg"

const Footer = () => {
  return (
    <footer className='px-[10%] py-[60px] md:py-[140px] bg-black flex flex-col lg:flex-row justify-center lg:justify-between items-center'>
      <div className='w-10/12 lg:w-1/4 xl:w-1/2'>
        <div className='w-full xl:w-1/2 flex flex-col justify-between gap-[15px] md:gap-[30px]'>
          <p className='text-white font-black text-[30px] md:text-[40px] tracking-wide'>
            FASHION
          </p>
          <p className='leading-loose tracking-wide text-[16px] md:text-[20px] text-[#8e8e8e]'>
            Complete your style with awesome clothes from us.
          </p>
          <div className='flex gap-[14px]'>
            <a href='#'>
              <img
                src={FooterImg1}
                alt='facebook'
                className='rounded-[15px] w-[52px] h-[52px] hover:opacity-50 transition'
              />
            </a>
            <a href='#'>
              <img
                src={FooterImg2}
                alt='instagram'
                className='rounded-[15px] w-[52px] h-[52px] hover:opacity-50 transition'
              />
            </a>
            <a href='#'>
              <img
                src={FooterImg3}
                alt='twitter'
                className='rounded-[15px] w-[52px] h-[52px] hover:opacity-50 transition'
              />
            </a>
            <a href='#'>
              <img
                src={FooterImg4}
                alt='linkedin'
                className='rounded-[15px] w-[52px] h-[52px] hover:opacity-50 transition'
              />
            </a>
          </div>
        </div>
      </div>
      <div className='w-10/12 lg:w-2/3 xl:w-1/2 flex flex-col lg:flex-row gap-[60px] lg:mt-none mt-[60px]'>
        <div className='w-full lg:w-1/3 font-regular text-[#8e8e8e] text-[16px] xl:text-[20px] leading-loose tracking-wide flex flex-col gap-[15px] md:gap-[32px]'>
          <p className='text-[#d9d9d9]'>Company</p>
          <a href='#' className='hover:brightness-75 transition-colors'>
            About
          </a>
          <a href='#' className='hover:brightness-75 transition-colors'>
            Contact us
          </a>
          <a href='#' className='hover:brightness-75 transition-colors'>
            Support
          </a>
          <a href='#' className='hover:brightness-75 transition-colors'>
            Careers
          </a>
        </div>
        <div className='w-full lg:w-1/3 font-regular text-[#8e8e8e] text-[16px] xl:text-[20px] leading-loose tracking-wide flex flex-col gap-[15px] md:gap-[32px]'>
          <p className='text-[#d9d9d9]'>Quick Link</p>
          <a href='#' className='hover:brightness-75 transition-colors'>
            Share Location
          </a>
          <a href='#' className='hover:brightness-75 transition-colors'>
            Orders Tracking
          </a>
          <a href='#' className='hover:brightness-75 transition-colors'>
            Size Guide
          </a>
          <a href='#' className='hover:brightness-75 transition-colors'>
            FAQs
          </a>
        </div>
        <div className='w-full lg:w-1/3 font-regular text-[#8e8e8e] text-[16px] xl:text-[20px] leading-loose tracking-wide flex flex-col gap-[15px] md:gap-[32px]'>
          <p className='text-[#d9d9d9]'>Legal</p>
          <a href='#' className='hover:brightness-75 transition-colors'>
            Terms & conditions
          </a>
          <a href='#' className='hover:brightness-75 transition-colors'>
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
