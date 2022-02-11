import {AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineIssuesClose} from "react-icons/ai";

export const tourInfo = [
    {
        id: 1,
        title: 'Входит в стоимость',
        icon: <AiOutlineCheckCircle className="text-xl w-1/12"/>,
        items: [
            {
                id: 1,
                icon: 1,
                description: "Размещение в двухместных каютах (кровать double)",
            },
            {
                id: 2,
                icon: 1,
                description: "Обслуживание экипажем (капитан)",
            },
            {
                id: 3,
                icon: 1,
                description: "Страхование яхты",
            },
            {
                id: 4,
                icon: 1,
                description: "Налоги и таксы",
            },
            {
                id: 5,
                icon: 1,
                description: "Полное сопровождение и помощь по любым вопросам в течение всего срока поездки",
            },
            {
                id: 6,
                icon: 1,
                description: "Обучение азам яхтенного дела",
            },
        ]
    },
    {
        id: 3,
        title: 'Не входит в стоимость',
        icon: <AiOutlineCloseCircle className="text-xl w-1/12 text-red-500"/>,
        items: [
            {
                id: 1,
                icon: 2,
                description: "Авиаперелёт",
            },
            {
                id: 2,
                icon: 2,
                description: "Трансфер",
            },
            {
                id: 3,
                icon: 2,
                description: "Виза",
            },
            {
                id: 4,
                icon: 2,
                description: "Питание",
            },
            {
                id: 5,
                icon: 2,
                description: "Береговые экскурсии",
            },
            {
                id: 6,
                icon: 2,
                description: "Медицинская страховка",
            },
            {
                id: 7,
                icon: 2,
                description: "Топливо, стоянки, финальная уборка яхты (сдается капитану наличными в судовую кассу на яхте, ~100 евро/человек)",
            },
            {
                id: 8,
                icon: 2,
                description: "Возвратный страховой депозит (сдается капитану наличными на яхте, ~250 евро/человек, возвращается после сдачи яхты в чартерную компанию)",
            },
        ]
    }
]