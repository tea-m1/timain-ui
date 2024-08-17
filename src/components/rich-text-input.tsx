import {RichTextEditor} from "@/features/wisiwig/RichTextEditor";
import {useInput} from "react-admin";

export const RichTextInput: React.FC<{source: string}> = ({source}) => {
  const {field} = useInput({source});
  return (
    <RichTextEditor
      hasToolbar
      onChange={(text) => {
        field.onChange(text);
      }}
    />
  );
};
