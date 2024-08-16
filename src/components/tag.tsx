import {Link, useSearchParams} from "react-router-dom";

export interface TagProps {
  tag: string;
}

export const Tag: React.FC<TagProps> = ({tag}) => {
  const [p, setSearchParams] = useSearchParams();

  const onTagClick = () => {
    const entries = Object.fromEntries(p.entries());
    const previousTags = (entries["tags"] ?? "").split(",");
    const tags = new Set(previousTags.filter((tag) => !!tag));
    tags.add(tag);

    const newTags = Array.from(tags).join(",");
    setSearchParams(new URLSearchParams({...entries, tags: newTags}));
  };

  return (
    <div
      className="text-green-700 hover:underline"
      role="button"
      onClick={onTagClick}
    >
      #{tag}
    </div>
  );
};
