import * as Yup from 'yup';

const initialValues = {
    name: '',
    password: '',
}

const onSubmit = (values) => {
    console.log(values);
}

const validationSchema = Yup.object({
    name: Yup.string().required('لطفا این قسمت را پر کنید'),
    password:Yup.string()
        .required('لطفا این قسمت را پر کنید')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
         'حداقل یک حرف بزرگ و یک حرف کوچک لاتین واز اعداد و کاراکتر های خاص استفاده کنید'
    ),
})

export {initialValues, onSubmit, validationSchema}