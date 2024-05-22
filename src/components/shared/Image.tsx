import { CSSProperties } from "react"

type ImageProps = {
	width: string,
	height: string,
	fit?: CSSProperties["objectFit"],
	imageSrc: string,
	borderRadius?: string
}

export default function Image({
	height,
	width,
	fit,
	imageSrc,
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
				src={imageSrc}
				style={{ width: "100%", objectFit: fit }}
			/>
		</div>
}