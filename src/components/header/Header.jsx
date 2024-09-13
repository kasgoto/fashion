import { useClickAway } from "react-use"
import { useRef } from "react"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Squash as Hamburger } from "hamburger-react"
import Navlink from "./Navlink"
import MobileNavlink from "./MobileNavlink"
import Logo from "../../assets/icons/logo.svg"

const Header = () => {
  const [isOpen, setOpen] = useState(false)
  const ref = useRef(null)

  useClickAway(ref, () => setOpen(false))

  return (
    <header className='py-11'>
      <div
        ref={ref}
        className='container mx-auto 2xl px-4 flex justify-between'
      >
        <div className='flex flex-1 my-auto transition hover:opacity-65'>
          <a href='#' className='gap-3 flex'>
            <img
              src={Logo}
              className='w-8 h-8 my-auto'
              alt='logo'
            />
            <span className='text-4xl font-bold text-black'>FASHION</span>
          </a>
        </div>
        <nav className='xl:flex ml-auto my-auto items-center font-medium text-black text-xl tracking-wide gap-14 hidden'>
          <Navlink title='Catalogue' />
          <Navlink title='Fashion' />
          <Navlink title='Favourite' />
          <Navlink title='Lifestyle' />

          <button className='w-34 h-12 px-4 py-1 rounded-lg border-2 bg-black border-black text-white tracking-tight font-medium text-xl hover:border-black hover:text-black hover:bg-white transition'>
            SIGN UP
          </button>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className='fixed left-0 shadow-4xl right-0 top-[6.5rem] p-5 pt-0 bg-white border-b border-b-white/20 z-20'
            >
              <ul className='grid gap-2 text-black'>
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1,
                  }}
                  className='w-full p-[0.08rem] rounded-xl bg-white text-black'
                >
                  <MobileNavlink setOpen={setOpen} title='Catalogue' />
                  <MobileNavlink setOpen={setOpen} title='Fashion' />
                  <MobileNavlink setOpen={setOpen} title='Favourite' />
                  <MobileNavlink setOpen={setOpen} title='Lifestyle' />
                  <div className=' flex items-center justify-center w-full p-5 '>
                    <button
                      onClick={() => setOpen((prev) => !prev)}
                      className='w-34 h-12 px-4 py-1 rounded-lg border-2 bg-black border-black text-white tracking-tight font-medium text-xl hover:border-black hover:text-black hover:bg-white transition'
                    >
                      SIGN UP
                    </button>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className='inline-block xl:hidden'>
          <Hamburger toggled={isOpen} size={25} toggle={setOpen} />
        </div>
      </div>
    </header>
  )
}

export default Header
