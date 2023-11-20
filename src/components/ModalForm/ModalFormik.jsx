import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './ModalForm.module.css';

const SendMsgSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phone: Yup.string()
    .min(2, 'Too Short!')
    .max(13, 'Too Long!')
    .required('Required'),
  comment: Yup.string().min(10, 'Too Short!').max(60, 'Too Long!'),
});

export const ModalFormik = ({ sendForm, price, closeModal }) => {
  return (
    <Formik
      initialValues={{ name: '', phone: '', comment: '' }}
      validationSchema={SendMsgSchema}
      onSubmit={values => {
        sendForm(price ? { ...values, price } : values);
        closeModal();
      }}
    >
      {() => (
        <Form>
          {price && <p>You are choosing group with price £{price}</p>}
          <Field
            type="text"
            name="name"
            className={s.input}
            placeholder="Enter your name"
          />
          <ErrorMessage name="name" className={s.error} component="span" />
          <br />
          <Field
            type="tel"
            name="phone"
            className={s.input}
            placeholder="Enter yuor phone"
          />
          <ErrorMessage name="phone" className={s.error} component="span" />
          <br />
          <Field
            type="text"
            name="comment"
            className={s.input}
            placeholder="Leave comment here"
          />
          <ErrorMessage name="comment" className={s.error} component="span" />
          <br />
          <button type="submit">Send</button>
        </Form>
      )}
    </Formik>
  );
};

export default ModalFormik;
