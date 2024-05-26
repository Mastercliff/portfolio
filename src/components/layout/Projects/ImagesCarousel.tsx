import { DotButton, useDotButton } from '@/components/shared/CarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from '@/components/shared/CarouselArrowButtons'
import useEmblaCarousel  from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel';
import { useCallback, useState } from "react";
import Dialog from '@/components/shared/Dialog';

type ImagesCarouselProps = {
	slides: string[]
	options: Partial<EmblaOptionsType>
}

const ImagesCarousel = ({slides, options }: ImagesCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

	const [currentImage, setCurrentImage] = useState(0);
	const [isViewerOpen, setIsViewerOpen] = useState(false);

	const openImageViewer = useCallback((index: number) => {
		setCurrentImage(index);
		setIsViewerOpen(true);
	  }, []);

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick
	} = usePrevNextButtons(emblaApi)

	return (
		<section className="embla max-w-[48rem]">
		<div className="overflow-hidden w-full" ref={emblaRef}>
			<div className="embla__container">
			{slides.map((image: string, index: number) => (
				<div className="flex-c min-w-0 pl-4" key={index}>
				<div className="flex items-center justify-center h-[19rem] w-full m-2 text-white/70">
						<img className='w-full h-full rounded-xl' src={image} style={{objectFit: "cover"}} onClick={() => {
							if(selectedIndex > index) {
								onPrevButtonClick()
							}

							if(selectedIndex < index) {
								onNextButtonClick()
							}

							openImageViewer(index)
						}}/>
				</div>
				</div>
			))}
			</div>
		</div>

		<div className="flex flex-row justify-between items-center mt-4">
			<div className="flex flex-row jitems-center space-x-4">
			<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
			<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
			</div>

			<div className="space-x-2">
			{scrollSnaps.map((_, index) => (
				<DotButton
				key={index}
				onClick={() => onDotButtonClick(index)}
				className={'rounded-full ring-1 ring-white/10 text-white-60 h-3 w-3'.concat(
					index === selectedIndex ? ' ring-2 ring-white bg-white/10' : ''
				)}
				/>
			))}
			</div>
		</div>
		
			<Dialog

				content={<div className='flex flex-row items-center justify-center'>
					<img className='rounded-xl' src={slides[currentImage]}/>
				</div>}
				open={isViewerOpen}
				setOpen={setIsViewerOpen}
				customPanelClass='bg-transparent ring-0 backdrop-blur-none w-[1660px] h-full'
			/>
		</section>
	)
}

export default ImagesCarousel
