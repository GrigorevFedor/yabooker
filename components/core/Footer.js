import logo from "../../public/logo.png";
import Image from 'next/image'
import {FaFacebookF, FaInstagram, FaTelegramPlane, FaTwitter, FaVk, FaYandex, FaYoutube} from "react-icons/fa";
import {ImFacebook, ImFacebook2, ImInstagram, ImVk, ImYoutube} from "react-icons/im";
import SocialButton from "./SocButton";

export default function Footer({home}) {
    return (
        <>
            <footer className='bg-primary-300'>
                <div className="pt-8 mx-auto box-content">
                    <div className="grid gap-10 row-gap-6 md:grid-cols-3 lg:grid-cols-5 px-4">
                        <div className="sm:col-span-1x">
                            <a href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
                                <Image src={logo}
                                       width={200}
                                       height={40}
                                       alt={"footer-logo"}
                                />
                            </a>
                        </div>
                        <div className="text-2sm text-white">
                            <div className="flex">
                                <ul>
                                    <li>
                                        <a href="/"
                                           className="mt-4 transition-colors duration-300 hover:text-primary-900">
                                            Главная
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/tours"
                                           className="mt-4 transition-colors duration-300 hover:text-primary-900">
                                            Авторские туры
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#faq"
                                           className="mt-4 transition-colors duration-300 hover:text-primary-900">
                                            F.A.Q
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="text-2sm text-white">
                            <div className="flex">
                                <ul>
                                    <li>
                                        <a href="/user-agreement"
                                           className="mt-4 transition-colors duration-300 hover:text-primary-900">
                                            Пользовательское соглашение
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/privacy-policy"
                                           className="mt-4 transition-colors duration-300 hover:text-primary-900">
                                            Политика конфиденциальности
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="space-y-1 text-2sm text-white">
                            <p className="mr-1">Контакты:</p>
                            <div className="flex">
                                <a href="mailto:info@lorem.mail" aria-label="Our email" title="Our email"
                                   className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                                    support@yabooker.com
                                </a>
                            </div>
                        </div>
                        <div className="text-2xl text-white">
                            <div className="flex flex-wrap lg:justify-end">
                                <SocialButton />
                            </div>
                        </div>
                        <div>
                            {/*<span className="text-base font-bold tracking-wide text-white">*/}
                            {/*  Social*/}
                            {/*</span>*/}
                            {/*  <div className="flex items-center mt-1 space-x-3">*/}
                            {/*      <a href="/"*/}
                            {/*         className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">*/}
                            {/*      </a>*/}
                            {/*      <a href="/"*/}
                            {/*         className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">*/}
                            {/*      </a>*/}
                            {/*      <a href="/"*/}
                            {/*         className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">*/}
                            {/*      </a>*/}
                            {/*  </div>*/}
                        </div>
                    </div>
                    <div
                        className="flex flex-col-reverse justify-center text-white pt-5 pb-5 border-t lg:flex-row px-4">
                        <p className="text-sm">
                            © 2021 Copyright | YaBooker
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}