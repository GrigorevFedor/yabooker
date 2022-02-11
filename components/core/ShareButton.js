import {
    FacebookIcon,
    FacebookShareButton, OKIcon, OKShareButton,
    TelegramIcon,
    TelegramShareButton, TwitterIcon, TwitterShareButton, VKIcon, VKShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from "react-share";



export default function ShareButton({ url }) {
    return (
        <>
            <div className="flex flex-wrap items-center justify-between w-80 mt-8">
                <FacebookShareButton url={url}>
                    <FacebookIcon size={40} className="rounded-lg ring ring-gray-200 ring-opacity-50"/>
                </FacebookShareButton>
                <WhatsappShareButton url={url}>
                    <WhatsappIcon size={40} className="rounded-lg ring ring-gray-200 ring-opacity-50"/>
                </WhatsappShareButton>
                <TelegramShareButton url={url}>
                    <TelegramIcon size={40} className="rounded-lg ring ring-gray-200 ring-opacity-50"/>
                </TelegramShareButton>
                <TwitterShareButton url={url}>
                    <TwitterIcon size={40} className="rounded-lg ring ring-gray-200 ring-opacity-50"/>
                </TwitterShareButton>
                <VKShareButton url={url}>
                    <VKIcon size={40} className="rounded-lg ring ring-gray-200 ring-opacity-50"/>
                </VKShareButton>
                <OKShareButton url={url}>
                    <OKIcon size={40} className="rounded-lg ring ring-gray-200 ring-opacity-50"/>
                </OKShareButton>
            </div>
        </>
    )
}