import { Star } from "lucide-react";

export default function Stars() {
  return (
    <ul className="flex gap-1 ">
      {[...Array(5)].map((item) => {
        return (
          <li className=" text-yellow-500 cursor-pointer">
            <Star className="fill-yellow-500" />
          </li>
        );
      })}
    </ul>
  );
}
