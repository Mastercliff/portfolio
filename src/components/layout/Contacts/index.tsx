import Card from '@/components/shared/Card'
import { Mail, Phone } from 'lucide-react'

export default function Contacts () {
	return <div className="flex flex-col items-center justify-center h-[900px]">
	<div className="flex items-center justify-center text-2xl font-medium text-center text-white/90 mb-8"> Contatos &#x1F920;</div>

	<div className="max-w-[1200px] w-full flex flex-col items-center space-y-5">
		<div className="flex flex-col items-center text-white/80 max-w-[800px] text-lg text-center">
			<Card>
				Isso é tudo, obrigado pela paciência e por prestigiar meu projeto mais bonito até agora, caso tenha interesse fale comigo usando os seguintes contatos. Vamos trabalhar Juntos!
			</Card>

			<div className='my-4 flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0 w-full'>
				<div className="flex flex-row items-center justify-center ring-1 ring-white/10 p-3 px-6 text-white/80 rounded-xl space-x-2 hover:brightness-125 w-full">
					<Mail size={18}/> <span className='text-sm'>egarrido9898@gmail.com</span>
				</div>

				<div className="flex flex-row items-center justify-center ring-1 ring-white/10 p-3 px-6 text-white/80 rounded-xl space-x-2 hover:brightness-125 w-full">
					<Phone size={18}/> <span className='text-sm'>+55 (98) 98103-4321</span>
				</div>
			</div>

			<div>
				Não esqueça de dar uma olhada nas redes abaixo.
			</div>
		</div>

		<div className="w-full grid grid-cols-2 gap-2">
			<div className="flex flex-row items-center justify-center ring-1 ring-white/10 p-3 px-6 text-white/80 rounded-xl space-x-2 cursor-pointer hover:ring-white/30" onClick={() => {
				window.open("https://www.linkedin.com/in/elias-garrido-3609671a2/")
			}}>
				<i className="devicon-linkedin-plain"></i> <span>Linkedin</span>
			</div>

			<div className="flex flex-row items-center justify-center ring-1 ring-white/10 p-2 px-4 text-white/80 rounded-xl space-x-2 cursor-pointer hover:ring-white/30" onClick={() => {
				window.open("https://github.com/Mastercliff")
			}}>
				<i className="devicon-github-original"></i> <span>Github</span>
			</div>
		</div>
	</div>
</div>
}