// components/StarRating.jsx
import { Star } from "lucide-react";

export default function StarRating({ value, count }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(value)) {
      
      stars.push(
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      );
    } else if (i === Math.floor(value) + 1 && value % 1 >= 0.5) {
  
      stars.push(
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-200" />
      );
    } else {
     
      stars.push(<Star key={i} className="w-4 h-4 text-gray-300" />);
    }
  }

  return (
    <div className="flex items-center gap-1">
      {stars}
     
    </div>
  );
}
