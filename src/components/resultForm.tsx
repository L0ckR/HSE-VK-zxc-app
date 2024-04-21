import { SourceText } from './sourceText'

export interface resultProps {
    tags: string[],
    classOfWebSite: string,
    fullText: string
    shortenedText: string
}

export function ResultForm({tags, classOfWebSite, fullText, shortenedText}: resultProps) {
    return(
    <>
        <div className="flex flex-col m-[2vmin] text-gray-100">
            <div className="font-bold text-[7vmin]">
            {classOfWebSite}
            </div>
            <div className="grid text-[3vmin]">
                <div>{tags[0]}</div>
                <div>{tags[1]}</div>
                <div>{tags[2]}</div>
                <div>{tags[3]}</div>
                <div>{tags[4]}</div>
            </div>
            <SourceText full={fullText} short={shortenedText}></SourceText>
        </div>
    </>
    );
}