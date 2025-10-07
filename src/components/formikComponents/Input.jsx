import { ErrorMessage, FastField } from "formik";
import FormCustomError from "../errors/FormCustomeError";

const Input = ({formik, type, name, icon, label}) => {
    return(
        
        <div className="pt-2 relative">
            <label htmlFor={name} className='text-[12px] text-[#31326F] sr-only'>{label}</label>

            <FastField 
             type={type} 
             name={name} 
             id={name} 
             placeholder={label}
             className='w-full outline-none bg-[#637AB9] p-1.5 pr-3 md:p-2 md:pr-4 rounded-[20px]
             placeholder-white placeholder:text-[12px] text-[16px] text-white mt-1'
            />

            <ErrorMessage name={name} component={FormCustomError}/>

            <span role="img" aria-hidden="true" className="pointer-events-none text-white text-[14px] absolute top-[22px] left-[13px] md:top-[24px]">{icon}</span>
        </div>
    )
}

export default Input;