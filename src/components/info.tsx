import axios, { AxiosError } from 'axios'
import { SERVER_URI } from '../config';
import { ResultForm } from './resultForm'
import { resultProps } from './resultForm';
import {ChangeEvent, useState, FormEvent, useEffect} from 'react';
import { loremIpsum } from 'lorem-ipsum';


export function Info(){
    const defaultResult: resultProps = {
        classOfWebSite: "Тип новости",
        tags: ['Тэг1', 'Тэг2','Тэг3','Тэг4','Тэг5'],
        fullText: loremIpsum({ count: 3 }),
        shortenedText: loremIpsum({ count: 7 })
    }
    const [siteUrl, setSiteUrl] = useState('');
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState('');
    const [res, setRes] = useState(defaultResult);

    useEffect( () => {}
    )


    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        try{
            if (event.target.value) {
                setError('');
                setLoading(false);
                setSiteUrl(event.target.value);
            }
        }catch(er){
            console.log(er);
        }
    }

    const submitHandler = async(event: FormEvent) => {
        event.preventDefault();
        if (siteUrl === ''){
            setError('');
            setLoading(false);
            console.log(siteUrl);
            setRes(defaultResult);
            return;
        }
        setSiteUrl('');
        try {
            setError('');
            setLoading(true);
            /* post запрос на сервер*/
            const params = new URLSearchParams([['path', siteUrl]]);
            await axios.get("https://a50e-83-166-232-169.ngrok-free.app/?path=https://sportmail.ru/news/football-foreign/60761569/")
                .then((response) => {
                    console.log(response.data); 
                    setRes(defaultResult);
                });
                
            setLoading(false);
            }
        catch(er)
        {
            setLoading(false);
            const error = er as AxiosError;
            setError(error.message);
            console.log('Error', error.message);
            return;
        }
    };



    return(
        <>
        <div className="flex-box flex-auto text-white">
              <div>
                {!error && loading && <div>Загрузка.......</div>}
                {error && <div className='bg-red-700'>Ошибка {error}</div>}
                {!error && !loading && <ResultForm tags={res.tags} classOfWebSite={res.classOfWebSite} fullText={res.fullText} shortenedText={res.shortenedText}></ResultForm>}

            </div>
        </div>


        <div className="w-[30vw] h-[30vh]  text-[3vmin]">
            
            <form className="grid" method="post" onSubmit={submitHandler}> 
                <input className="form-control me-2 text-center" defaultValue='' value={siteUrl} onChange={changeHandler} type="input" placeholder="Введите адрес сайта" aria-label="Input"/>
                <div className="flex items-left justify-center"><button className="btn btn-dark  text-[3vmin]" type="submit">Отправить</button></div>
            </form>
        </div>
        </>
    );
}