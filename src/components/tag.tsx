import {Link} from "react-router-dom";

export interface TagProps {
  tag: string;
}

export const Tag: React.FC<TagProps> = ({tag}) => {
  return (
    <Link className="text-green-700 hover:underline" to={`?tag=${tag}`}>
      #{tag}
    </Link>
  );
};
