import {categoriesData} from "@lib/categoriesData";
import Link from "next/link";

const Tags = () => {
  return (
    <div className="tags-container">
      {categoriesData.map((category, index) => (
        <Link key={index} href={category.url}>
          <a className="tag-button" style={{ margin: '5px', padding: '10px' }}>{category.name}</a>
        </Link>
      ))}
    </div>
  );
};

export default Tags;
