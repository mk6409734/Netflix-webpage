import Mob from '../images/mobile.jpg'
import Icon from '../images/icon.gif'
import Box from '../images/boxshot.png'

const Mobile = () => {
    return (
      <section className="w-[100%] bg-black border-t-[8px] border-t-[#605d5d] sm:py-[50px] py-[50px]">
        <div className="max-w-[1170px] mx-auto ">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center">
            <figure className="relative sm:order-1 order-2">
              <img src={Mob} alt="" className="" />
              <div className="sm:w-[60%] w-[80%] absolute sm:left-[20%] items-center left-[10%] border-[1px] rounded-2xl border-[#ccc] sm:bottom-[7%] bottom-[0px] grid grid-cols-[70%_auto] bg-black">
                <div className="grid grid-cols-[25%_auto] gap-8 p-4 items-center">
                  <img src={Box} alt="" />
                  <div className="text-white">
                    <h3 className='font-bold text-[14px]'>Stranger Things</h3>
                    <p className='text-blue-600'>Downloading...</p>
                  </div>
                </div>
                <div>
                  <img src={Icon} alt="" className='w-9/12'/>
                </div>
              </div>
            </figure>
            <div className="text-white sm:text-left text-center sm:order-2 order-1">
              <h1 className="sm:text-5xl text-3xl font-medium">
                Download your shows to watch offline
              </h1>
              <h4 className="sm:text-2xl text-[20px] pt-3">
                Save your favourites easily and always have
              </h4>
              <h4 className="sm:text-2xl text-[20px]">something to watch.</h4>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Mobile;