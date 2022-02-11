import API from "../../api";
import {useState} from "react";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contact_mail_pic from '../../public/contact_mail_pic.png'
import {Formik, Form, Field, ErrorMessage, useFormik} from 'formik'
import * as Yup from 'yup';


export default function Contact() {
    function notify() {
        toast.success("Cпасибо! Ваш запрос отправлен. Мы ответим в течении 24 часов.", {
            position: toast.POSITION.BOTTOM_CENTER
        })
    }

    const initialValues = {
        name: '',
        email: '',
        text: '',
    }

    const onSubmit = async values => {
        const contact = {
            name: values.name,
            email: values.email,
            text: values.text,
        };
        const res = await API.post('contact/', contact)
        if (res.status === 201) {
            notify()
        }
    }

    const validationSchema = Yup.object({
        name: Yup.string()
            .max(15, 'Имя должно содержать не мене 2 и не более 15 символов')
            .min(2, 'Имя должно содержать не мене 2 и не более 15 символов')
            .required('Поле не должно быть пустым'),
        email: Yup.string()
            .email('Некорректный email адрес')
            .required('Поле не должно быть пустым')
    })

    return (
        <>
            <div className="box-content flex content-center items-center justify-center">
                <div className="lg:w-1/2 w-full flex flex-wrap bg-white rounded-lg p-8 mt-10 shadow-lg">
                    <div className="lg:w-1/2 w-full">
                        <div className="flex justify-center mt-8 mb-8">
                            <img src="/contact_mail_pic.png"
                                 style={{width: 200, height: '100%'}}
                                 alt="contact_mail_pic"/>
                        </div>
                        <p className="text-sm p-5 text-gray-600 text-center">
                            Оставьте свои данные и Мы свяжемся с Вами, что бы подобрать самый лучший вариант
                        </p>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values, actions) => {
                            onSubmit(values).then(() => {
                                actions.setSubmitting(false)
                                actions.resetForm({
                                    values: initialValues
                                });
                            })
                        }}
                    >
                        {(props) => (
                            <Form className="lg:w-1/2">
                                <h2 className="text-lg mb-6 font-bold">Подобрать тур</h2>
                                <div className="relative mb-4">
                                    <label className="leading-7 text-gray-600">Имя</label>
                                    <Field type="name" id="name" name="name" placeholder="Иван"
                                           className={`box-input ${props.errors.name && 'border-red-800 border-2'}`}/>
                                    <div className="text-red-800 font-bold mt-1"><ErrorMessage name="name"/></div>
                                </div>
                                <div className="relative mb-4">
                                    <label className="leading-7 text-gray-600">Email</label>
                                    <Field type="email" id="email" name="email" placeholder="name@email.com"
                                           className={`box-input ${props.errors.email && 'border-red-800 border-2'}`}/>
                                    <div className="text-red-800 font-bold mt-1"><ErrorMessage name="email"/></div>

                                </div>
                                <div className="relative mb-4">
                                    <label className="leading-7 text-gray-600">Сообщение</label>
                                    <Field id="text" as="textarea" className="box-input" name="text" cols="50" rows="3"
                                           placeholder="Например, Сейшелы в декабре 2021, 2 человека"/>
                                </div>
                                <button type="submit" disabled={!props.isValid}
                                        className="text-white bg-primary-200 border-0 py-2 px-6 focus:outline-none hover:bg-primary-100 rounded text-lg">
                                    Отправить
                                </button>
                                <ToastContainer
                                    position="bottom-center"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                />
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}