import Logo from '../images/logo.png'
import { IoLanguage } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Header = () => {
    return (
      <div>
        <section className=" w-[100%] sm:h-[98vh] h-[60vh] bg-[url('./images/image.png')] bg-center bg-cover">
          <div className="w-[100%] h-[100vh] bg-[rgba(0,0,0,0.5)]">
            <header className="max-w-[1170px] mx-auto">
              <div className="grid sm:grid-cols-2 grid-cols-[30%_auto] p-4 items-center">
                <figure>
                  <img src={Logo} alt="/" className="w-[148px]" />
                </figure>
                <div className="flex justify-end gap-[10px]">
                  <div className="relative">
                    <IoLanguage className="text-white absolute top-[10px] left-[8px]" />

                    <select
                      name=""
                      id=""
                      className="bg-[black] text-white border-[2px] border-[white] rounded-[5px] sm:p-[4px_25px] p-[5px_20px]"
                    >
                      <option className="bg-[white] text-black" value="">
                        English
                      </option>
                      <option className="bg-[white] text-black" value="">
                        हिन्दी
                      </option>
                    </select>
                  </div>
                  <button className="bg-red-600 px-[10px] rounded-[5px] text-white hover:bg-red-700 duration-500">
                    Sign In
                  </button>
                </div>
              </div>
            </header>
            <div className="max-w-[1170px] mx-auto sm:py-[150px] py-[50px] text-center text-white ">
              <h1 className="sm:text-[50px] text-[35px] font-bold">
                Unlimited movies, TV shows and more
              </h1>
              <h4 className="text-[25px] py-[15px]">
                Watch anywhere. Cancel anytime.
              </h4>
              <p className="text-[20px]">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
              <div className="max-w-[700px] mx-auto sm:px-[10px] px-[40px] mt-[30px]">
                <form
                  action=""
                  className="grid gap-2 sm:grid-cols-[60%_auto] grid-cols-1 mx-auto"
                >
                  <input
                    type="text"
                    className="border-[1px] border-[#ccc] pl-[20px] rounded bg-transparent h-[60px]"
                    placeholder="Email Address"
                  />
                  <button className="bg-red-600 w-48 mx-auto rounded-[5px] text-2xl text-white hover:bg-red-700 duration-500 font-medium">
                    Get Started
                    <MdOutlineKeyboardArrowRight className="text-white text-3xl inline" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Header;