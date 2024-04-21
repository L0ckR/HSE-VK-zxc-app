import { useState} from 'react'
import { Modal } from './modal'

interface SourceTextInterface{
    full: string,
    short: string
}
export function SourceText ({full, short}:SourceTextInterface){
    
    const [sourceModal, setSourceModal] = useState(false);
    const [shortenedModal, setShortenedModal] = useState(false);
    return (
        <>
        <div className="flex flex-row w-[60vmin] sm:flex-col">
                <button onClick={() => {setSourceModal(true)}} className="btn btn-light text-[3vmin]">
                    Полный Текст
                </button>

                <button onClick={() => {setShortenedModal(true)}} className="btn btn-light text-[3vmin]">
                    Короткая версия
                </button>
        </div>
               
            <div className="flex flex-row sm:flex-col">
                {sourceModal && <Modal title = "Полный Текст" onClose={() => {setSourceModal(false)}}> 
                {short}
                </Modal>}
                {shortenedModal && <Modal title = "Короткий текст" onClose={() => {setShortenedModal(false)}}> 
                {full}
                </Modal>}
            </div>
        </>
    );
}