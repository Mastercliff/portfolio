
import { CommentType } from "@/data/CommentsData";
import CommentCard from "./CommentCard";
import { MessageCircleCodeIcon } from "lucide-react";

type CommentsProps = {
	comments: CommentType[]
}

export default function Comments({ comments }: CommentsProps) {
	return <div className="flex flex-col items-center justify-center max-h-[600px]">
		<div className="flex flex-row justify-center space-x-2 mb-8 text-white/80">
		<MessageCircleCodeIcon size={32}/> <div className="font-medium text-2xl">Comentários que Inspiram</div>
		</div>

		<div className="max-w-[1200px] w-full overflow-hidden rounded-xl ring-1 ring-white/5 ">
			<div className="w-full grid grid-cols-1 transition-all duration-500 bg-gradient-to-tl from-slate-900 via-slate-800 to-slate-900/70 bg-size-200 bg-pos-100 hover:bg-pos-0">
				{
					comments.map( comment => (<CommentCard commentData={comment}/>))
				}
			</div>
		</div>
	</div>
}