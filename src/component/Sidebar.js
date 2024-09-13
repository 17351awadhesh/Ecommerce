import { FaCross } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Sidebar = (props) => {
  const {
    selectedCategories,
    setSelectedCategories,
    data,
    setData,
    initialData,
    visible,
    toggleSidebar,
  } = props;
  let category = props.catagoryData.map((item, index) => {
    return (
      <li key={index}>
        <label>
          <input
            type="checkbox"
            onChange={(e) => {
              let updatedCategories = [];

              if (e.target.checked) {
                updatedCategories = [
                  ...selectedCategories,
                  item?.toLowerCase(),
                ];
              } else {
                updatedCategories = selectedCategories.filter(
                  (x) => x.toLowerCase() !== item.toLowerCase()
                );
              }
              setSelectedCategories(updatedCategories);
              if (updatedCategories?.length)
                setData(
                  initialData.filter((x) =>
                    updatedCategories?.includes(x.category.toLowerCase())
                  )
                );
              else setData(initialData);
            }}
          />{" "}
          {item}
        </label>
      </li>
    );
  });
  return (
    <div
      className={
        visible ? "sidebarWrapper relative" : "sidebarWrapper relative active"
      }
    >
      <div className="closeSidebar" onClick={toggleSidebar}>
        <FaXmark />
      </div>
      <p className="breadcrumb">
        <a href="#">Clothing</a> / <a href="#">Women’s</a> / Outerwear
      </p>
      <h3>Filter</h3>
      <h4>Categories</h4>
      <ul>{category}</ul>
      <button className="sidebarResults">{`See ${initialData?.length} Resuts`}</button>
    </div>
  );
};
export default Sidebar;
