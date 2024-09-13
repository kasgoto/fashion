import YoungsFavoriteCard from "./YoungsFavoriteCard"
import YoungsFavoriteCardImg1 from "../../assets/images/promo-01.jpg"
import YoungsFavoriteCardImg2 from "../../assets/images/promo-02.jpg"

const YoungsFavorite = () => {
  return (
    <div className='container mx-auto 2xl px-4 mt-[60px] md:mt-[120px]'>
      <h2 className='font-black text-[32px] md:text-[48px] tracking-wider text-center lg:text-left'>
        <span
          className={
            "before:block before:absolute before:-inset-1 before:ml-[140px] before:mt-[25px] md:before:w-[190px] md:before:h-[32px] md:before:ml-[310px] md:before:mt-[45px] before:bg-decor-yellow relative inline-block before:bg-no-repeat bg-contain"
          }
        >
          <span className='relative'>{"Young's Favourite"}</span>
        </span>
      </h2>

      <div className='flex justify-center items-center lg:justify-between lg:flex-row flex-col mt-[50px] md:mt-[100px] gap-6'>
        <YoungsFavoriteCard title="Trending on instagram" cardImage={YoungsFavoriteCardImg1}/>
        <YoungsFavoriteCard title="All Under $40" cardImage={YoungsFavoriteCardImg2}/>
      </div>
    </div>
  )
}

export default YoungsFavorite
