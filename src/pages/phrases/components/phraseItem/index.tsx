import React, {useState} from "react";
import {IPhrase} from "../../../../types";

const HiddenText = ({phrase}: { phrase: IPhrase }) => {
    const {rusText, engText} = phrase
    const [isHiddenText, setIsHiddenText] = useState<boolean>(false)

    return <div className={"border"}>
        <a className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{rusText}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{engText}</p>
        </a>
    </div>
}

export default HiddenText