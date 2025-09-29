import Checkbox from "./Checkbox";
import Input from "./Input";
import Radio from "./Radio";
import Select from "./Select";
import Textarea from "./Textarea";

const FormikControl = (props) => {
    switch (props.control) {
        case 'input':
            return <Input {...props}/>
        case 'textarea':
            return <Textarea {...props}/>
        
        case 'select':
            return <Select {...props}/>
        
        case 'radio':
            return <Radio {...props}/>
        
        case 'checkbox':
            return <Checkbox {...props}/>
        
        default:
            return null
    }
}

export default FormikControl;