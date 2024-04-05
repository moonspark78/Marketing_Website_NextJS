import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';


interface DropDownMenuProps{
    onClose: () => void;
}

const DropDownMenu = ({onClose}:DropDownMenuProps) => {
  return (
    <motion.div
        className='w-screen h-screen bg-gradient-to-b from-neutral-50 to neutral-400 text-slate-300 p-6 space-y-6 absolute top-28 left-0 right-0 z-50 rounded-t-3xl' 
        initial={{opacity: 0, y: "-80%"}}
        animate={{opacity: 1, y:0}}
        exit={{opacity:0, y: "-100%"}}
        transition={{duration: 0.5}}
    >
        <div className='flex flex-col space-y-10'>
            <Link href="/pricing" className="text-black text-2xl font-medium">
                Pricing
            </Link>
            <Link href="/contact" className="text-black text-2xl font-medium">
                Contact
            </Link>
            <Link href="/book" className="text-black text-2xl font-medium">
                Book a call
            </Link>
        </div>
    </motion.div>
  )
}

export default DropDownMenu