export const Data = {
    pricingTitle: 'Voice Plans Pricing',
    frequentlyTitle: 'Frequently Asked Questions',
    frequentlyParagraph: ' We offer IT services to clients, including proactive support, security management, and consulting. Businesses can choose from various MSP plans to optimize technology systems and enhance productivity. MSPs provide tailored solutions, data security, 24/7 support, and assistance with compliance requirements.',
    cards: [
        {
            title: 'Basic',
            content: 'Our Basic Plan is a cost-effective cloud VoIP solution with essential call control features, perfect for small businesses and startups looking to streamline their phone systems efficiently without a hefty price tag.',
            price: {
                1: {
                    discount_amount: '3.30',
                    discount_percent: 10,
                    monthly: 32.95,
                    annually: 29.66,
                },
                33: {
                    discount_amount: "4.79",
                    discount_percent: 15,
                    monthly: 31.95,
                    annually: 27.16,
                },
                66: {
                    discount_amount: "4.19",
                    discount_percent: 15,
                    monthly: 27.95,
                    annually: 23.76,
                },
                100: {
                    discount_amount: "4.85",
                    discount_percent: 18,
                    monthly: 26.95,
                    annually: 22.10,
                }
            },
            button: 'Subscribe Now',
            buttonLink: '',
            list: [
                'Voicemail',
                'Unlimited internet fax',
                'Auto attendant (single Level)',
                'Analytics for IT administrators',
                'Unlimited Domestic voice calling',
                'Emergency calling (E911)',
            ]
        },
        {
            title: 'Professional',
            content: 'Upgrade to our Professional Plan for advanced cloud VoIP capabilities, including essential call control and collaboration tools like Call Queues and business messaging , tailored for growing businesses.',
            price: {
                1: {
                    discount_amount: "3.80",
                    discount_percent: 10,
                    monthly: 37.95,
                    annually: 34.16,
                },
                33: {
                    discount_amount: "5.39",
                    discount_percent: 15,
                    monthly: 35.95,
                    annually: 30.56,
                },
                66: {
                    discount_amount: "4.94",
                    discount_percent: 15,
                    monthly: 32.95,
                    annually: 28.01,
                },
                100: {
                    discount_amount: "5.75",
                    discount_percent: 18,
                    monthly:31.95,
                    annually: 26.20,
                }
            },
            userMonth: '/User/Month',
            button: 'Subscribe Now',
            buttonLinke: '',
            list: [
                'Everything in Basic Service plan Plus',
                'Auto call recording',
                'Advanced call monitoring',
                'Auto attendant (multi-level)',
                'Mobile and Desktop App',
                'CRM Integrations',
                'Call Queues',
            ]
        },
        {
            title: 'Enterprise',
            content: 'Experience the best with our Enterprise Plan, offering everything in the professional Plan plus advanced call controls, and team collaboration features, ideal for established businesses seeking comprehensive solutions.',
            price: {
                1: {
                    discount_amount: "4.80",
                    discount_percent: 10,
                    monthly: 47.95,
                    annually: 43.16,
                },
                33: {
                    discount_amount: "6.89",
                    discount_percent: 15,
                    monthly: 45.95,
                    annually: 39.06,
                },
                66: {
                    discount_amount: "6.44",
                    discount_percent: 15,
                    monthly: 42.95,
                    annually: 36.51,
                },
                100: {
                    discount_amount: "7.55",
                    discount_percent: 18,
                    monthly: 41.95,
                    annually: 34.40,
                }
            },
            userMonth: '/User/Month',
            button: 'Subscribe Now',
            buttonLinke: '',
            list: [
                'Everything in Professional service Plan plus',
                'Video meetings and participants',
                'ACD Supervisor',
                'Pause/Resume call Recording',
                'Agent Evaluator',
                'Speech to Text',
                'Quality Assurance / Score Card',
                'Cloud Contact center',
            ]
        },
    ],

    Silder: {
        monthly: 'Monthly',
        annually: 'Annually',
        upto: 'Save Upto 35%',
        marks: [
            {
              value: 1,
              label: '1-4',
            },
            {
              value: 33,
              label: '5-19',
            },
            {
              value: 66,
              label: '20-99',
            },
            {
              value: 100,
              label: '100+',
            },
          ]
    },

    // CollapsibleList: [
    //     {
    //         title: 'What is an MSP service?',
    //         content: 'Incididunt laborum consequat minim dolor laboris deserunt anim sit anim. Est dolor eu et reprehenderit pariatur cillum. Incididunt adipisicing deserunt non adipisicing quis. Laborum excepteur exercitation do culpa et sit aute. Officia in ullamco in labore exercitation tempor do mollit Lorem et deserunt irure. Deserunt quis fugiat mollit aliquip ad sint labore.',
    //     },
    //     {
    //         title: 'What MSP plans are available?',
    //         content: 'Incididunt laborum consequat minim dolor laboris deserunt anim sit anim. Est dolor eu et reprehenderit pariatur cillum. Incididunt adipisicing deserunt non adipisicing quis. Laborum excepteur exercitation do culpa et sit aute. Officia in ullamco in labore exercitation tempor do mollit Lorem et deserunt irure. Deserunt quis fugiat mollit aliquip ad sint labore.',
    //     },
    //     {
    //         title: 'How does an MSP service help my business?',
    //         content: 'Incididunt laborum consequat minim dolor laboris deserunt anim sit anim. Est dolor eu et reprehenderit pariatur cillum. Incididunt adipisicing deserunt non adipisicing quis. Laborum excepteur exercitation do culpa et sit aute. Officia in ullamco in labore exercitation tempor do mollit Lorem et deserunt irure. Deserunt quis fugiat mollit aliquip ad sint labore.',
    //     },
    //     {
    //         title: 'What kind of support is available with MSP services?',
    //         content: 'Incididunt laborum consequat minim dolor laboris deserunt anim sit anim. Est dolor eu et reprehenderit pariatur cillum. Incididunt adipisicing deserunt non adipisicing quis. Laborum excepteur exercitation do culpa et sit aute. Officia in ullamco in labore exercitation tempor do mollit Lorem et deserunt irure. Deserunt quis fugiat mollit aliquip ad sint labore.',
    //     },
    //     {
    //         title: 'What kind of businesses can benefit from MSP services?',
    //         content: 'Incididunt laborum consequat minim dolor laboris deserunt anim sit anim. Est dolor eu et reprehenderit pariatur cillum. Incididunt adipisicing deserunt non adipisicing quis. Laborum excepteur exercitation do culpa et sit aute.',
    //     },
    //     {
    //         title: 'How much do MSP services cost?',
    //         content: 'Incididunt laborum consequat minim dolor laboris deserunt anim sit anim. Est dolor eu et reprehenderit pariatur cillum. Incididunt adipisicing deserunt non adipisicing quis. Laborum excepteur exercitation do culpa et sit aute.',
    //     },
    //     {
    //         title: 'How do I choose the right MSP service provider for my business?',
    //         content: 'Incididunt laborum consequat minim dolor laboris deserunt anim sit anim. Est dolor eu et reprehenderit pariatur cillum. Incididunt adipisicing deserunt non adipisicing quis. Laborum excepteur exercitation do culpa et sit aute.',
    //     },
    //     {
    //         title: 'Can I customize an MSP service plan to meet my business needs?',
    //         content: 'Incididunt laborum consequat minim dolor laboris deserunt anim sit anim. Est dolor eu et reprehenderit pariatur cillum. Incididunt adipisicing deserunt non adipisicing quis. Laborum excepteur exercitation do culpa et sit aute.',
    //     },
    //     {
    //         title: 'What happens if theres an issue outside of normal business hours?',
    //         content: 'Incididunt laborum consequat minim dolor laboris deserunt anim sit anim. Est dolor eu et reprehenderit pariatur cillum. Incididunt adipisicing deserunt non adipisicing quis. Laborum excepteur exercitation do culpa et sit aute.',
    //     },
    //     {
    //         title: 'How does an MSP service provider ensure the security of my business data?',
    //         content: 'Incididunt laborum consequat minim dolor laboris deserunt anim sit anim. Est dolor eu et reprehenderit pariatur cillum. Incididunt adipisicing deserunt non adipisicing quis. Laborum excepteur exercitation do culpa et sit aute.',
    //     },
    //     {
    //         title: 'What happens if I need additional IT services outside of the MSP service plan?',
    //         content: 'Incididunt laborum consequat minim dolor laboris deserunt anim sit anim. Est dolor eu et reprehenderit pariatur cillum. Incididunt adipisicing deserunt non adipisicing quis. Laborum excepteur exercitation do culpa et sit aute.',
    //     },
    //     {
    //         title: 'How does an MSP service help my business with compliance and regulatory requirements?',
    //         content: 'Incididunt laborum consequat minim dolor laboris deserunt anim sit anim. Est dolor eu et reprehenderit pariatur cillum. Incididunt adipisicing deserunt non adipisicing quis. Laborum excepteur exercitation do culpa et sit aute.',
    //     },
    // ],
}