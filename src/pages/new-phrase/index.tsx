import {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const NewPhrase = () => {

    const [rusText, setRusText] = useState<string>("")
    const [engText, setEngText] = useState<string>("")
    const handlerClickForm = () => {
        axios.post("https://english-api.onrender.com/phrases", {
            rusText: rusText,
            engText: engText,
            level: "",
            lesson: "",
        })
    }

    return <div>
        <Link to={"/"}>Phrases</Link>
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="RUS">
                        RUS
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" placeholder="Username"
                        value={rusText}
                        onChange={(e) => setRusText(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ENG">
                        ENG
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" placeholder="Username"
                        value={engText}
                        onChange={(e) => setEngText(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        onClick={handlerClickForm}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button">
                        Send
                    </button>

                </div>
            </form>
        </div>

    </div>
}

export default NewPhrase