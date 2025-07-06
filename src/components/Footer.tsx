import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="p-5 px-10 bg-blue-950 text-white text-sm">
      <div className="flex justify-between text-left ">
        <div className="flex flex-col gap-3">
          <h2>Filters</h2>
          <span>All&emsp;ElEZronk</span>
        </div>
        <div className="flex flex-col justify-between gap-3">
          <h2>About Us</h2>
          <span>About us</span>
          <span>Contact</span>
        </div>
        <div>
          <h2>Follow Us</h2>
          <div className="flex gap-3 pt-4">
            <FaFacebook size={25} />
            <FaTwitter size={25} />
            <FaInstagram size={25} />
          </div>
        </div>
      </div>
      <p className="">&copy;2024 American</p>
    </footer>
  );
}

export default Footer;
