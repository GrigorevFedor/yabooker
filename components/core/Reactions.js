import { useEffect, useState } from "react";
import { db } from "../../components/core/Firebase"

import { ref, onValue, set, increment } from "firebase/database";

export const MiniReactions = ({ articleId }) => {

    const [reactions, setReactions] = useState(0)

    const getAllReactions = () => {
        const messagesDbRef = ref(db, `reactions/${articleId}`);
        onValue(messagesDbRef, (snapshot) => {
            const data = snapshot.val();
            setReactions(Object.values(data).reduce((a, b) => a + b, 0))
        });
    }  
    
    useEffect(()=>{
        getAllReactions()
    },[])
    
    const heartPlaceholder = ()=>{
        let post = ''
        let count = reactions
        while (count >= 1000) {
            count = count / 1000
            post+='K'
        }
        return (count%1>0?count.toFixed(1):count) + post
    }

    return (
        <div className="absolute box-border bg-gray-200 rounded-full right-0 bottom-0 text-xs p-1 translate-y-4 translate-x-3">
            <img className="w-6" src={'/emoji/heart.619ef0515e26d0828471076282a90722.svg'}/> 
            <span>{heartPlaceholder()}</span>   
        </div>    
    )
}

export const Reactions = ({ articleId }) => {

    const reactionsLayout = [
        {
            name: 'applause',
            url: '/emoji/applause.50f0e4c7d9cd45f53dd252e3178d10b8.svg'
        },
        {
            name: 'confetti',
            url: '/emoji/confetti.a17816192fe6e8d4d5f0c37bfe6860f5.svg'
        },
        {
            name: 'fire',
            url: '/emoji/fire.af9056e7e97f028252f8ec22d20a2bd9.svg'
        },
        {
            name: 'heart',
            url: '/emoji/heart.619ef0515e26d0828471076282a90722.svg'
        },
        {
            name: 'smiling',
            url: '/emoji/smiling.1ffe6c1c27dcf371aa4edcde93ae0bd8.svg'
        },
        {
            name: 'thumbsup',
            url: '/emoji/thumbsup.e3e1c9f6d3f244305a99a9710c99f5d3.svg'
        },
    ]

    const [reactions, setReactions] = useState({
        applause: 0,
        confetti: 0,
        fire: 0,
        heart: 0,
        smiling: 0,
        thumbsup: 0,
    })

    const getReactions = () => {
        const messagesDbRef = ref(db, `reactions/${articleId}`);
        onValue(messagesDbRef, (snapshot) => {
            const data = snapshot.val();
            setReactions({ ...reactions, ...data })
        });

    }

    const setReaction = (reaction) => {
        const messagesDbRef = ref(db, `reactions/${articleId}/${reaction}`);
        set(messagesDbRef, increment(1));
    }

    useEffect(() => {
        getReactions()
    }, [])

    const eventHandler = (e) => {
        const { name, } = e.target;
        setReaction(name)
    };

    return (
        <div className="flex justify-center">
            <div className="flex items-center max-w-max mt-8 box-border bg-gray-200 rounded-lg px-8 py-4">
                {reactionsLayout.map((item)=>(
                    <Reaction key={item.name} name={item.name} url={item.url} count={reactions[item.name]} callback={eventHandler}/>    
                ))}
            </div>
        </div>
    )
}

const Reaction = ({name, url, count, callback}) => {
    return (
        <div>
            <img className="hover:scale-125 duration-150 ease-in-out cursor-pointer" src={url} name={name} onClick={callback} />
            <p className="flex justify-center">{count}</p>
        </div>
    )
}