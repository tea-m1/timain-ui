import {Link} from "react-router-dom";
import {Button} from "../../components/ui/button";

interface BackButtonProps {
  label: string;
  href: string;
}

const BackButton = ({label, href}: BackButtonProps) => {
  return (
    <Button variant="link" className="w-full font-normal" size="sm" asChild>
      <Link to={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
