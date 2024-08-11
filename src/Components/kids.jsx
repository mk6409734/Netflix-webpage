import Kid from '../images/kids.png'

const Kids = () => {
    return (
      <section className="w-[100%] bg-black border-t-[8px] border-t-[#605d5d] sm:py-[50px] py-[50px]">
        <div className="max-w-[1170px] mx-auto ">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center">
            <figure className="relative sm:order-1 order-2">
              <img src={Kid} alt="" className="" />
            </figure>
            <div className="text-white sm:text-left text-center sm:order-2 order-1">
              <h1 className="sm:text-5xl text-3xl font-bold">
                Create profiles for kids
              </h1>
              <h4 className="sm:text-2xl text-[20px] pt-3">
                Send children on adventures with their favourite
              </h4>
              <h4 className="sm:text-2xl p-1 sm:p-0 text-[20px]">
                characters in a space made just for them—free with
              </h4>
              <h4 className="sm:text-2xl text-[20px]">your membership.</h4>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Kids;