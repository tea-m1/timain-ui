import {useState} from "react";
import {CreatableSelect} from "@/components/creatable-select";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {RichTextEditor} from "@/features/wisiwig/RichTextEditor";

export interface CommunityPostFormProps {
  base?: {
    id: string;
  };
}

export const CommunityPostForm: React.FC<CommunityPostFormProps> = ({base}) => {
  const [values, setValues] = useState();
  const [options, setOptions] = useState([]);

  return (
    <div className="flex flex-col space-y-6">
      <Label htmlFor="username">Contenu</Label>

      <RichTextEditor className="h-[20rem] rounded-md border border-gray-300 p-2 ring-0" />

      <CreatableSelect options={["one", "two", "three"]} />

      <div className="flex justify-end">
        <Button type="submit" className="bg-green-700 hover:bg-green-900">
          Sauvegarder
        </Button>
      </div>
    </div>
  );
};
