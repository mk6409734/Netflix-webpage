import Tv from '../images/device.png'
import Video from '../images/devices.m4v'


const Devices = () => {
    return (
      <section className="w-[100%] bg-black border-t-[8px] border-t-[#605d5d] sm:py-[50px] py-[50px]">
        <div className="max-w-[1170px] mx-auto ">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center">
            <div className="text-white sm:text-left text-center">
              <h1 className="sm:text-5xl text-4xl font-medium">
                Watch everywhere
              </h1>
              <h4 className="sm:text-2xl text-[20px] pt-3">
                Stream unlimited movies and TV shows on your
              </h4>
              <h4 className="sm:text-2xl text-[20px]">
                phone, tablet, laptop, and TV.
              </h4>
            </div>
            <figure className="relative">
              <video
                autoPlay
                inline
                muted
                loop
                className="absolute w-[60%] left-[19%] bottom-[44%] z-[1]"
              >
                <source src={Video} />
              </video>
              <img src={Tv} alt="" className="relative z-[2]" />
            </figure>
          </div>
        </div>
      </section>
    );
}

export default Devices;