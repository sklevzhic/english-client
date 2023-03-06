import React, {FC} from "react";
import {IPhrase} from "../../types/IPhrase";
import PhraseItem from "../phraseItem";


interface ListPhrasesProps {
    phrases: IPhrase[]
}

const ListPhrases: FC<ListPhrasesProps> = ({phrases}) => {

    return (
        <div className={"max-w-2xl"}>
            {
                phrases?.map(el => {
                    return <PhraseItem key={el._id} phrase={el}/>
                })
            }
        </div>
    )

}

export default ListPhrases