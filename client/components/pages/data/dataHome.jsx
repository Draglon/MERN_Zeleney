export const sections = [
    {
        section: "main",
        className: "section_main",
        title: "",
        content: {
            title: "Вертикальное озеленение",
            subTitle: "от производителя",
            items: [
                "Современный тренд",
                "Уникальный дизайн",
                "Чистый воздух",
                "Простой уход"
            ],
            button: "Получить консультацию"
        }
    },
    {
        section: "category",
        className: "category",
        title: "",
        content: {
            categories: [
                {
                    imgUrl: require('../../../images/vertical_gardening/vertical-gardening_category_1.jpg'),
                    imgLabel: "Узнать больше",
                    route: "/green_wall",
                    label: "Block<br/>by<br/>Block",
                    title: "Зеленая стена",
                    subTitle: "из живых растений",
                    button: "Подробнее"
                },
                {
                    imgUrl: require('../../../images/vertical_gardening/vertical-gardening_category_2.jpg'),
                    imgLabel: "Узнать больше",
                    route: "/phyto_picture",
                    label: "Standard<br/>Green",
                    title: "Фитокартина",
                    subTitle: "с ручным поливом",
                    button: "Подробнее"
                }
            ]
        }
    },
    {
        section: "info",
        className: "info",
        title: "Компания <b>Zeleney</b> это -",
        content: {
            subTitle: "- комплексное решение, от идеи до реализации",
            items: [
                "Собственное производство и прямые поставки растений из Голландии",
                "Квалифицированные инженеры и талантливые дизайнеры",
                "Служба поддержки клиентов и постгарантийное обслуживание"
            ]
        }
    },
    {
        section: "portfolio",
        className: "portfolio",
        title: "Наши работы",
        content: {
            slider: [
                {
                    url: require('../../../images/gallery/slide_1.jpg'),
                    label: "<b>Kyiv</b>, Office<br/> De Novo Company",
                    alt: ""
                },
                {
                    url: require('../../../images/gallery/slide_2.jpg'),
                    label: "<b>Kyiv</b>, Private Apartment,<br/>Design by <b>Home it</b>",
                    alt: ""
                },
                {
                    url: require('../../../images/gallery/slide_3.jpg'),
                    label: "<b>Kyiv</b>, Private Apartment in Royal Tower,<br/>Design by <b>Martin architects</b>",
                    alt: ""
                },
                {
                    url: require('../../../images/gallery/slide_4.jpg'),
                    label: "",
                    alt: ""
                },
                {
                    url: require('../../../images/gallery/slide_5.jpg'),
                    label: "",
                    alt: ""
                }
            ]
        }
    },
    {
        section: "request",
        className: "request",
        title: "",
        content: {
            title: "Интересно? Оставьте заявку",
            text: "и получите бесплатную консультацию<br/> по зеленым системам",
            button: "Оставить заявку"
        }
    }
]