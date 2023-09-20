import { Facebook ,Instagram } from "lucide-react"
import logo from "../../assets/logo.png"

export default function Navbar() {
  return (
    <div>
            <div className="h-screen bg-cover bg-[url('./assets/wedding1.jpg')]" >
        <div className="container p-8 mx-auto flex flex-col h-full text-[#fffb] pt-16">
            <nav className="md:flex hidden items-end rounded-xl  uppercase  gap-16 justify-center ">
                <div className="flex-1 flex justify-between">
                    <div className="flex gap-4">
                        <a href="#">
                            <Facebook/>
                        </a>
                        <a href="#">
                            <Instagram/>
                        </a>
                    </div>
                    <ul className="flex gap-10 drop-shadow-md border-t border-[#fff5] p-1 px-4">
                        <li><a href="#">home</a></li>
                        <li><a href="#">wedding</a></li>
                        <li><a href="#">photo</a></li>
                    </ul>
                </div>
                <img src={logo} className="w-40 h-20 object-cover" alt=""/>
                <div className="flex-1 flex justify-start">
                    <ul className="flex gap-10  border-t border-[#fff5] p-1 px-4">
                        <li><a href="#">films</a></li>
                        <li><a href="#">about</a></li>
                        <li><a href="#">contact</a></li>
                    </ul>
                </div>
            </nav>
            <div className="flex justify-between items-center  flex-1">
                <button className="bg-[#fff2] p-4 rounded-lg hover:scale-105 hover:bg-[#fff3] duration-200 shadow-xl border border-[#fff3]">
                    <img className="w-8" src="../assets/icons/left-arrow.png" />
                </button>
                <button className="bg-[#fff2] p-4 rounded-lg  hover:scale-105 hover:bg-[#fff3] duration-200 shadow-xl border border-[#fff3]">
                    <img className="w-8" src="../assets/icons/right-arrow.png" />
                </button>
            </div>
        </div>
    </div>
      </div>
  )
}
