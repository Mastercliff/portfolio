import Card from "@/components/shared/Card";
import Image from "@/components/shared/Image";
import { CommentType } from "@/data/CommentsData";

type CommentCardProps = {
	commentData: CommentType
}

export default function CommentCard ({ commentData }: CommentCardProps) {
	return  <div className="backdrop-blur text-white ring-transparent bg-transparent max-w-[560px] p-6">
		<div className="flex flex-col">
			<div className="text-sm">
				"{commentData.comment}"
			</div>
			<div className="flex flex-row space-x-2 mt-4">
				<div>

					<img src={commentData.image} height={"50px"} width={"50px"} className="rounded-full" />
				</div>

				<div className="">
					<div className="font-medium text-white/70">
						{commentData.name}
					</div>

					<div className="text-xs text-white/70">
						{commentData.position}
					</div>
				</div>
			</div>
		</div>
	</div>
}