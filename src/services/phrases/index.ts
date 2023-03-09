import axios, { AxiosResponse } from "axios/index";
import {IPhrase} from "../../types";

export default async function getPhrases(): Promise<IPhrase[]> {
    let res = await axios.get<IPhrase[]>("https://english-api.onrender.com/phrases")
    return res.data
}