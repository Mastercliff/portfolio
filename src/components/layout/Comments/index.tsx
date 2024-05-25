
import { CommentType } from "@/data/CommentsData";
import CommentCard from "./CommentCard";

type CommentsProps = {
	comments: CommentType[]
}

export default function Comments({ comments }: CommentsProps) {
	return <div className="flex flex-col items-center justify-center h-[400px]">
		<div className="flex items-center justify-center text-xl font-medium text-center text-white/90 mb-8">Comentários que Inspiram</div>

		<div className="max-w-[1200px] w-full overflow-hidden rounded-xl ring-1 ring-white/5 ">
			<div className="w-full grid grid-cols-1 transition-all duration-500 bg-gradient-to-tl from-slate-900 via-slate-800 to-slate-900/70 bg-size-200 bg-pos-100 hover:bg-pos-0">
				{
					comments.map( comment => (<CommentCard commentData={comment}/>))
				}
			</div>
		</div>
	</div>
}