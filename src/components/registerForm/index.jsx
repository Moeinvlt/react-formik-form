import { Form, Formik } from 'formik';
import galaxyImage from '../../assets/images/gradient-galaxy.jpg'
import { FaLock, FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { initialValues, onSubmit, validationSchema } from '../../formValues/formValues';
import { getGenders, educations, rules } from '../../optionsItems/optionsItems';
import FormikControl from '../formikComponents/FormikControl';
import Spiner from '../spiner';
import { NavLink } from 'react-router';


const RegisterForm = () => {
    return(
        <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-[#31326F] to-[#4FB7B3]">
            <div className="flex flex-col md:flex-row shadow-xl md:h-[430px] max-w-[305px] md:max-w-[700px] mx-[6%]">
                <div className="h-[40%] md:h-full md:w-[60%] md:order-2">
                    <img src={galaxyImage} alt="glaxu-picture" className='block w-full rounded-t-[10px] md:rounded-t-[0px] md:rounded-l-[10px] md:h-full' />
                </div>

                <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                validateOnMount
                >
                    {
                        formik=>{
                            console.log(formik);
                            return(
                                <div className="rounded_b_r bg-white h-[60%] md:w-[40%] md:h-full md:order-1 rounded-b-[10px] md:rounded-b-[0px] md:rounded-r-[10px] px-6.5 md:px-5 order-3 border-[#31326F] border-t-0">
                                    <h3 className="text-[#31326F] font-bold text-center text-[20px] md:text-2xl pt-5 pb-2 md:pb-5">ثبت نام</h3>
                                    
                                    <Form>

                                        <FormikControl 
                                        control="input"
                                        type="text"
                                        name="name"
                                        label="نام"
                                        icon={<FaUser />}
                                        />

                                        <FormikControl 
                                        control="input"
                                        type="email"
                                        name="email"
                                        label="ایمیل"
                                        icon={<MdEmail />}
                                        />

                                        <FormikControl 
                                        control="input"
                                        type="text"
                                        name="number"
                                        label="شماره همراه"
                                        icon={<FaPhoneAlt />}
                                        />

                                        <FormikControl 
                                        control="input"
                                        type="password"
                                        name="password"
                                        label="رمز عبور"
                                        icon={<FaLock />}
                                        />
                                        

                                        <div className="flex justify-between px-2 pt-3 md:py-6">
                                            <div className="">
                                                {/* <span className='text-[12px] md:text-[14px]'>با <a href="#" className=" text-[#31326F]">قوانین</a> موافقم</span> */}
                                                <FormikControl 
                                                control="checkbox"
                                                name="rules"
                                                options={rules}
                                                label="قوانین"
                                                />
                                            </div>
                                            <NavLink to="/login" className="text-[12px] md:text-[14px] text-[#31326F]">ورود</NavLink>
                                        </div>

                                        <div className="text-center pt-4 pb-6 md:pb-0 md:pt-2">
                                            <button type="submit" className="bg-[#31326F] hover:bg-[#637AB9] 
                                            transition-all duration-300 cursor-pointer text-white md:text-[18px]
                                            inline-block w-[75px] h-[36px] flex justify-center items-center md:w-[143px] md:h-[47px] rounded-[7px] disabled:bg-[#637AB9]"
                                            disabled={ !formik.isValid || formik.isSubmitting }
                                            >
                                                {
                                                    formik.isSubmitting ? (
                                                        <Spiner />
                                                    ) : ("ورود")
                                                }
                                            </button>
                                        </div> 
                                    </Form>
                                </div>
                            )
                        }
                    }
                </Formik>
            </div>
        </div>
    )
}

export default RegisterForm;