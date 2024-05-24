import { EmblaCarouselType } from 'embla-carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react'

export const usePrevNextButtons = (emblaApi?: EmblaCarouselType) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  }
}

export const PrevButton = (props: any) => {
  const { children, ...restProps } = props

  return (
    <button
      className="embla__button embla__button--prev rounded-full p-1 ring-1 ring-white/5"
      type="button"
      {...restProps}
    >
		<ChevronLeft className='text-white/60' size={20}/>
      {children}
    </button>
  )
}

export const NextButton = (props: any) => {
  const { children, ...restProps } = props

  return (
    <button
      className="embla__button embla__button--next rounded-full p-1 ring-1 ring-white/5"
      type="button"
      {...restProps}
    >
      <ChevronRight className='text-white/60' size={20}/>
      {children}
    </button>
  )
}