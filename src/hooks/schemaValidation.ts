import *as Yup from 'yup'

export default Yup.object().shape({
    name: Yup.string()
        .min(2, 'Minimum 2 characters required')
        .matches(/^[a-zA-Z\s_]*$/, "Invalid character in Name")
        .required("This field is required"),
    email: Yup.string()
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid Email address")
        .required("This field is required"),
    phone:Yup.string()
        .min(3, "Minimum 3 digits required")
        .matches(/^[+0-9\s]*$/, "Invalid charcters in phone number")
        .required("This field is Required")
})