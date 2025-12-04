import { getImgPath } from "@/utils/image";

export const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "/#blog" },
];

export const count = [
    {
        icon: getImgPath("/images/counter/star.svg"),
        value: "4.86",
        description: "Out of 5 stars from 3896 reviews on Google platform",
    },
    {
        icon: getImgPath("/images/counter/admin.svg"),
        value: "364",
        description: "Client testimonials received in the year 2021",
    },
    {
        icon: getImgPath("/images/counter/bag.svg"),
        value: "45M+",
        description: "Revenue generated through new projects & marketing",
    },
];

export const Progress = [
    { title: 'UX Research and Testing', Progress: 95 },
    { title: 'Product Management', Progress: 84 },
    { title: 'UI & Visual Design', Progress: 90 }
];

export const Servicebox = [
    {
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        title: 'UX & Product Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        title: 'Performance Optimization',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        icon: getImgPath('/images/services/ux-design-product_2.svg'),
        title: 'UX & Products Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
]

export const portfolioinfo = [
    {
        image: getImgPath('/images/portfolio/menstribe-pos.jpg'),
        alt: 'Menstribe POS',
        title: 'Menstribe POS',
        slug: 'menstribe-pos',
        info: 'PHP, MySQL, JavaScript',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/menstribe-bulk.jpg'),
        alt: 'Menstribe Bulk Order',
        title: 'Menstribe Bulk Order',
        slug: 'menstribe-bulk-order',
        info: 'PHP, MySQL, jQuery',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/iot-soil-monitoring.jpg'),
        alt: 'IoT Soil Monitoring',
        title: 'IoT Soil Monitoring',
        slug: 'iot-soil-monitoring',
        info: 'C++, MicroPython, Flutter',
        Class: 'md:mt-0'
    },
]