import { Form, Formik } from 'formik';
import galaxyImage from '../../assets/images/gradient-galaxy.jpg'
import { FaLock, FaUser } from "react-icons/fa";
import { initialValues, onSubmit, validationSchema } from '../../formValues/formValues';
import FormikControl from '../formikComponents/FormikControl';
import Spiner from '../spiner';

const LoginForm = () => {
    return(
        <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-[#31326F] to-[#4FB7B3]">
            <div className="flex flex-col md:flex-row shadow-xl h-[430px] max-w-[305px] md:max-w-[700px] mx-[6%]">
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
                                    <h3 className="text-[#31326F] font-bold text-center text-[20px] md:text-2xl pt-5 pb-3 md:pb-8">فرم ورود</h3>
                                    
                                    <Form>

                                        <FormikControl 
                                        formik={formik}
                                        control="input"
                                        type="text"
                                        name="name"
                                        label="نام"
                                        icon={<FaUser />}
                                        />

                                        <FormikControl 
                                        formik={formik}
                                        control="input"
                                        type="password"
                                        name="password"
                                        label="رمز عبور"
                                        icon={<FaLock />}
                                        />

                                        <div className="flex justify-between px-2 pt-3 md:py-6">
                                            <a href="#" className="text-[12px] md:text-[14px] text-[#31326F]">فراموش کردید؟</a>
                                            <a href="#" className="text-[12px] md:text-[14px] text-[#31326F]">ثبت نام</a>
                                        </div>

                                        <div className="text-center pt-4 md:pt-10">
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

export default LoginForm;