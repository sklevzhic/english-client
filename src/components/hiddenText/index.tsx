import React, {useState} from "react";
import {IPhrase} from "../../types";

const HiddenText = ({phrase}: { phrase: IPhrase }) => {
    const {rusText, engText} = phrase
    const [isHiddenText, setIsHiddenText] = useState<boolean>(false)

    return <div>
        <div
            onClick={() => setIsHiddenText(true)}
            className="text-2xl text-red-600">{rusText}</div>
        {
            isHiddenText
            && <div className="text-2xl pb-32">{engText} </div>
        }

    </div>
}

export default HiddenText