import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';

export default function CookiesBar({onAccRej}) {
    const [showCookiesBar, setCookiesBarVisible] = useState(true);
    const [cookies, setCookie] = useCookies(['cookie_check']);

    useEffect(()=>{
        if(cookies.cookie_check) {
            setCookiesBarVisible(false)    
        }
    },[])

    function onAccept() {
        setCookie('cookie_check', true, { path: '/' });
        setCookiesBarVisible(false)    
    }

    function onReject() {

    }

    return (
        <>
        {showCookiesBar && <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-bottom sm:max-w-lg sm:w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                    <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0"
                            y="0"
                            enableBackground="new 0 0 299.049 299.049"
                            version="1.1"
                            viewBox="0 0 299.049 299.049"
                            xmlSpace="preserve"
                            >
                            <path d="M289.181 206.929c-13.5-12.186-18.511-31.366-12.453-48.699 1.453-4.159-.94-8.686-5.203-9.82-27.77-7.387-41.757-38.568-28.893-64.201 2.254-4.492-.419-9.898-5.348-10.837-26.521-5.069-42.914-32.288-34.734-58.251 1.284-4.074-1.059-8.414-5.178-9.57A149.807 149.807 0 00156.893 0C74.445 0 7.368 67.076 7.368 149.524s67.076 149.524 149.524 149.524c57.835 0 109.142-33.056 133.998-83.129a7.574 7.574 0 00-1.709-8.99zm-132.288 76.97c-74.095 0-134.374-60.281-134.374-134.374S82.799 15.15 156.893 15.15c9.897 0 19.726 1.078 29.311 3.21-5.123 29.433 11.948 57.781 39.41 67.502-9.727 29.867 5.251 62.735 34.745 74.752-4.104 19.27 1.49 39.104 14.46 53.365-23.061 42.119-67.59 69.92-117.926 69.92z"></path>
                            <path d="M76.388 154.997c-13.068 0-23.7 10.631-23.7 23.701 0 13.067 10.631 23.7 23.7 23.7 13.067 0 23.7-10.631 23.7-23.7-.001-13.07-10.632-23.701-23.7-23.701zm0 32.25c-4.715 0-8.55-3.835-8.55-8.55s3.835-8.551 8.55-8.551c4.714 0 8.55 3.836 8.55 8.551s-3.836 8.55-8.55 8.55zM173.224 90.655c0-14.9-12.121-27.021-27.02-27.021s-27.021 12.121-27.021 27.021c0 14.898 12.121 27.02 27.021 27.02 14.9-.001 27.02-12.122 27.02-27.02zm-38.89 0c0-6.545 5.325-11.871 11.871-11.871s11.87 5.325 11.87 11.871-5.325 11.87-11.87 11.87-11.871-5.326-11.871-11.87zM169.638 187.247c-19.634 0-35.609 15.974-35.609 35.61 0 19.635 15.974 35.61 35.609 35.61s35.61-15.974 35.61-35.61c-.001-19.636-15.975-35.61-35.61-35.61zm0 56.068c-11.281 0-20.458-9.178-20.458-20.46s9.178-20.46 20.458-20.46c11.281 0 20.46 9.178 20.46 20.46s-9.178 20.46-20.46 20.46z"></path>
                        </svg>
                    </div>
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                        Cookies
                        </h3>
                        <div class="mt-2">
                        <p class="text-sm text-gray-500">
                            We use our own and third-party cookies to personalize content and to analyze web traffic. <a href="/user-agreement" target="_blank" class="underline">Read more</a> about cookies
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button type="button" onClick={onAccept} class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                        Accept
                    </button>
                    {/* <button type="button" onClick={onReject} class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        Reject
                    </button> */}
                </div>
                </div>
            </div>
        </div>
        }
        </>
    )
}

//                         We use our own and third-party cookies to personalize content and to analyze web traffic. Read more about about cookies

