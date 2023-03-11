export default {
    name: 'James Smith',
    photo: '/photo.jpg',
    address: 'Address Street, City',
    phone: '+62876543210',
    email: 'james.smith@example.com',
    workExperiences: [
        {
            name: 'Senior Software Engineer',
            company: 'Google',
            employmentType: 'Full-time',
            from: 'Aug 2020',
            to: 'Present',
            duration: '',
            details: [
                'Streamlined and automated deployment process for a complex multi-instance web application, resulting in reduced deployment time and improved stability.',
                'Continuously stayed up-to-date with emerging technologies and industry trends, proactively suggesting improvements to existing systems and processes to maintain a competitive edge.',
            ],
        },
        {
            name: 'Software Engineer',
            company: 'Facebook',
            employmentType: 'Contract',
            from: 'Jul 2018',
            to: 'Jul 2020',
            duration: '2 yrs',
            details: [
                'Automated multi-instance web app deployment, reducing deployment time and improving stability.',
                'Kept up-to-date with emerging technologies and trends, proposing system and process improvements to maintain competitiveness.',
            ],
        },
    ],
    sections: [
        {
            name: 'Software Projects',
            data: [
                {
                    from: 2020,
                    to: 2023,
                    name: 'Google Ads',
                    description: 'as Senior Software Engineer',
                    details: [
                        'Developing and maintaining ad-serving systems that deliver ads to end-users across various platforms (web, mobile, etc.).',
                        'Designing and implementing algorithms to optimize ad targeting, delivery, and performance based on user behavior and other data signals.'
                    ],
                },
                {
                    from: 2018,
                    to: 2020,
                    name: 'Facebook Ads',
                    description: 'as Software Engineer',
                    details: [
                        'Collaborating with data scientists and analysts to develop and refine ad targeting models and data pipelines.',
                        'Building and maintaining systems that monitor ad performance and provide insights to advertisers and internal stakeholders.',
                    ],
                },
            ],
        },
        {
            name: 'Educations',
            data: [
                {
                    from: 2016,
                    to: 2018,
                    name: 'Bachelor of Computer Science',
                    description: 'Massachusetts Institute of Technology',
                    details: [
                        'Final project: "Optimizing Ad Placement for Maximum User Engagement and Conversions: An Experimental and Machine Learning Approach to Investigating CTR and CVR"',
                    ],
                },
            ],
        },
        {
            name: 'Computer Skills',
            data: [
                {
                    name: 'Front-End',
                    details: [
                        'SASS, PostCSS, Tailwind CSS',
                        'Vue.js, React JS, React Native, Swift, Kotlin',
                    ],
                },
                {
                    name: 'Back-End',
                    details: [
                        'PHP, Go, Python, Node JS',
                    ],
                },
                {
                    name: 'Data & Analytics',
                    details: [
                        'MySQL, Microsoft SQL Server, MongoDB',
                    ],
                },
                {
                    name: 'Testing',
                    details: [
                        'PHPUnit, Jest, Mockery',
                    ],
                },
                {
                    name: 'Deployment',
                    details: [
                        'Docker, Kubernetes',
                        'Debian, Ubuntu',
                    ],
                },
                {
                    name: 'Project Management',
                    details: [
                        'JetBrains Space',
                        'GitHub',
                        'Jira',
                    ],
                },
            ],
        },
        {
            name: 'Languages',
            data: [
                {
                    to: 'Indonesian',
                    name: 'Native',
                },
                {
                    to: 'English',
                    name: 'Proficient',
                },
            ],
        },
        {
            name: 'Research Interest',
            data: [
                {
                    name: 'Ad Placement Impact',
                },
                {
                    name: 'Ad Engagement Optimization',
                },
            ],
        },
    ],
}
