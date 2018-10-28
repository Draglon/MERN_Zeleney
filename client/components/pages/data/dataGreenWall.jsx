export const sections = [
    {
        section: "order",
        className: "order order_green-wall",
        title: "",
        content: {
            title: "Зеленая стена",
            subTitle: "Block<br/>by<br/>Block",
            items: [
                "Автоматический полив",
                "Система Simple care",
                "Контроль влажности",
                "Съемные блоки",
                'Проекты "Под Ключ"'
            ],
            button: "Заказать"
        }
    },
    {
        section: "tile",
        className: "tile",
        title: "",
        content: {
            url: require('../../../images/green_wall/green-wall_tile_1.jpg'),
            title: "Зеленый лес",
            text: "Бросьте вызов бетонным джунглям, создайте живой оазис прямо у себя дома, в офисе или заведении.",
            side: false
        }
    },
    {
        section: "oxygen",
        className: "oxygen",
        title: "",
        content: {
            title: "Естественный генератор кислорода",
            text: "Работает круглосуточно и без выходных"
        }
    },
    {
        section: "tile",
        className: "tile",
        title: "",
        content: {
            url: require('../../../images/green_wall/green-wall_tile_2.jpg'),
            title: "Дизайн будущего",
            text: "Симбиоз природы и технологий создает харизматичное и атмосферное пространство.",
            side: true
        }
    },
    {
        section: "simpleCare",
        className: "simple-care",
        title: "",
        content: {
            title: "Система Simple Care",
            text: "Система жизнеобеспечения Ваших растений, комплекс технических решений,  сводящих уход к минимуму.",
            url: require('../../../images/green_wall/green-wall_simple-care.png'),
            items: [
                {
                    title: "Автономность",
                    text: "Вы можете смело уехать в отпуск и не бояться за жизнь Ваших растений, автоматика все сделает за Вас"
                },
                {
                    title: "Контроль влажности",
                    text: "Система «Эко-полив» обеспечивает растения только необходимым количеством воды, что поддерживает здоровый уровень влажности в помещении"
                }
            ]
        }
    },
    {
        section: "details",
        className: "details",
        title: "",
        content: {
            url: require('../../../images/green_wall/green-wall_details.png'),
            items: [
                {
                    number: "<span>более</span> 18",
                    label: "видов растений",
                    colors: false
                },
                {
                    number: "30",
                    label: "растений на м2",
                    colors: false
                },
                {
                    number: "8",
                    label: "режимов полива",
                    colors: false
                },
                {
                    number: "3",
                    label: "цвета на выбор",
                    colors: ["purple", "gray", "black"]
                }
            ]
        }
    },
    {
        section: "blockByBlock",
        className: "block-by-block",
        title: "Почему система Block by Block?",
        content: {
            items: [
                {
                    url: require('../../../images/green_wall/green-wall_blocks_1.jpg'),
                    bgColor: "#323232",
                    number: "#01",
                    color: "#ff9dfc",
                    label: "ТЕХНО<br>ЛОГИЧ-<br>НОСТЬ",
                    title: "Компактный размер и широкий функционал",
                    text: "Уникальная система нового поколения разработана, чтобы свести уход за растениями к минимуму."
                },
                {
                    url: require('../../../images/green_wall/green-wall_blocks_2.jpg'),
                    bgColor: "#013b44",
                    number: "#02",
                    color: "#ffe600",
                    label: "ЭКО<br>ПОЛИВ",
                    title: "Разный полив для разных видов растений",
                    text: "Регулируя полив, мы можем садить вместе растения разных видов, что позволяет нам создавать самые разнообразные композиции."
                },
                {
                    url: require('../../../images/green_wall/green-wall_blocks_3.jpg'),
                    bgColor: "#5a3642",
                    number: "#03",
                    color: "#60fdff",
                    label: "ПРОСТО<br>БЫСТРО<br>НАДЕЖНО",
                    title: "Съемные блоки упрощают уход",
                    text: "Любое растение при необходимости можно снять и планово обслужить (очистить от старых листьев, осмотреть) с уходом справится любой человек."
                },
                {
                    url: require('../../../images/green_wall/green-wall_blocks_4.jpg'),
                    bgColor: "#ffe600",
                    number: "#04",
                    color: "#323232",
                    label: "100%<br>WOW<br>ЭФФЕКТ",
                    title: "С ума сойти! Да у Вас джунгли в стене!",
                    text: ""
                },
            ]
        }
    },
    {
        section: "delivery",
        className: "delivery",
        title: "",
        content: {
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