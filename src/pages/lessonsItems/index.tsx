import {FC} from "react";
import {Link} from "react-router-dom";
import MainLayout from "../../layouts/main";

interface LessonsItemsProps {

}

const LessonsItems: FC<LessonsItemsProps> = () => {

    return (
        <MainLayout>
            <div
                className="max-w-2xl mx-auto divide-y divide-slate-400/20 rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">

                <div className="flex items-center p-4"><img src="https://tailwindui.com/img/avatar-3.jpg" alt=""
                                                            className="h-10 w-10 flex-none rounded-full"/>
                    <div className="ml-4 flex-auto">
                        <div className="font-medium">Lesson 1</div>
                        <div>Present Simple</div>
                    </div>
                    <Link to={"/lessons/a1/1"}>
                        <div
                            className="pointer-events-auto ml-4 flex-none rounded-md py-[0.3125rem] px-2 font-medium text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">View
                        </div>
                    </Link>
                </div>

                <div className="flex items-center p-4"><img src="https://tailwindui.com/img/avatar-3.jpg" alt=""
                                                            className="h-10 w-10 flex-none rounded-full"/>
                    <div className="ml-4 flex-auto">
                        <div className="font-medium">Lesson 2</div>
                        <div>Past Simple</div>
                    </div>
                    <Link to={"/lessons/a2/2"}>
                        <div
                            className="pointer-events-auto ml-4 flex-none rounded-md py-[0.3125rem] px-2 font-medium text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">View
                        </div>
                    </Link>
                </div>

            </div>
        </MainLayout>
    )

}

export default LessonsItems