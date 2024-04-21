import { Link } from 'react-router-dom';

export function Header(){
    return(
        <header className="flex-grow-0 flex-shrink-0 basis-auto p-[1vmin] text-center m-b-[0.5vmin] w-full  bg-red-600 bg-opacity-40">
            <Link to="" className="text-gray-100 no-underline font-bold text-[6vmin] opacity-100 hover:drop-shadow-[0_0.2vmin_0.2vmin_rgba(0,0,0,0.3)]">
                Шторм-ZXC
            </Link>
        </header>
    );
}