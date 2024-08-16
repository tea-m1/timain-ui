import {FC} from "react";
import {Editor as TinyMCE, IAllProps} from "@tinymce/tinymce-react";
import {TINY_MCE_API_KEY} from "@/config/env";
import {NO_OP} from "@/lib/nullish";
import {cn} from "@/lib/utils";

// FIXME: Doesn't apply since tiny_mce style is scoped in a shadow host
// import "@/features/wisiwig/themes/poimandres.css";

// Plugins to enable.
// Refer to https://www.tiny.cloud/docs/tinymce/latest/plugins for more info.
const ACTIVE_PLUGINS = [
  "advlist",
  "autolink",
  "lists",
  "link",
  "image",
  "charmap",
  "preview",
  "anchor",
  "searchreplace",
  "visualblocks",
  "code",
  "fullscreen",
  "insertdatetime",
  "media",
  "table",
  "code",
  "codesample",
  "help",
  "wordcount",
];

// Refer to https://www.tiny.cloud/docs/tinymce/latest/toolbar-configuration-options/ for more info
// @ts-ignore
const TOOLBAR_LAYOUT = [
  "undo redo",
  "blocks",
  "bold italic",
  "forecolor",
  "alignleft aligncenter ",
  "alignright alignjustify",
  "bullist numlist outdent indent codesample",
  "removeformat",
  "help",
].join(" | ");

// Intentionally type as any for simplicity
// Refer to https://www.tiny.cloud/docs/tinymce/latest/editor-important-options/ for more info.
const TINY_MCE_CONFIGURATION: IAllProps["init"] = {
  plugins: ACTIVE_PLUGINS,
  // replace with `TOOLBAR_LAYOUT` to display toolbar
  toolbar: false,
  skin: "borderless",
  // word count, watermark (!)
  statusbar: false,
  // show ctx menu for basic cmd on select
  quickbars_insert_toolbar: false,
  menubar: false,
  // control its height by element's height wrapping it
  height: "100%",
  width: "100%",
  content_css: "writer",
  images_upload_handler: () => {
    return Promise.resolve("");
  },
};

export interface RichTextEditorProps {
  children?: string;
  className?: string;
  id?: string;
  disabled?: boolean;
  hasToolbar?: boolean;
  onInit?: IAllProps["onInit"];
  onChange?: IAllProps["onEditorChange"];
  onUploadImage?: (typeof TINY_MCE_CONFIGURATION)["images_upload_handler"];
}

/**
 * TinyMCE wrapper that has our configuration.
 */
export const RichTextEditor: FC<RichTextEditorProps> = ({
  id,
  hasToolbar,
  className,
  children = "",
  disabled = false,
  onInit = NO_OP,
  onChange = NO_OP,
  onUploadImage = NO_OP,
}) => {
  return (
    <div className={cn("h-full w-full", className)}>
      <TinyMCE
        id={id}
        initialValue={children}
        disabled={disabled}
        onInit={onInit}
        onEditorChange={onChange}
        apiKey={TINY_MCE_API_KEY}
        init={{
          ...TINY_MCE_CONFIGURATION,
          toolbar: hasToolbar ? TOOLBAR_LAYOUT : false,
          images_upload_handler: onUploadImage,
        }}
      />
    </div>
  );
};
