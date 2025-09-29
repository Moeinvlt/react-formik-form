import { ErrorMessage, FastField } from "formik";
import FormCustomError from "../errors/FormCustomeError";

const Textarea = ({formik, name, label}) => {
    return(
        <div className="pt-2 relative" data-validate = {formik.errors.name}>
            <label htmlFor={name} className='text-[12px] text-[#31326F] sr-only'>{label}</label>

            <FastField 
             as="textarea" 
             name={name} 
             id={name} 
             placeholder={`لطفا ${label} خود را وارد کنید`}
             className='w-full outline-none bg-[#637AB9] p-2 pr-4 md:p-3 rounded-[20px]
             placeholder-white placeholder:text-[12px] text-[16px] text-white mt-1 resize-none h-[112px]'
            />

            <ErrorMessage name={name} component={FormCustomError}/>
        </div>
    )
}

export default Textarea;