import {ReactNode} from 'react'

interface ModalProps {
  children: ReactNode
  title: string
  onClose: () => void
}

export function Modal({ children, title, onClose }: ModalProps) {
  return (
    <div className='text-black'>
      <div className="fixed bg-black/50 top-0 right-0 left-0 bottom-0" onClick={onClose} />
      <div className="w-[80vmin] h-[80vmin] p-[3vmin] rounded-[1.5vmin] bg-white absolute top-[2vmin] left-1/2 -translate-x-1/2">
        <h1 className="text-[3vmin] font-semibold text-center mb-[1.5vmin]">{ title }</h1>
        { children }
      </div>
    </div>
  )
}
