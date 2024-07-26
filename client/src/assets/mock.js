import Udemy from '/icon/logo/udemy.webp';
import ITSchool from '/icon/logo/itschool.webp';
import Mosh from '/icon/logo/mosh.webp';
import Project from '/icon/logo/project.webp';
import GadgetGridImg from '/icon/logo/gadgetgrid.webp';
import GadgetGrid from '/icon/logo/gadgetgridLogo.webp';
import PortfolioImg from '/icon/logo/balanandrei.webp';
import LaPunte from '/icon/logo/lapunte.webp';
import LaPunteImg from '/icon/logo/restaurantlapunte.webp';
import TipMarketing from '/icon/logo/tipmarketingLogo.webp';
import TipMarketingImg from '/icon/logo/tipMarketing.webp';
import Shoortly from '/icon/logo/shortly.webp';
import ShortlyImg from '/icon/logo/shortlyImg.webp';

const data = {

    courseData: [
        {
            school: 'IT School',
            titleCourse: 'Front-end Web Development 100h',
            date: '03.2023-08.2023',
            description: 'During this five-month course, I experienced a significant  growth in my knowledge and skills in web development. I had the opportunity to work both independently and as part of a team, tackling small projects that challenged and inspired me.',
            teckStack: [
                'HTML & CSS', 'Bootstrap', 'JavaScript', 'React'
            ],
            logo: ITSchool
        },
        {
            school: 'Udemy',
            titleCourse: 'The complete Web Development Bootcamp 65h',
            date: '11.2022-01.2023',
            description: 'This course has been a real challenge for me. In addition to the 65 hours of classes, I invested a lot of time in solving exercises and creating applications. Besides front-end development, I gained knowledge in back-end development and database management.',
            teckStack: [
                'JavaScript', 'React', 'Node.js/Express.js', 'MongoDB', 'Passport.js'
            ],
            logo: Udemy
        },
        {
            school: 'Mosh',
            titleCourse: 'Ultimate JavaScript Part 2: Advanced Topics 4h',
            date: '09.2023',
            description: ' While I am in the process of looking for a job, I am dedicating my time to further develop the skills I have acquired. In this course, I explored advanced JavaScript concepts such as hoisting, closures, and prototypical inheritance.',
            teckStack: [
                'Hoisting, Closures', 'Prototypal inheritance', 'OOP', 'Webpack',
            ],
            logo: Mosh
        },
        {
            school: 'Mosh',
            titleCourse: 'React: Intermediate Topics 6h',
            date: '10.2023',
            description: 'In my journey in the field of web technologies, I chose to focus on React, at least in the initial stage. During this course, I acquired the ability to write clean code and learned to work with libraries and technologies such as React Query, React Router, and Zustand.',
            teckStack: [
                'React and TypeScript', 'React Router', 'React Querry', 'Zustand'
            ],
            logo: Mosh
        }
    ],

    projectData: [
        {
            type: 'Portfolio',
            name: 'Photographer portfolio',
            description: "This is my first web application created according to the client's preferences. It's a MERN application that allows the administrator to manage the content on the page.",
            code: 'https://github.com/CostelMartin08/server-photoApp',
            visit: 'https://balanandrei.ro',
            logo: Project,
            image: PortfolioImg

        },
        {
            type: 'Menu',
            name: 'Restaurant La Punte',
            description: "This application is one of the first ones I have created. Its purpose is to provide a simple way to view a restaurant's menu. By simply scanning a QR code, customers can easily access and view the menu.",
            code: 'https://github.com/CostelMartin08/restaurantlapunte.ro',
            visit: 'https://restaurant-lapunte.ro',
            logo: LaPunte,
            image: LaPunteImg
        },
        {
            type: 'Online Shop',
            name: 'Gadget Grid',
            description: 'Gadget Grid is a web application built with Next.js, MongoDB, Auth.js, and Tailwind CSS. I ve aimed to capture the complexity of an online store, from product listing (in administrator mode) to order confirmation, account creation, password reset, and more.',
            code: 'https://github.com/CostelMartin08/Next.js-store-project',
            visit: 'https://gadgetgrid.ro/',
            logo: GadgetGrid,
            image: GadgetGridImg
        },
        {
            type: 'Presentation site',
            name: 'TIP Marketing',
            description: "Shortly is an application designed to meet Frontend Mentor challenges, integrating an API for URL shortening, making it easier to manage and share links.",
            code: 'https://github.com/CostelMartin08/tip-marketing',
            visit: 'https://tipmarketing.ro/',
            logo: TipMarketing,
            image: TipMarketingImg

        },
        {
            type: 'Tool',
            name: 'Shortly URL',
            description: "Shortly is an application designed to meet Frontend Mentor challenges, integrating an API for URL shortening, making it easier to manage and share links.",
            code: 'https://github.com/CostelMartin08/url-shortening-api/tree/main',
            visit: 'https://costelmartin08.github.io/url-shortening-api/',
            logo: Shoortly,
            image: ShortlyImg

        }
    ]

}



export default data;