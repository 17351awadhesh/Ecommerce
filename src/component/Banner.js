import banner from "../images/pexels-photo-1598507.jpeg"
const Banner = () => {
    return(
        <div className="bannerWrapper relative">
            <img src={banner} />
            <div className="bannerText dFlex justifyCenter alignCenter">
                <h3 className="relative">Men's <br /> Outerwear</h3>
            </div>
        </div>
    )
}
export default Banner