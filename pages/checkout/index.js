import Layout from "../../components/core/Layout";
import CheckoutStep from "../../components/checkout/Step";
import CheckoutCart from "../../components/checkout/Card";
import {useRouter} from 'next/router'
import ErrorPage from "next/error";
import API from "../../api";
import {add_checkout} from "../../store/checkoutSlice";
import {useDispatch, useSelector} from "react-redux";
import {Formik, Field, ErrorMessage, Form} from 'formik'
import * as Yup from 'yup'
import MaskedInput from "react-text-mask"


export default function CheckoutPage({tour}) {
    const router = useRouter()
    const dispatch = useDispatch()
    const countState = useSelector((state) => state.basket)

    const phoneRegExp = /^\+[1-9]\([\d]{3}\)[ ][\d]{3}\-[\d]{4}$/

    const phoneNumberMask = [
        "+",
        "7",
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/
    ];

    if (router.query.url === undefined && router.query.qty === undefined) {
        return <ErrorPage statusCode={404}/>;
    }

    const initialValues = {
        firstname: '',
        lastname: '',
        email: '',
        tel: '',
    }

    const onSubmit = async values => {
        dispatch(add_checkout({
            'firstName': values.firstname,
            'lastName': values.lastname,
            'email': values.email,
            'tel': values.tel,
        }))
        router.push({
            pathname: '/checkout/confirm/',
            query: {
                ...router.query
            }
        })
    }

    const validationSchema = Yup.object({
        firstname: Yup.string()
            .max(15, 'Имя должно содержать не мене 2 и не более 15 символов')
            .min(2, 'Имя должно содержать не мене 2 и не более 15 символов')
            .required('Поле не должно быть пустым'),
        lastname: Yup.string()
            .max(15, 'Фамилия должна содержать не мене 2 и не более 15 символов')
            .min(2, 'Фамилия должно содержать не мене 2 и не более 15 символов')
            .required('Поле не должно быть пустым'),
        email: Yup.string()
            .email('Некорректный email адрес')
            .required('Поле не должно быть пустым'),
        tel: Yup.string()
            .matches(phoneRegExp, 'Некорректный номер телефона')
            .required('Поле не должно быть пустым'),

    })
    return (
        <Layout>
            <CheckoutStep title="Введите данные для ваучера" numberStep="1"/>
            <div className="box-content-2">
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
                    {props => {
                        const {
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                        } = props
                        return (
                            <Form action='' className="w-full flex flex-wrap justify-center items-start">
                                <div id="checkout_form" className="box-card-info lg:w-3/6 ">
                                    <div className="mx-auto">
                                        <div
                                            className="bg-white flex flex-wrap md:ml-auto w-full mt-10 md:mt-0 relative">
                                            <div className="relative mb-4 w-full">
                                                <label className="leading-7 text-gray-600">Имя</label>
                                                <Field type="text" id="firstname" name="firstname"
                                                       className={`box-input ${(errors.firstname && touched.firstname) && 'border-red-600 border-2'}`}/>
                                                <div className="text-red-600 font-bold text-sm mt-2"><ErrorMessage
                                                    name="firstname"/></div>
                                            </div>
                                            <div className="relative mb-4 w-full">
                                                <label className="leading-7 text-gray-600">Фамилия</label>
                                                <Field type="text" id="lastname" name="lastname" v
                                                       className={`box-input ${(errors.lastname && touched.lastname) && 'border-red-600 border-2'}`}/>
                                                <div className="text-red-600 font-bold text-sm mt-2"><ErrorMessage
                                                    name="lastname"/></div>
                                            </div>
                                            <div className="relative mb-4 w-full">
                                                <label htmlFor="email" className="leading-7 text-gray-600">Электронная
                                                    почта</label>
                                                <Field type="email" id="email" name="email"
                                                       className={`box-input ${(errors.email && touched.email) && 'border-red-600 border-2'}`}/>
                                                <div className="text-red-600 font-bold text-sm mt-2"><ErrorMessage
                                                    name="email"/></div>
                                            </div>
                                            <div className="relative mb-4 w-full">
                                                {/*<div className="lg:w-1/2">*/}
                                                <label htmlFor="tel" className="leading-7 text-gray-600">Телефон</label>
                                                <Field type="tel" id="tel" name="tel"
                                                       className={`box-input ${errors.tel && 'border-red-600 border-2'}`}
                                                       render={({field}) => (
                                                           <MaskedInput
                                                               {...field}
                                                               mask={phoneNumberMask}
                                                               id="tel"
                                                               type="text"
                                                               onChange={handleChange}
                                                               onBlur={handleBlur}
                                                               className={`box-input ${(errors.tel && touched.tel) && 'border-red-600 border-2'}`}
                                                           />
                                                       )}
                                                />
                                                <div className="text-red-600 font-bold text-sm mt-2"><ErrorMessage
                                                    name="tel"/></div>
                                                {/*</div>*/}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="checkout_info" className="box-card-info mt-6 lg:mt-0 lg:w-2/6 lg:ml-16">
                                    <CheckoutCart
                                        title={tour.title}
                                        start_point={tour.start_point}
                                        start_date={tour.start_date}
                                        finish_date={tour.finish_date}
                                        quantity={countState.qty}
                                        price={tour.price_rub}
                                    />
                                </div>
                                <div className="w-full flex items-center justify-center pt-10">
                                    <button onClick={() => router.back()}
                                            className="w-44 text-base font-medium rounded-l-lg p-2 bg-primary-200 hover:bg-primary-100 bg-opacity-60 text-white transition duration-500 ease-in-out transform hover:scale-105">
                                        Назад
                                    </button>
                                    <button type="submit"
                                            className="w-44 text-base font-medium rounded-r-lg p-2 bg-primary-200 hover:bg-primary-100 text-white transition duration-500 ease-in-out transform hover:scale-105">
                                        Далее
                                    </button>
                                </div>
                                <div className="w-full text-center">
                                    <p className="text-sm text-gray-600 mt-3 mb-12">Нажимая кнопку Далее
                                        вы соглашаетесь с <a className='text-primary-300' href="/user-agreement">условиями обработки персональных данных</a></p>
                                </div>
                            </Form>
                        )
                    }}

                </Formik>

            </div>
        </Layout>
    )
}

const fetchData = async (url) =>
    await API.get(`tour/${url}/`)
        .then(res => ({
            error: false,
            tour: res.data,
        }))
        .catch(() => ({
            error: true,
            users: null,
        }))

export async function getServerSideProps(context) {
    // const {url} = params;
    const tour = await fetchData(context.query.url);
    if (!tour) {
        return {
            notFound: true,
        }
    }
    return {props: tour}
}
