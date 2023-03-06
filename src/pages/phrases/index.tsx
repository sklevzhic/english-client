import React, {useEffect, useState} from "react";
import {IPhrase} from "../../types";
import axios from "axios";
import MainLayout from "../../layouts/main";
import ListPhrases from "./components/listPhrases";

const Phrases = () => {
    let [phrases, setPhrases] = useState<IPhrase[]>([])

    useEffect(() => {
        axios.get<IPhrase[]>("https://english-api.onrender.com/phrases").then(({data}) => {
            setPhrases(data)
        })
    }, [])

    return <MainLayout>
        <ListPhrases phrases={phrases} />
    </MainLayout>
}

export default Phrases