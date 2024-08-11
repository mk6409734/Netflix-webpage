import { IoLanguage } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-[100%] bg-black border-t-[8px] border-t-[#605d5d] sm:py-[50px] py-[50px]">
      <div className="max-w-[1170px] mx-auto px-5">
        <h3 className="text-gray-300">
          Questions? Call
          <a href="tel:000-800-919-1694" className="underline ml-2">
            000-800-919-1694
          </a>
        </h3>

        <div className="grid sm:grid-cols-4 grid-cols-2 py-3 text-gray-400">
          <div>
            <ul>
              <li className="mb-5">
                <a href="/" className="underline">
                  FAQ
                </a>
              </li>
              <li className="mb-5">
                <a href="/" className="underline">
                  Investor Relations
                </a>
              </li>
              <li className="mb-5">
                <a href="/" className="underline">
                  Privacy
                </a>
              </li>
              <li className="mb-5">
                <a href="/" className="underline">
                  Speed Test
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="mb-5">
                <a href="/" className="underline">
                  Help Centre
                </a>
              </li>
              <li className="mb-5">
                <a href="/" className="underline">
                  Jobs
                </a>
              </li>
              <li className="mb-5">
                <a href="/" className="underline">
                  Cookie Preferences
                </a>
              </li>
              <li className="mb-5">
                <a href="/" className="underline">
                  Legal Notices
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="mb-5">
                <a href="/" className="underline">
                  Account
                </a>
              </li>
              <li className="mb-5">
                <a href="/" className="underline">
                  Ways to Watch
                </a>
              </li>
              <li className="mb-5">
                <a href="/" className="underline">
                  Corporate Information
                </a>
              </li>
              <li className="mb-5">
                <a href="/" className="underline">
                  Only on Netflix
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="mb-5">
                <a href="/" className="underline">
                  Media Centre
                </a>
              </li>
              <li className="mb-5">
                <a href="/" className="underline">
                  Terms of Use
                </a>
              </li>
              <li className="mb-5">
                <a href="/" className="underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
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
        </div>
          <h4 className="text-gray-300 mt-2">Netflix India</h4>
      </div>
    </footer>
  );
};

export default Footer;
