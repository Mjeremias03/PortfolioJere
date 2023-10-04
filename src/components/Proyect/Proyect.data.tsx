import { SiTailwindcss, SiGithub, SiReact,SiVercel, SiNextdotjs, SiTestinglibrary,SiRedux,SiNodedotjs,SiExpress,SiCss3,SiTypescript,SiPostgresql } from "react-icons/si";

export const proyectData = [
  {
    id: 0,
    title: "Countries",
    description:
      " Pagina que te permite explorar y conocer más de cerca los países de todo el mundo. Con una amplia base de datos actualizada, podrás acceder a información detallada sobre cada país, incluyendo datos como su cultura, historia, geografía, capital, población, área geográfica y una variedad de actividades culturales y turísticas que puedes disfrutar en cada destino.",
    img: "/Countries.png",
    deploy: [
      {
        icon: (
          <a href="https://github.com/Mjeremias03" target="_blank" rel="noopener noreferrer">
            <SiGithub size="40" />
          </a>
        )
      },
      {
        icon: (
          <a href="" target="_blank" rel="noopener noreferrer">
            <SiVercel size="40" />
          </a>
        )
      },
    ],
    skills: [
      {
        icon: <SiReact size="40" />
      },
      {
        icon: <SiCss3 size="40" />
      },
      {
        icon: <SiExpress size="40" />
      },
      {
        icon: <SiNodedotjs size="40" />
      },
      {
        icon: <SiRedux size="40" />
      },
      {
        icon: <SiPostgresql size="40" />
      },
    ]
  },
  {
    id: 1,
    title: "E-commers",
    description:
    "El proyecto 'E-commerce React de Vinilos' es una pagina de comercio electrónico diseñada para amantes de la música y coleccionistas de vinilos. Esta aplicación web ofrece una experiencia única para explorar, buscar y adquirir una amplia variedad de discos de vinilo, desde clásicos atemporales hasta las últimas",
      img: "/Vinyls.png",
      deploy: [
        {
          icon: (
            <a href="https://github.com/Mjeremias03" target="_blank" rel="noopener noreferrer">
              <SiGithub size="40" />
            </a>
          )
        },
        {
          icon: (
            <a href="https://vinils-trade-client.vercel.app" target="_blank" rel="noopener noreferrer">
              <SiVercel size="40" />
            </a>
          )
        },
      ],
    skills: [
      {
        icon: <SiNextdotjs size="40" />
      },
      {
        icon: <SiReact size="40" />
      },
      {
        icon: <SiTailwindcss size="40" />
      },
      {
        icon: <SiRedux size="40" />
      },
      {
        icon: <SiCss3 size="40" />
      },
      {
        icon: <SiExpress size="40" />
      },
      {
        icon: <SiPostgresql size="40" />
      },
    ]
  },
  {
    id: 2,
    title: "Portfolio",
    description:
   "",
      img: "Portfolio.png",
      deploy: [
        {
          icon: (
            <a href="https://github.com/Mjeremias03" target="_blank" rel="noopener noreferrer">
              <SiGithub size="40" />
            </a>
          )
        },
        {
          icon: (
            <a href="" target="_blank" rel="noopener noreferrer">
              <SiVercel size="40" />
            </a>
          )
        },
      ],
    skills: [
      {
        icon: <SiNextdotjs size="40" />
      },
      {
        icon: <SiTailwindcss size="40" />
      },
      {
        icon: <SiCss3 size="40" />
      },
      {
        icon: <SiTypescript size="40" />
      },
    ]
  },
]