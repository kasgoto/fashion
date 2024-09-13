import Logo1 from "../assets/brands/HM.png"
import Logo2 from "../assets/brands/Obey.png"
import Logo3 from "../assets/brands/Shopify.png"
import Logo4 from "../assets/brands/Lacoste.png"
import Logo5 from "../assets/brands/Levis.png"
import Logo6 from "../assets/brands/Amazon.png"

const Brands = () => {
  return (
    <div className='grid grid-cols-1 gap-y-5 md:grid-cols-2 lg:grid-cols-3 2xl:flex lg:flex-wrap items-center justify-center 2xl:justify-between px-[30px] xl:px-[174px] py-[58px] bg-[#ebd96b] mt-[35px] md:mt-[63px]'>
      <img
        src={Logo1}
        alt='H&M'
        className='max-w-[235px] max-h-[70px] mix-blend-multiply mx-auto'
      />
      <img
        src={Logo2}
        alt='Obey'
        className='max-w-[235px] max-h-[70px] mix-blend-multiply mx-auto'
      />
      <img
        src={Logo3}
        alt='Shopify'
        className='max-w-[235px] max-h-[70px] mix-blend-multiply mx-auto'
      />
      <img
        src={Logo4}
        alt='Lacoste'
        className='max-w-[235px] max-h-[70px] mix-blend-multiply mx-auto'
      />
      <img
        src={Logo5}
        alt='Levis'
        className='max-w-[235px] max-h-[70px] mix-blend-multiply mx-auto'
      />
      <img
        src={Logo6}
        alt='Amazon'
        className='max-w-[235px] max-h-[70px] mix-blend-multiply mx-auto'
      />
    </div>
  )
}

export default Brands
