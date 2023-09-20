function ShowCase() {
  return (
    <div>
            <div className="flex flex-col items-center gap-8">
        <h1 className="text-2xl px-4 md:px-0 md:text-4xl text-gray-700 py-4">MODERN WEDDING PHOTOGRAPHY</h1>
        <div className="flex items-center justify-center gap-2 md:gap-8 py-4">
            <img className="w-[24vw] max-w-2xl rounded-lg drop-shadow-2xl z-0 -rotate-3" src="../assets/showCase/showCase1.png"/>
            <img className="w-[30vw] max-w-3xl rounded-lg drop-shadow-2xl z-10" src="../assets/showCase/showCase2.png"/>
            <img className="w-[24vw] max-w-2xl rounded-lg drop-shadow-2xl z-0 rotate-3" src="../assets/showCase/showCase3.png"/>
        </div>
    </div>
    <hr className="w-[30%] mx-auto my-8"/>
    </div>
  )
}

export default ShowCase