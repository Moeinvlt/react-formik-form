import { ErrorMessage, FastField } from "formik";
import FormCustomError from "../errors/FormCustomeError";
import { Fragment } from "react";

const Radio = ({formik, name, label, options}) => {
    return(
        <div className="pt-2 relative" data-validate = {formik.errors.name}>
            <label htmlFor={name} className='text-[12px] text-[#31326F] sr-only'>{label}</label>

            <FastField
            name={name} 
            id={name} 
            >
                {({field}) => {
                    return options.map(o => (
                        <Fragment key={o.id}>
                            <input
                            type="radio"
                            id={`radio${o.id}`}
                            {...field}
                            value={o.id}
                            checked={field.value == o.id}
                            />
                            <label htmlFor={`radio${o.id}`} className="text-[14px] ml-4 mr-1">{o.value}</label>
                        </Fragment>
                    ))
                }}
            </FastField>

            <ErrorMessage name={name} component={FormCustomError}/>
        </div>
    )
}

export default Radio;