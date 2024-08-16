import AddDefCourse from "../../components/forms-client/defcourse";


export default function AddDefCourses() {
    return (
        <div className="AddDefCourses  flex-col justify-center my-6 p-4 w-full h-auto">
            <div className="h-14 items-start justify-end pb-3 pl-4 pt-5 w-96 text-right text-neutral-900 text-xl font-bold leading-7">
                شارك الفرص التعليمية من حولك
            </div>
            <div className="AddDefCourses flex flex-wrap md:flex-row justify-center my-6 p-4 w-full h-auto ">
                <AddDefCourse />
                <div className="flex flex-col items-center justify-center mx-auto">
                    <div className="w-96 h-24 text-right text-neutral-900 text-3xl font-bold leading-9">ساعدنا في بناء مجتمع تعليمـي محلـي قــوي</div>
                    <div className="w-96 h-20 justify-center items-start gap-2.5 flex">
                        <div className="w-96 h-16 text-right text-neutral-900 text-sm font-medium leading-snug">هل اكتشفت دورة رائعة في منطقتك؟ شاركها مع مجتمعنا! كل دورة تضيفها تساعد متعلماً آخر في العثور على فرصته المثالية.</div>
                    </div>
                    <div className="w-36 h-6 px-12" />
                    <div className="h-72 px-10 justify-center items-center flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 179.66 141.26" width={200}>
                            <g className="*:fill-primary-700">
                                <rect x="60.24" y="0" width="60.69" height="60.69" rx="30.34" ry="30.34" />
                                <path d="M26.16,41.58V124.13l62.67,16.77V71.16L26.16,41.58Zm58.74,89.31c-.05,1.44-.68,2.05-2.05,1.92-5.93-.56-11.78-1.46-17.39-3.64-8.23-3.2-10.43-13.79-4.96-20.39,.5-.6,1.04-1.16,1.56-1.75,5.77-4.94,14.34-4.32,19.19,1.45,1.54,1.83,2.2,4.07,2.68,6.33,1.14,5.31,1.18,10.69,.97,16.08Z" />
                                <path d="M90.83,71.51v69.75l62.68-16.78V41.93l-62.68,29.58Zm11.81,60.64c-1.21,1.54-3.44,1.79-5.02,.55-1.5-1.18-1.77-3.38-.59-4.89,1.24-1.58,3.4-1.84,5.02-.61,1.53,1.17,1.79,3.39,.59,4.95Zm7.73-2.61c-.91,1.02-2.36,.97-3.12-.17-.47-.7-.67-1.52-.95-2.31-.26-.73-.64-1.43-1.22-1.93-1.21-1.06-2.51-1.89-4.2-2.04-.67-.06-1.38-.15-2.05-.35-.76-.22-1.34-.92-1.38-1.73-.05-.96,.44-1.74,1.27-2,.17-.05,.31-.1,.41-.25,5.89-.32,10.99,3.9,11.89,9.5-.17,.45-.32,.9-.65,1.28Zm8.43-.95c-.88,1.52-2.87,1.2-3.56,.07-.14-.24-.28-.5-.53-.65,.05-.54-.01-1.07-.15-1.6-1.08-4.39-3.66-7.61-7.61-9.76-2.69-1.46-5.54-2.09-8.6-1.64-1.07-.17-1.85-.66-2.09-1.81-.18-.88,.13-1.75,.89-2.22,.18-.11,.38-.18,.5-.37,3.88-.44,7.61,.09,11.1,1.93,3.88,2.04,6.87,4.97,8.76,8.97,.1,.21,.16,.44,.24,.66-.03,.12,.02,.2,.11,.27v.02c-.01,.12,.04,.2,.12,.26l.02,.03c.02,.07,.04,.13,.06,.19,.04,.03,.06,.07,.06,.12,.01,.05,.03,.1,.04,.15v.02c.02,.06,.04,.13,.06,.19,.04,.1,.07,.19,.11,.28,.03,.09,.06,.18,.08,.26l.03,.02v.04s.02,.15,.02,.15v.03c.02,.06,.04,.12,.05,.17h0c-.21,.38-.1,.66,.22,.89,.02,.06,.03,.11,.04,.17-.05,.12-.01,.21,.07,.29v.04c.02,.06,.03,.11,.04,.17v.02c.02,.06,.03,.12,.04,.18h0c0,.07,0,.12,.01,.18-.01,.34,.04,.66,.21,.96-.35,.37-.08,.89-.34,1.32Zm8.38-.88c-.85,1.39-2.74,1.63-3.86,.19-.1-.13-.21-.24-.32-.36-.01-.37,.02-.75-.03-1.12-.52-3.96-2.01-7.56-4.43-10.71-3.52-4.58-8.16-7.51-13.83-8.7-2.61-.55-5.24-.7-7.88-.17-.44-.21-.85-.46-1.23-.77-1.19-.96-1-2.76,.39-3.46,.23-.11,.47-.21,.61-.44,2.87-.35,5.75-.39,8.59,.21,8.62,1.82,15.14,6.55,19.37,14.32,1.54,2.85,2.45,5.91,2.82,9.13,.01,.05,.02,.11,.03,.17v.02l.03,.18c.01,.06,.03,.13,.04,.2,.02,.06,.04,.13,.05,.2h0c-.29,.31-.13,.75-.36,1.11Z" />
                            </g>
                        </svg>

                    </div>
                </div>
            </div>
        </div>
    )
}
