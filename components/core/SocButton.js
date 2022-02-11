import {SocialIcon} from 'react-social-icons';

export default function SocialButton() {
    return (
        <>
            <div className="flex flex-wrap items-center justify-between">
                <SocialIcon
                    network={'facebook'}
                    url={'https://www.facebook.com/YaBooker-103417365447971'}
                    fgColor={"white"}
                    className="bg-[#3b5998] rounded-lg ring-2 ring-white"
                    style={{ height: 40, width: 40 }}
                />
                {/*<SocialIcon*/}
                {/*    network={'twitter'}*/}
                {/*    url={'https://www.facebook.com/YaBooker-103417365447971'}*/}
                {/*    fgColor={"white"}*/}
                {/*    // bgColor={"#00aced"}*/}
                {/*    className="bg-[#00aced] rounded-lg ml-2 ring-2 ring-white"*/}
                {/*    style={{ height: 40, width: 40 }}*/}
                {/*/>*/}
                <SocialIcon
                    network={'vk'}
                    url={'https://vk.com/yabooker'}
                    fgColor={"white"}
                    className="bg-[#45668e] ml-2 rounded-lg ring-2 ring-white"
                    style={{ height: 40, width: 40 }}
                />
                <SocialIcon
                    network={'instagram'}
                    url={'https://www.instagram.com/yabookercom/'}
                    fgColor={"white"}
                    className="bg-[#e94475] ml-2 rounded-lg ring-2 ring-white"
                    style={{ height: 40, width: 40 }}
                />
                <SocialIcon
                    network={'youtube'}
                    url={'https://www.youtube.com/channel/UCJCVk3LrvQcJJIOhXYMr1Gw'}
                    fgColor={"white"}
                    className="bg-[#ff3333] ml-2 rounded-lg ring-2 ring-white"
                    style={{ height: 40, width: 40 }}
                />
                <img src="/zen.svg" className="bg-black ml-2 rounded-lg ring-2 ring-white" alt="yandex" style={{ height: 40, width: 40 }}/>
            </div>
        </>
    )
}