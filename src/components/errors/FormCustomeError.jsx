import { GoAlertFill } from "react-icons/go";

const FormCustomError = ({ children }) => {
    return(
        <div className="bg-red-300 w-[45px] h-[26px] md:h-[28px] rounded-[10px] absolute left-2 top-[17px] md:top-4.5">
            <button type="button" className="text-red-500 text-[12px] absolute left-6 top-2 peer"><GoAlertFill /></button>
            <div className="text-[12px] bg-red-200 text-red-500 relative left-40
             rounded-[10px] w-[160px]  md:hidden p-1 hidden peer-focus:block md:peer-hover:block">
                {children}
            </div>
        </div>
    )
}

export default FormCustomError;