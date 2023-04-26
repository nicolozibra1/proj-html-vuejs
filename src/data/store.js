import {reactive} from 'vue';

export const store = reactive({
    navLinks: [
        'home',
        'about',
        'prices',
        'courses',
        'locations',
        'blog'
    ],
    courses: [
        {
            id: 1,
            name: 'pass plus',
            image: 'courses-passplus.jpg'
        },
        {
            id: 2,
            name: 'intensive course',
            image: 'course-intensive.jpg'
        },
        {
            id: 3,
            name: 'instructors',
            image: 'courses-instructor.jpg'
        },
    ],
    instructors: [
        {
            id: 1,
            name: 'Mike Hart',
            image: 'instructor-mikehart.jpg'
        },
        {   
            id:2,
            name: 'John Smith',
            image: 'instructor-johnsmith.jpg'
        },
        {   
            id: 3,
            name: 'Angela Hart',
            image: 'instructor-angelahart.jpg'
        }
    ],
    testimonials: [
        {
            id: 1,
            name: 'grant',
            image: 'testimonial-grant.png'
        },
        {
            id:2,
            name: 'harold',
            image: 'testimonial-harold.png'
        },
        {
            id:3,
            name: 'kate',
            image: 'testimonial-kate.png'
        },
        {
            id:4,
            name: 'kelly',
            image: 'testimonial-kelly.png'
        },
        {
            id:5,
            name: 'sophia',
            image: 'testimonial-sophia.png'
        }
    ],
    latestNews: [
        {
            id: 1,
            title: 'What Car to Start With?',
            image: 'blog-choosecar.jpg'
        },
        {
            id: 2,
            title: 'Avada Driving School Expanding',
            image: 'blog-10and2.jpg'
        }
    ],
    contacts: [
        {
            address: '12345 North Main Street, New York, NY 555555',
            number: '1.800.555.6789',
            email: 'info@your-domain.com',
            link: 'Theme-Fusion.com'
        }
    ]
})