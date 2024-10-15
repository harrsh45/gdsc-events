import React from 'react'

const Upcoming = () => {
  return (
    <>
    <div className="cards mt-8 w-[80%] m-auto flex  flex-col gap-4 justify-evenly ">
        <div className="card2 w-[90%] flex justify-center items-center hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
          <div className="content p-6 text-black text-center rounded-lg max-w-md">
            <span className="max-md:text-[30px] text-[30px] leading-[1.3em] font-semibold font-montserrat">
              <p>HackNiche 2.0</p>
              <p>Hackathon</p>
            </span>
            <span className="text-lg leading-[1.3em] font-gSans">
              <p className="mt-4">
                HackNiche 2.0 is where the magic happens – a 24-hour hackathon
                where brilliant teams collaborate and compete
              </p>
            </span>
            <div className="mt-4">
              <span className="text-[17px] mx-3">
                <p>Date: 17th - 18th February, 2024</p>
              </span>
            </div>

          </div>
        </div>

        <div className="card2 w-[90%] flex justify-center items-center hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
          <div className="content p-6 text-black text-center rounded-lg max-w-md">
            <span className="max-md:text-[30px] text-[30px] leading-[1.3em] font-semibold font-montserrat">
              <p>HackNiche 2.0</p>
              <p>Hackathon</p>
            </span>
            <span className="text-lg leading-[1.3em] font-gSans">
              <p className="mt-4">
                HackNiche 2.0 is where the magic happens – a 24-hour hackathon
                where brilliant teams collaborate and compete
              </p>
            </span>
            <div className="mt-4">
              <span className="text-[17px] mx-3">
                <p>Date: 17th - 18th February, 2024</p>
              </span>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Upcoming