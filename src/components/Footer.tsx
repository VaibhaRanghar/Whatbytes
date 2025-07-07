import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-blue-950 text-white text-sm px-6 py-8">
      <div className="max-w-6xl mx-auto grid sm:pl-32 grid-cols-2 md:grid-cols-3">
        <div className="space-y-3">
          <h2 className="font-semibold text-white text-lg">Filters</h2>
          <p className="text-slate-300">All ElEZronk</p>
        </div>

        <div className="space-y-3">
          <h2 className="font-semibold text-white text-lg">About Us</h2>
          <ul className="space-y-1 text-slate-300">
            <li>About us</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="font-semibold text-white text-lg">Follow Us</h2>
          <div className="flex gap-4 pt-1">
            <FaFacebook size={20} className="hover:text-blue-400 transition" />
            <FaTwitter size={20} className="hover:text-sky-400 transition" />
            <FaInstagram size={20} className="hover:text-pink-400 transition" />
          </div>
        </div>
      </div>
      <div className="pt-8 sm:max-w-6xl sm:m-auto sm:pl-32 text-slate-400 text-xs">
        &copy; 2024 American.
      </div>
    </footer>
  );
}

export default Footer;
