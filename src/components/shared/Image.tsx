import { CSSProperties } from "react"

type ImageProps = {
	width: string,
	height: string,
	fit?: CSSProperties["objectFit"],
	src: string,
	borderRadius?: string
}

export default function Image({
	height,
	width,
	fit,
	src,
	borderRadius
}: ImageProps){
	return <div
			style={{
				width,
				height,
				borderRadius: borderRadius || "20px",
				overflow: "hidden",
				backgroundColor: "blue",
				display: "inline-block",
				verticalAlign: "middle",
			}}
		>
			<img
				src={src}
				style={{ width: "100%", objectFit: fit }}
			/>
		</div>
}