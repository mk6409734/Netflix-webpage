import Tv from '../images/tv.png'
import video from '../images/tv.m4v'

const Tvsection = () => {
    return (
      <section className="w-[100%] bg-black border-t-[8px] border-t-[#605d5d] sm:py-[50px] py-[50px]">
        <div className="max-w-[1170px] mx-auto ">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center">
            <div className="text-white sm:text-left text-center">
              <h1 className="sm:text-5xl text-4xl font-medium">Enjoy on your TV</h1>
              <h4 className="sm:text-2xl text-[20px] pt-3">
                Watch on smart TVs, PlayStation, Xbox, Chromecast,
              </h4>
              <h4 className="sm:text-2xl text-[20px]">
                Apple TV, Blu-ray players and more.
              </h4>
            </div>
            <figure className='relative'>
              <video autoPlay inline muted loop className='absolute w-[80%] left-[10%] bottom-[20%] z-[1]'>
                <source src={video}/>
                
              </video>
              <img src={Tv} alt="" className='relative z-[2]'/>
            </figure>
          </div>
        </div>
      </section>
    );
}

export default Tvsection; 