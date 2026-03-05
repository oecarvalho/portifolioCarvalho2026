import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
type MarkdownProps = {
    content: string,

}

export const Markdown = ({ content }: MarkdownProps) => {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
                p: ({children}) => (
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">{children}</p>
                ),

                blockquote: ({children}) => (
                    <blockquote className="border-l-4 border-[#00D1FF] pl-6 my-10 italic text-xl text-white">{children}</blockquote>
                ),
        }}
        
        >
    { content }
        </ReactMarkdown >
    )
}