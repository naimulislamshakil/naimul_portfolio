import * as yup from 'yup';

export const contactSchema = yup.object().shape({
	firstName: yup.string().required('First Name is Required!'),
	lastName: yup.string().required('Last Name is Required!'),
	email: yup.string().email('Invalid Email').required('Email is Required!'),
	message: yup.string().required('Message is Required!'),
});
