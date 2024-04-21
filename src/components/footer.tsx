import { useState } from 'react';
import { Modal } from './modal';
import { ReactComponent as TGLogoSvg } from '../img/tg.svg';

export function Footer(){
    const [teamModal, setTeamModal] = useState(false);
    const [techModal, setTechModal] = useState(false);
    const [aboutModal, setAboutModal] = useState(false);

    return(
        <footer 
        className="flex-shrink-0 text-center p-0 m-0 m-t-[0.5vmin] box-border w-full">
            <div className="m-0 p-[1vmin] pt-[1.6vmin] flex justify-evenly text-[3vmin]">

                <button onClick={() => {setAboutModal(true)}} className="btn btn-light text-[3vmin]">
                    О проекте
                </button>

                <button onClick={() => {setTechModal(true)}} className="btn btn-light text-[3vmin]">
                    О технологии
                </button>

                <button onClick={() => {setTeamModal(true)}} className="btn btn-light text-[3vmin]">
                    Команда проекта
                </button>
                {aboutModal && 
                    <Modal title = "О проекте" onClose={() => {setAboutModal(false)}}> 
                    <p className="text-left text-[2.5vmin]"> 
                    TODO</p>
                    </Modal>
                }

                {techModal && 
                    <Modal title = "О технологии" onClose={() => {setTechModal(false)}}> 
                    <p className="text-left text-[2.5vmin]"> 
                    
                    TODO
                    </p>
                    </Modal>

                }
                {teamModal && 
                    <Modal title = "Команда" onClose={() => {setTeamModal(false)}}> 

                        <div className='m-0 grid grid-rows-5 text-center grid-cols-[32vmin_30vmin_12vmin] text-[2.5vmin] w-[69vmin] h-[64vmin]'>
                                <div className='p-[1vmin]'>Халимов Исмоилджон Халимджонович</div>

                                <div className='text-center font-bold p-[1vmin]'>Team Leader</div>

                                <TGLogoSvg className="w-[8vmin] h-[8vmin] hover:cursor-pointer" href="/#" onClick={()=>window.open("https://t.me/ihalimov")} />

                                <div className='p-[1vmin]'>Ибрагимов Далгат Магомедалиевич </div> 

                                <div className='font-bold p-[1vmin]'>WEB-разработчик</div>

                                <TGLogoSvg className="w-[8vmin] h-[8vmin] hover:cursor-pointer" href="/#" onClick={()=>window.open("https://t.me/lock_R")}/>

                                <div className='p-[1vmin]'>Галкин Алексей Дмитриевич</div>
                                
                                <div className='font-bold p-[1vmin]' >Маркетолог</div>

                                <TGLogoSvg className="w-[8vmin] h-[8vmin] hover:cursor-pointer" href="/#" onClick={()=>window.open("https://t.me/Kaiser_Red")} />

                                <div className=' p-[1vmin]'>Сибирцев Роман Денисович </div>
                                
                                <div className='font-bold p-[1vmin]'>ML-Engineer</div>

                                <TGLogoSvg className="w-[8vmin] h-[8vmin] hover:cursor-pointer" href="/#" onClick={()=>window.open("https://t.me/r_sibirtsev")}/>
                                
                                <div className='p-[1vmin]'>Кочкожаров Иван Вячеславович</div> 

                                <div className='font-bold p-[1vmin]'>Дизайнер</div>

                                <TGLogoSvg className="w-[8vmin] h-[8vmin] hover:cursor-pointer" href="/#" onClick={()=>window.open("https://t.me/kuopio1")}/>
                        </div>
                    </Modal>
                }
            </div>
         </footer>
    );
}
