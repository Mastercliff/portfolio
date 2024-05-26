import { Button, Dialog as HeadDialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { X as XIcon } from 'lucide-react'
import { CSSProperties, ReactNode, useState } from 'react'

type DialogProps = {
	open: boolean,
	setOpen: (value: boolean) => void,
	title?: string
	content?: string | ReactNode
	size?: "sm" | "md" | "lg" | "xl",
	customPanelClass?: string,
	style?: CSSProperties
}

export default function Dialog({open, setOpen, content, title, size = "md", customPanelClass, style}: DialogProps) {
  let [isOpen, setIsOpen] = useState(open)

  const close = () => {
	setOpen(false)
    setIsOpen(false)
  }

  const dialogSizes = {
	"sm": "w-[360px]",
	"md": "w-[560px]",
	"lg": "w-[960px]",
	"xl": "w-[1460px]"
  }


  return (
    <>
      <Transition appear show={open}>
        <HeadDialog as="div" className="relative z-10 focus:outline-none" onClose={close}>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className={`${dialogSizes[size]} rounded-xl bg-slate-900/10 p-6 backdrop-blur-2xl space-y-4 shadow-md ring-1 ring-white/5 ${customPanelClass}`} style={style}>
                  <DialogTitle as="h3" className="text-base/7 font-medium text-white">
					<div className='flex flex-row justify-between items-center'>
						<span>
							{title}
						</span>

						<span onClick={close} className="rounded-full bg-white/10 p-2 shadow-md cursor-pointer ring-1 ring-inset ring-white/5">
								<XIcon className="text-gray-300" size={14}/>
						</span>
					</div>
                  </DialogTitle>

				  {
					content
				  }
                  
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </HeadDialog>
      </Transition>
    </>
  )
}