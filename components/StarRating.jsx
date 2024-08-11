import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
// eslint-disable-next-line react/prop-types
const StarRating = ({ rating }) => {
  const thisRating = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <FaStar />
        ) : rating >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  return <div className="flex text-yellow-500">{thisRating}</div>;
};

export default StarRating;
