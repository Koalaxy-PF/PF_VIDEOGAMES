import icons from '../../assets/icons colores/icons.js'

export default function SearchBar({open}){

    return(
        <div className={`flex items-center mt-2 rounded-md py-2 mr-2 ${!open ? "ml-1" : "px-4 bg-gray-600"}`}>
            <img src={icons.img6} className={`flex w-8 items-center text-4xl float-left cursor-pointer ${open && "mr-2"}`}  onClick={() => setOpen(!open)} />
            <input type="search" className={`text-base bg-transparent w-full text-slate-200 focus:outline-none ${!open && "hidden"}`} />
        </div>
    )

}