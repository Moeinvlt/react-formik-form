import * as Yup from 'yup';
import { emailRegex, passwordRegex, phoneNumberRegex } from '../regexValidations/regexValidations';

const initialValues = {
    name: '',
    email: '',
    password: '',
    number: '',
    rules: [],
}

const onSubmit = (values, submitProps) => {
    console.log(values);
    setTimeout(() => {
        submitProps.setSubmitting(false);
        submitProps.resetForm();
    },4000)
}

const validationSchema = Yup.object({
    name: Yup.string().required('لطفا این قسمت را پر کنید'),
    email:Yup.string()
        .required('لطفا این قسمت را پر کنید')
        .matches(emailRegex,
        'ایمیل وارد شده صحیح نمیباشد لطفا الگوی ایمیل را رعایت کرده برای مثال example@gmail.com'
    ),
    password:Yup.string()
        .required('لطفا این قسمت را پر کنید')
        .matches(passwordRegex,
         'حداقل یک حرف بزرگ و یک حرف کوچک لاتین واز اعداد و کاراکتر های خاص مانند @/# استفاده کنید'
    ),
    number:Yup.string()
        .required('لطفا این قسمت را پر کنید')
        .matches(phoneNumberRegex,
         'لطفا یک شماره معتبر وارد کنید'   
    ),

})

export {initialValues, onSubmit, validationSchema}