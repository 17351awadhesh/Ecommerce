import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="container">
        <div className="dFlex justifyBetween flexNoWrap footerInner">
          {/* start repeat */}
          <div className="">
            <h4>Account</h4>
            <ul>
              <li>
                <a href="#">Sign In</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
              <li>
                <a href="#">Order Status</a>
              </li>
            </ul>
          </div>
          {/* repeat end  */}
          {/* start repeat */}
          <div className="">
            <h4>About Us</h4>
            <ul>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          {/* repeat end  */}
          {/* start repeat */}
          <div className="">
            <h4>Help</h4>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Order Status</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
            </ul>
          </div>
          {/* repeat end  */}
          {/* start repeat */}
          <div className="">
            <h4>Follow Us!</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            <ul className="dFlex flexNoWrap">
              <li>
                <a href="#">
                    <img src={facebook} />
                </a>
              </li>
              <li>
                <a href="#">
                    <img src={instagram} />
                </a>
              </li>
              <li>
                <a href="#">
                <img src={twitter} />
                </a>
              </li>
            </ul>
          </div>
          {/* repeat end  */}
        </div>
      </div>
    </div>
  );
};
export default Footer;
