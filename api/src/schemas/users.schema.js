import yup from 'yup';

const msgNameRequired = 'Name is required';
const msgEmailRequired = 'Email is required';
const msgPasswordRequired = 'Password is required';
const msgRoleRequired = 'Role is required';
const msgActiveRequired = 'Active is required';

export const userSchema = yup.object({
    name: yup.string().required(msgNameRequired),
    email: yup.string().email().required(msgEmailRequired),
    password: yup.string().required(msgPasswordRequired),
    role: yup.string().required(msgRoleRequired),
    active: yup.boolean().required(msgActiveRequired)
});