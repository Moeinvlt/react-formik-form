import { FastField } from "formik";
import { FaChevronDown } from "react-icons/fa";

const Select = ({formik, name, icon, label, options}) => {
    return(
        <div className="pt-2 relative" data-validate = {formik.errors.name}>
            <label htmlFor={name} className='text-[12px] text-[#31326F] sr-only'>{label}</label>

            <FastField
            as="select"
            name={name} 
            id={name} 
            placeholder={`لطفا ${label} خود را وارد کنید`}
            className='w-full outline-none bg-[#637AB9] p-1.5 pr-3 md:p-2 rounded-[20px]
            placeholder-white placeholder:text-[12px] text-[16px] text-white mt-1'
            >
                {
                    options.map(o=>(
                        <option key={o.id} value={o.id} >{o.value}</option>
                    ))
                }
            </FastField>
            <span className="absolute left-3.5 top-6.5 text-white pointer-events-none text-[14px]"><FaChevronDown /></span>

        </div>
    )
}

export default Select;