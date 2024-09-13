const Community = () => {
  return (
    <div className='flex px-4 items-center justify-center flex-col bg-[#e5c643] py-[80px] md:py-[140px] gap-[30px] md:gap-[37px]'>
      <h2 className='lg:max-w-[970px] font-black md:text-[55px] text-[36px] leading-tight tracking-wide text-center text-white'>
        JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
      </h2>
      <p className='font-regular text-[24px] lg:text-[32px] tracking-wide leading-[1.1] text-[#fffcf8] text-center'>
        Type your email down below and be young wild generation
      </p>
      <form className='bg-white rounded-[10px] p-2 flex items-center justify-between w-10/12 md:w-[574px] text-[16px] md:text-[24px]'>
        <input
          placeholder='Add your email here'
          type='text'
          className='w-8/12 md:max-w-[290px] h-[40px] md:h-[73px] placeholder:text-[15px] md:placeholder:text-[24px] pl-5'
        />
        <button className='w-3/12 h-[40px] md:w-[161px] md:h-[67px] rounded-[8px] border-2 bg-black border-black text-white tracking-tighter font-medium text-[16px] md:text-[33px] hover:border-black hover:text-black hover:bg-white transition'>
          SEND
        </button>
      </form>
    </div>
  )
}

export default Community
