import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";



const Question = () => {
  const [show ,setShow] = useState(false);
  const [show1 ,setShow1] = useState(false);
  const [show2 ,setShow2] = useState(false);
  const [show3 ,setShow3] = useState(false);
  const [show4 ,setShow4] = useState(false);
  const [show5 ,setShow5] = useState(false);
 
  
   return (
     <section className="w-[100%] bg-black border-t-[8px] border-t-[#605d5d] sm:py-[50px] py-[50px]">
       <div className="max-w-[1170px] mx-auto ">
         <h2 className="sm:text-5xl text-3xl font-bold text-white text-center">
           Frequently Asked Questions
         </h2>
 
         <div className="py-10 w-[80%] mx-auto">
           <div className="text-white bg-[#2d2d2d] mb-2">
             <div
               onClick={() => setShow(!show)}
               className="p-4 text-2xl relative border-b-2 border-black hover:bg-[rgb(78,78,78)] duration-300 cursor-pointer"
             >
               <h3>What is Netflix?</h3>
               <span className="absolute right-[2%] top-[18%] text-4xl rotate-90">
                 {show ? <RxCross1 /> : <AiOutlinePlus />}
               </span>
             </div>
             {show && (
               <div className="text-2xl scale-y-100 p-[20px] h-auto origin-top">
                 <p className="p-3">
                   Netflix is a streaming service that offers a wide variety of
                   award-winning TV shows, movies, anime, documentaries and more–
                   on thousands of internet-connected devices.
                 </p>
                 <p className="p-3">
                   You can watch as much as you want, whenever you want, without
                   a single ad – all for one low monthly price. There's always
                   something new to discover, and new TV shows and movies are
                   added every week!
                 </p>
               </div>
             )}
           </div>
           <div className="text-white bg-[#2d2d2d] mb-2">
             <div
               onClick={() => setShow1(!show1)}
               className="p-4 text-2xl relative border-b-2 border-black hover:bg-[rgb(78,78,78)] duration-300 cursor-pointer"
             >
               <h3>How much does NetFlix Cost?</h3>
               <span className="absolute right-[2%] top-[18%] text-4xl rotate-90">
                 {show1 ? <RxCross1 /> : <AiOutlinePlus />}
               </span>
             </div>
             {show1 && (
               <div className="text-2xl scale-y-100 p-[20px] h-auto origin-top">
                 <p className="p-3">
                   Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                   streaming device, all for one fixed monthly fee. Plans range
                   from ₹149 to ₹649 a month. No extra costs, no contracts.
                 </p>
               </div>
             )}
           </div>
           <div className="text-white bg-[#2d2d2d] mb-2">
             <div
               onClick={() => setShow2(!show2)}
               className="p-4 text-2xl relative border-b-2 border-black hover:bg-[rgb(78,78,78)] duration-300 cursor-pointer"
             >
               <h3>Where Can I Watch?</h3>
               <span className="absolute right-[2%] top-[18%] text-4xl rotate-90">
                 {show2 ? <RxCross1 /> : <AiOutlinePlus />}
               </span>
             </div>
             {show2 && (
               <div className="text-2xl scale-y-100 p-[20px] h-auto origin-top">
                 <p className="p-3">
                   Watch anywhere, anytime. Sign in with your Netflix account to
                   watch instantly on the web at netflix.com from your personal
                   computer or on any internet-connected device that offers the
                   Netflix app, including smart TVs, smartphones, tablets,
                   streaming media players and game consoles.
                 </p>
                 <p className="p-3">
                   You can also download your favourite shows with the iOS or
                   Android app. Use downloads to watch while you're on the go and
                   without an internet connection. Take Netflix with you
                   anywhere.
                 </p>
               </div>
             )}
           </div>
           <div className="text-white bg-[#2d2d2d] mb-2">
             <div
               onClick={() => setShow3(!show3)}
               className="p-4 text-2xl relative border-b-2 border-black hover:bg-[rgb(78,78,78)] duration-300 cursor-pointer"
             >
               <h3>How do I Cancel?</h3>
               <span className="absolute right-[2%] top-[18%] text-4xl rotate-90">
                 {show3 ? <RxCross1 /> : <AiOutlinePlus />}
               </span>
             </div>
             {show3 && (
               <div className="text-2xl scale-y-100 p-[20px] h-auto origin-top">
                 <p className="p-3">
                   Netflix is flexible. There are no annoying contracts and no
                   commitments. You can easily cancel your account online in two
                   clicks. There are no cancellation fees – start or stop your
                   account anytime.
                 </p>
               </div>
             )}
           </div>
           <div className="text-white bg-[#2d2d2d] mb-2">
             <div
               onClick={() => setShow4(!show4)}
               className="p-4 text-2xl relative border-b-2 border-black hover:bg-[rgb(78,78,78)] duration-300 cursor-pointer"
             >
               <h3>What Can I Watch on Netflix?</h3>
               <span className="absolute right-[2%] top-[18%] text-4xl rotate-90">
                 {show4 ? <RxCross1 /> : <AiOutlinePlus />}
               </span>
             </div>
             {show4 && (
               <div className="text-2xl scale-y-100 p-[20px] h-auto origin-top">
                 <p className="p-3">
                   Netflix has an extensive library of feature films,
                   documentaries, TV shows, anime, award-winning Netflix
                   originals, and more. Watch as much as you want, anytime you
                   want.
                 </p>
               </div>
             )}
           </div>
           <div className="text-white bg-[#2d2d2d] mb-2">
             <div
               onClick={() => setShow5(!show5)}
               className="p-4 text-2xl relative border-b-2 border-black hover:bg-[rgb(78,78,78)] duration-300 cursor-pointer"
             >
               <h3>Is NetFlix good for Kids?</h3>
               <span className="absolute right-[2%] top-[18%] text-4xl rotate-90">
                 {show5 ? <RxCross1 /> : <AiOutlinePlus />}
               </span>
             </div>
             {show5 && (
               <div className="text-2xl scale-y-100 p-[20px] h-auto origin-top">
                 <p className="p-3">
                   The Netflix Kids experience is included in your membership to
                   give parents control while kids enjoy family-friendly TV shows
                   and films in their own space.
                 </p>
                 <p className="p-3">
                   Kids profiles come with PIN-protected parental controls that
                   let you restrict the maturity rating of content kids can watch
                   and block specific titles you don’t want kids to see.
                 </p>
               </div>
             )}
           </div>
         </div>
         <p className="text-[20px] text-white text-center sm:p-0 p-3">
           Ready to watch? Enter your email to create or restart your membership.
         </p>
         <div className="max-w-[700px] mx-auto sm:px-[10px] px-[40px] mt-[30px]">
           <form
             action=""
             className="grid gap-2 sm:grid-cols-[60%_auto] grid-cols-1 mx-auto"
           >
             <input
               type="text"
               className="border-[1px] border-[#ccc] pl-[20px] text-white rounded bg-gray-900 h-[60px]"
               placeholder="Email Address"
             />
             <button className="bg-red-600 w-48 mx-auto rounded-[5px] text-2xl text-white hover:bg-red-700 duration-500 font-medium">
               Get Started
               <MdOutlineKeyboardArrowRight className="text-white text-3xl inline" />
             </button>
           </form>
         </div>
       </div>
     </section>
   );
 };
 
 export default Question;
  
  

