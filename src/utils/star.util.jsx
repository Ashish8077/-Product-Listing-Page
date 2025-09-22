import { Star } from "lucide-react";

export const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      );
    } else if (i === Math.floor(rating) + 1 && rating % 1 >= 0.5) {
      stars.push(
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-200" />
      ); // half star logic
    } else {
      stars.push(<Star key={i} className="w-4 h-4 text-gray-300" />);
    }
  }
  return stars;
};