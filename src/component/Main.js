import { useEffect, useState } from "react";
import banner from "../images/pexels-photo-1598507.jpeg";
import { FaHeart } from "react-icons/fa";
const Main = (props) => {
  const [term, setTerm] = useState("");
  
  const {selectedOption, setSelectedOption} = props;
  const searchedResult = props.data.filter(({title}) => {
        return title.toLowerCase().indexOf(term.toLowerCase()) >= 0
  }).map((item) => {
    const { id, title, price, description, category, image } = item;
    return (
      <div className="col" key={id}>
        <img src={image} />
        <h4>
          {item.title.length > 40
            ? title.substring(0, 40) + "..."
            : title}
        </h4>
        <h5>$ {price}</h5>
        <FaHeart />
      </div>
    );
  });
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    if(selectedValue === "Desc"){
      props.setData([...props.data.sort((a,b) => b.price - a.price)])
  }
  else{
    props.setData([...props.data.sort((a,b) => a.price - b.price)])
  }
    
  };
  return (
    <div className="rightWrapper">
      <p className="breadcrumb"><a href="#">Clothing</a> / <a href="#">Women’s</a> / Outerwear</p>
      <div className="dFlex justifyBetween rightTop">
        <h4>{searchedResult.length} Results</h4>
        <div className="inputWrapper">
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type="text"
            placeholder="search here..."
          />
        </div>
        <select onChange={handleChange} value={selectedOption}>
        <option value="" disabled>Sort By Price</option>
        <option value="Asc">Asc</option>
        <option value="Desc">Desc</option>
       
      </select>
      </div>
      <div className="dFlex flexWrap">
        {searchedResult.length > 0 ? searchedResult : "No Results..."}
      </div>
    </div>
  );
};
export default Main;
