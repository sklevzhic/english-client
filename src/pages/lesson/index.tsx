import {FC} from "react";
import MainLayout from "../../layouts/main";
import {Link} from "react-router-dom";

interface LessonProps {

}

const Lesson: FC<LessonProps> = () => {

    return (
        <MainLayout>

            <div
                className="max-w-2xl mx-auto divide-y divide-slate-400/20 rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
                <div className="flex items-center p-4">
                    <div className={"h-10 w-10 flex-none rounded-full"}>
                        1
                    </div>

                    <div className="ml-4 flex-auto">
                        <div className="font-medium">Она не может продолжить притворяться, что все в порядке</div>
                        <div>He can,t go on pretending that everything is alright</div>
                    </div>
                    <div className={"h-10 w-20 flex-none rounded-full"}>
                        <button type="button"
                                className="flex justify-center items-center mb-1 bg-indigo-500 hover:bg-blue-700
                                focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in
                                duration-200 text-center shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2
                                rounded-lg ">
                            + 17
                        </button>
                        <button type="button"
                                className="flex justify-center items-center bg-indigo-200 hover:bg-blue-700
                                focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in
                                duration-200 text-center shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2
                                rounded-lg ">
                            - 17
                        </button>
                    </div>
                    <div
                        className="pointer-events-auto ml-4 flex-none rounded-md py-[0.3125rem] px-2 font-medium
                        text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50 cursor-pointer">Show
                    </div>
                </div>
            </div>
        </MainLayout>
    )

}

export default Lesson