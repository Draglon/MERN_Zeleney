export const sections = [
    {
        section: "order",
        className: "order order_phyto-picture",
        title: "",
        content: {
            title: "Фитокартина",
            subTitle: "Standard<br/>Green",
            items: [
                "Ручной полив",
                "Быстрый уход",
                "Монтаж за 15 минут",
                "Контроль полива",
                'Опция "Я сам"'
            ],
            button: "Заказать"
        }
    },
    {
        section: "tile",
        className: "tile",
        title: "",
        content: {
            url: require('../../../images/phyto_picture/phyto-picture_tile_1.jpg'),
            title: "Простое решение",
            text: "Идеально подойдет для тех, кто хочет быстро и просто озеленить пространство, приложив минимум усилий.",
            side: false
        }
    },
    {
        section: "oxygen",
        className: "oxygen",
        title: "",
        content: {
            title: "Живой фильтр воздуха",
            text: "Выделяет кислород, ионизирует воздух, улучшает микроклимат, поглощает вредные вещества в помещении."
        }
    },
    {
        section: "tile",
        className: "tile",
        title: "",
        content: {
            url: require('../../../images/phyto_picture/phyto-picture_tile_2.png'),
            title: "Современный экодизайн",
            text: "Живой элемент природы станет особой частью Вашего интерьера.",
            side: true
        }
    },
    {
        section: "simpleCare",
        className: "simple-care",
        title: "",
        content: {
            title: "Легкий уход",
            text: "Не нужно доставать растения, просто налейте воду в поддон и растения сами выпьют свою норму.",
            url: require('../../../images/phyto_picture/phyto-picture_simple-care.png'),
            items: [
                {
                    title: "Аэрация",
                    text: "Вентилируемые блоки сохранят стены сухими, а растения оптимально влажными."
                },
                {
                    title: "Чистота и естественность",
                    text: "Растения развиваются в естественной среде, а особый угол наклона не дает субстрату высыпаться."
                }
            ]
        }
    },
    {
        section: "details",
        className: "details",
        title: "",
        content: {
            url: require('../../../images/phyto_picture/phyto-picture_details.png'),
            items: [
                {
                    number: "<span>более</span> 24",
                    label: "видов растений",
                    colors: false
                },
                {
                    number: "<span>до</span> 36",
                    label: "растений на м<sup>2</sup>",
                    colors: false
                },
                {
                    number: "16",
                    label: "размеров конструкции",
                    colors: false
                },
                {
                    number: "3",
                    label: "цвета на выбор",
                    colors: ["green", "yellow", "black"]
                }
            ]
        }
    },
    {
        section: "myself",
        className: "myself",
        title: "",
        content: {
            url: require('../../../images/phyto_picture/phyto-picture_myself.png'),
            items: [
                {
                    title: "Я Сам",
                    text: "Вы можете заказать только конструкцию и посадить свои растения"
                },
                {
                    title: "Сделайте красиво",
                    text: "Наши флористы подберут и посадят растения для Вас или предложат уже готовое решение"
                }
            ],
            delivery: [
                {
                    title: "Доставка",
                    text: "Бесплатная доставка по всей территории Украины"
                },
                {
                    title: "Гарантия",
                    text: "На систему и комплектующие <b>3 года</b>"
                }
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