import ArrivalsCard from "./ArrivalsCard"
import ImgCard1 from "../../assets/categories/cat-01.jpg"
import ImgCard2 from "../../assets/categories/cat-02.jpg"
import ImgCard3 from "../../assets/categories/cat-03.jpg"

const Arrivals = () => {
  return (
    <div className='container mx-auto 2xl px-4 mt-[60px] md:mt-[120px]'>
      <h2 className='font-black text-[32px] md:text-[48px] tracking-wider text-center lg:text-left'>
        <span
          className={
            "before:block before:absolute before:-inset-1 before:ml-[80px] before:mt-[20px] md:before:w-[190px] md:before:h-[32px] md:before:ml-[210px] md:before:mt-[35px] before:bg-decor-yellow relative inline-block before:bg-no-repeat bg-contain"
          }
        >
          <span className='relative'>NEW ARRIVALS</span>
        </span>
      </h2>

      <div className='flex justify-center items-center lg:justify-between lg:flex-row flex-col mt-[50px] md:mt-[100px] gap-6'>
        <ArrivalsCard title='Hoodies & Sweatshirt' cardImage={ImgCard1} />
        <ArrivalsCard title='Coats & Parkas' cardImage={ImgCard2} />
        <ArrivalsCard title='Tees & T-Shirt' cardImage={ImgCard3} />
      </div>
    </div>
  )
}

export default Arrivals
