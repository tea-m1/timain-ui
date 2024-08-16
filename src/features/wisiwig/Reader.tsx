import "./style.css";

export interface ReaderProps {
  children: string;
  className?: string;
}

export const MarkdownReader: React.FC<ReaderProps> = ({
  children,
  className = "",
}) => (
  <div
    className={`markdown-view p-4 text-gray-800 ${className}`}
    data-testid="markdown-viewer"
    dangerouslySetInnerHTML={{__html: children}}
  ></div>
);
