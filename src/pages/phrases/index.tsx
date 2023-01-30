import React, {useEffect, useState} from "react";
import {IPhrase} from "../../types";
import axios from "axios";
import {Link} from "react-router-dom";
import HiddenText from "../../components/hiddenText";

const Phrases = () => {
    let [phrases, setPhrases] = useState<IPhrase[]>([])

    useEffect(() => {
        axios.get<IPhrase[]>("https://english-api.onrender.com/phrases").then(({data}) => {
            setPhrases(data)
        })
    }, [])

    return <div>
        <Link to={"/new-phrase"}>New Phrase</Link>
        {
            phrases?.map(el => {
                return <HiddenText key={el._id} phrase={el}/>
            })
        }

    </div>
}

export default Phrases