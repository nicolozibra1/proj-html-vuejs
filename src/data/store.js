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
            image: 'instructor-mikehart.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {   
            id:2,
            name: 'John Smith',
            image: 'instructor-johnsmith.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {   
            id: 3,
            name: 'Angela Hart',
            image: 'instructor-angelahart.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
    ],
    testimonials: [
        {
            id: 1,
            name: 'grant harvey',
            image: 'testimonial-grant.png'
        },
        {
            id:2,
            name: 'harold green',
            image: 'testimonial-harold.png'
        },
        {
            id:3,
            name: 'kate lewis',
            image: 'testimonial-kate.png'
        },
        {
            id:4,
            name: 'kelly johnson',
            image: 'testimonial-kelly.png'
        },
        {
            id:5,
            name: 'sophia jones',
            image: 'testimonial-sophia.png'
        }
    ],
    latestNews: [
        {
            id: 1,
            title: 'What Car to Start With?',
            image: 'blog-choosecar.jpg',
            date: 'February 7th, 2019',
            comments: 0,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
        },
        {
            id: 2,
            title: 'Avada Driving School Expanding',
            image: 'blog-10and2.jpg',
            date: 'February 7th, 2019',
            comments: 0,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
        }
    ],
    contacts: [
        {
            address: '12345 North Main Street, New York, NY 555555',
            number: '1.800.555.6789',
            email: 'info@your-domain.com',
            link: 'Theme-Fusion.com'
        }
    ],
    coursesLinks: [
       'Pass Plus',
       'Intensive Course',
       'Automatic',
       'Instructor Training' 
    ]
})