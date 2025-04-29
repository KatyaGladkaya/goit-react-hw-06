import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAdd }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Required')
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be at most 50 characters'),
    number: Yup.string()
      .required('Required')
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be at most 50 characters'),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      ...values,
    };
    onAdd(newContact);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.formlabel}>
          Name
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>

        <label className={styles.formlabel}>
          Number
          <Field name="number" type="text" />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
