import VoucherImg from "../assets/images/vouchers-img.png"
import VoucherAppstoreImg from "../assets/icons/app-store.png"
import VoucherPlayImg from "../assets/icons/google-play.png"

const Vouchers = () => {
  return (
    <div className='container mx-auto px-4 lg:px-32 my-[70px] md:my-[160px] min-h-[700px] md:min-h-[882px] flex flex-col xl:flex-row items-center justify-between overflow-hidden'>
      <div className='flex flex-col justify-center items-center lg:items-start gap-[30px] w-10/12 lg:w-1/2 lg:text-left text-center'>
        <h2 className='font-black text-[30px] max-w-[300px] md:max-w-[510px] md:text-[48px] tracking-wider text-center lg:text-left'>
          DOWNLOAD APP & GET THE VOUCHER!
        </h2>
        <p className='text-[16px] md:text-[24px] font-medium text-[#7f7f7f] leading-loose tracking-tighter'>
          Get 30% off for first transaction using <br />
          Rondovision mobile app for now.
        </p>
        <div className='flex justify-center lg:justify-normal gap-[19px] md:mt-5'>
          <img
            src={VoucherAppstoreImg}
            alt='app store'
            className='w-5/12 lg:max-w-[220px] h-auto'
          />
          <img
            src={VoucherPlayImg}
            alt='google play'
            className='w-5/12 lg:max-w-[220px] h-auto'
          />
        </div>
      </div>
      <img
        src={VoucherImg}
        alt='voucher image'
        className='w-10/12 h-auto lg:w-1/2 mt-12 xl:mt-auto lg:my-auto'
      />
    </div>
  )
}

export default Vouchers
