import { MarkdownProps } from "@/interfaces";
import ReactMarkdown from "react-markdown";
import remark from "remark-gfm";

export default function Markdown({ children }: MarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remark]}
      components={{
        h1: ({ ...props }) => (
          <h1 className="text-heading-lg text-white" {...props} />
        ),
        h2: ({ ...props }) => (
          <h2 className="text-heading-md text-white" {...props} />
        ),
        p: ({  ...props }) => (
          <p className="text-body-md !text-white" {...props} />
        ),
        ul: ({ ...props }) => (
          <ul className="list-disc list-inside text-body-md !text-white" {...props} />
        ),
        
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
