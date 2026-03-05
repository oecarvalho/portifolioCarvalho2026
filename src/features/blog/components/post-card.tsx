import Image from "next/image"
import Link from "next/link"

type PostCardProps = {
    slug: string;
    title: string;
    description: string;
    image: string;
    date: string;
}

export const PostCard = ({ slug, title, description, image, date }: PostCardProps) => {
    return (
        // Link principal que envolve o card todo
        <Link href={`/blog/${slug}`} className="flex flex-col group">
            <div className="overflow-hidden border border-[#2a2a2b]">
                <Image
                    src={image}
                    width={500}
                    height={300}
                    alt={title} // Use o título como alt para melhor SEO
                    className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="flex flex-col mt-5">
                <div className="flex items-center gap-3 mb-2">
                    <p className="font-mono text-[#00D1FF] text-xs">Insights</p>
                    <div className="w-1 h-1 rounded-full bg-[#38ff38]"></div>
                    <p className="text-xs text-gray-500">{date}</p>
                </div>

                {/* REMOVI O LINK DAQUI - O h2 já será clicável pois o Link pai o envolve */}
                <h1 className="uppercase text-xl font-bold leading-snug group-hover:text-[#00D1FF] transition-colors">
                    {title}
                </h1>

                <p className="text-sm text-[#939393] mt-3 line-clamp-3">
                    {description}
                </p>
            </div>
        </Link>
    )
}