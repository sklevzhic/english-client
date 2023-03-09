import React, {useEffect, useState} from "react";
import {IPhrase} from "../../types";
import axios from "axios";
import MainLayout from "../../layouts/main";
import ListPhrases from "../../components/listPhrases";
import getPhrases from "../../services/phrases";
import { useQuery } from "react-query";

const Phrases = () => {
    const { phrases } = useQuery("phrases", getPhrases)
    return <MainLayout>
        <ListPhrases phrases={phrases} />
    </MainLayout>
}

export default Phrases