export const Data = {
    navbar: {
        menu: [
            {
                title: 'Home',
                route: '/',
            },
            {
                title: 'Services',
                route: '',
                dropdown: [
                    {
                        title: 'UCaas',
                        route: '',
                        dropdown: [
                            {
                                title: 'CLOUD PHONE SYSTEM',
                                route: '/services/cloudphonesystem',
                                svg: 'CloudPhoneSystem'
                            },
                            {
                                title: 'CLOUD CONTACT CENTER',
                                route: '/services/cloudcontentcenter',
                                svg: 'CloudContact'
                            },
                            {
                                title: 'BUSINESS MESSAGING',
                                route: '/services/businessmessaging',
                                svg: 'BusinessMessaging'
                            },
                            {
                                title: 'TEAM & WEB COLLABORATION',
                                route: '/services/teamwebcollaboration',
                                svg: 'TeamWebColab'
                            },
                            {
                                title: 'DIRECT ROUTING FOR MICROSOFT TEAMS',
                                route: '/services/directrouting',
                                svg: 'DirectRouting'
                            },
                            {
                                title: 'MOBILE & DESKTOP APPS',
                                route: '/services/mobiledesktopapp',
                                svg: 'MobileDesktopApps'
                            },
                        ],
                    },
                    {
                        title: 'IT MSP',
                        route: '',
                        dropdown: [
                            {
                                title: 'Proactive Monitoring and Maintenance',
                                route: '/services/proactivemonitoring',
                                svg: 'Proactive'
                            },
                            {
                                title: 'Network Security and Compliance',
                                route: '/services/networksecurity',
                                svg: 'NetworkSecurity'
                            },
                            {
                                title: 'Data Backup and Disaster Recovery',
                                route: '/services/databackup',
                                svg: 'DataBackup'
                            },
                            {
                                title: 'Help Desk Support',
                                route: '/services/helpdesksupport',
                                svg: 'Helpdesk'
                            },
                            {
                                title: 'Software and Hardware Management',
                                route: '/services/softwarehardware',
                                svg: 'SoftwareAndHardware'
                            },
                            {
                                title: 'Cloud Services and Migration',
                                route: '/services/cloudservices',
                                svg: 'CloudServices'
                            },
                        ],
                    },
                ],
            },
            {
                title: 'Why Vfix',
                route: '/whyvfix',
            },
            {
                title: 'Princing & FAQs',
                route: '',
                dropdown: [
                    {
                        title: 'IT MSP & Consulting',
                        route: '/pricing/msp',
                        svg: 'ITMSP'
                    },
                    {
                        title: 'Business Comminucations',
                        route: '/pricing/voip',
                        svg: 'BusinessCommPricing'
                    }
                ]
            },
            {
                title: 'Downloads',
                route: '/download',
            },
            {
                title: 'Blog',
                route: '/blog',
            },

        ],
        login: '/login',
        img: '/Navbar/vfixlogo.svg',
        alt: 'Vfix Voip Logo'
    },
    header: {
        title: 'VFIX Provides IT Helpdesk Support and Managed IT Services for you home, office and small businesses in San Francisco Bay Area',
        paragraph: 'VFIX Communications Managed IT Services, IT consulting, and communications solutions such as VoIP, Unified Communications (UC), Hosted PBX Contact Center and Messaging services are designed to enhance productivity, streamline operations, and drive digital transformation. Partner with us to unlock the full potential of your IT needs for your home or business.',
        //'VFIX Communications Managed IT Services, IT consulting, and business communications solutions such as VoIP, Unified Communications (UC), Hosted PBX Contact Center and Business Messaging services are designed to enhance productivity, streamline operations, and drive digital transformation. Partner with us to unlock the full potential of your organization and achieve sustainable growth.'
        button: 'Learn More',
        img: '/Header/header.json',
        alt: 'Man'
    },
    success: {
        headTitle: 'Success With VFIX Communications',
        headContent: 'Unlock your home or office IT needs with our comprehensive suite of services. From reliable IT management to cutting-edge cloud solutions and seamless communication, we provide the tools and expertise to drive your IT needs forward. Partner with us today and experience the transformation that leads to unparalleled success.',
        //'Unlock your business potential for success with our comprehensive suite of services. From reliable IT management to cutting-edge cloud solutions and seamless communication, we provide the tools and expertise to drive your business forward. Partner with us today and experience the transformation that leads to unparalleled success.'
        button: 'Learn More',
        cards1: [
            {
                title: 'Carrier Grade Network',
                paragraph: 'Carrier-Grade Network -25 years experience delivering TDM and Cloud Services',
                svg: 'CarrierGrade'
            },
            {
                title: 'Tailored Solutions',
                paragraph: 'We provide personalized, customized solutions that cater to your specific home or business needs, ensuring maximum efficiency and effectiveness.',
                //'We provide personalized, customized solutions that cater to your specific business needs, ensuring maximum efficiency and effectiveness.'
                svg: 'Tailored'
            },
        ],
        cards2: [
            {
                title: 'Expertise and Support',
                paragraph: 'Our experienced team of certified professionals offers comprehensive support and guidance, ensuring seamless implementation and ongoing management of your IT infrastructure.',
                svg: 'Expertise'
            },
            {
                title: 'End-to-End Services',
                paragraph: 'From Managed IT Services to cloud solutions and business communications, we offer a complete suite of services, simplifying your technology needs by having a single, trusted partner.',
                svg: 'EndToEnd'
            },
        ]
    },
    services: {
        headTitle: 'View Our UCaaS Services',
        cards: [
            {
                title: 'Hosted PBX',
                paragraph: 'Experience the transformative power of our advanced Hosted VoIP service. Save money, increase productivity, and stay ahead in the changing workplace with IP-based cloud communications.',
                svg: 'HostedPBX'
            },
            {
                title: 'Direct Routing for Microsoft Teams ',
                paragraph: 'Direct Routing service enables you with a cost effective way to connect this popular communications and collaboration hub to the outside world by enabling calling to the public switched telephone network (PSTN) and more.',
                svg: 'DirecRouting'
            },
            {
                title: 'Mobile & Desktop Apps',
                paragraph: 'Users  working life constantly moves from desk to laptop to smart phone to tablet. Now they can use all the features of their Hosted PBX solution from almost any device',
                svg: 'MobileDesktop'
            },
            {
                title: 'Cloud Contact Center',
                paragraph: 'Our Cloud Contact Center is the next step to delivering superior customer experience to our customers by enabling them to use the tools they need to thrive in an ever-changing world.',
                svg: 'CloudContactCenter'
            },
            {
                title: 'Team & and  Web Collaboration',
                paragraph: 'Enabling customers to improve their productivity with a rich set of video conferencing, presentation and screen sharing features.',
                svg: 'TeamWeb'
            },
        ]

    },
    itmanaged: {
        title: 'Your Trusted Managed IT Service Provider and IT Consulting Partner',
        paragraph: 'At VFIX Communications, we are committed to delivering comprehensive IT solutions for you that meet the diverse needs of your home or office. As your trusted Managed IT Service Provider (MSP) and IT consulting partner, we offer a wide range of services like computer and server repair, Wi-Fi network installation Virus and Malware Removal.',
        //'At VFIX Communications, we are committed to delivering comprehensive IT solutions that meet the diverse needs of businesses across industries. As your trusted Managed IT Service Provider (MSP) and IT consulting partner, we offer a wide range of services to ensure your technology infrastructure is robust, secure, and aligned with your business goals. With our expertise and strategic guidance, we help you maximize productivity, enhance security, and drive digital transformation.'
        button: 'Learn More',
        img: '/ITManaged/ITManaged.png'
    },
    ITManagedServices: {
        headTitle: 'Managed IT Services',
        headContent: 'As your dedicated Managed IT Service Provider, we take care of your technology infrastructure so you can focus on your core business. Our tailored Managed IT Services include:',
        cards: [
            {
                title: 'Virus and Malware Removal Service',
                //Proactive Monitoring and Maintenance
                paragraph: 'We remove Virus and Malwares from you home or office computer and update all the applications to ensure the secuirty of your computer. We also remove all the corrupt files and suggest a new malware protection to ensure your computer saftey in the future. ',
                //'We monitor your network, servers, and devices 24/7, detecting and resolving potential issues before they impact your operations. Our proactive approach ensures optimal performance, minimizes downtime, and improves overall system reliability.'
                button: 'Learn More',
                svg: 'SVGProactive',
                btnUrl: '/services/proactivemonitoring'
            },
            {
                title: 'Wi-Fi Desgin and Installation',
                //'Network Security and Compliance'
                paragraph: 'We desing and implement your Wi-Fi using Mesh system to ensure you have a solid Wi-Fi network in your home or in your office and to protect your sensitive data from cyber threats. Our team ensures to implement industry standards and to providing you with peace of mind and mitigating risks.',
                //'We implement robust security measures to protect your sensitive data from cyber threats. Our team ensures compliance with industry standards and regulations, such as HIPAA, GDPR, and PCI-DSS, providing you with peace of mind and mitigating risks.'
                button: 'Learn More',
                svg: 'SVGNetworkSecurity',
                btnUrl: '/services/networksecurity'
            },
            {
                title: 'Data Backup and Disaster Recovery',
                paragraph: 'We safeguard your critical data through regular backups and implement comprehensive disaster recovery solutions. In the event of data loss or system failure, we ensure quick restoration and minimal disruption to your day to day.',
                //'We safeguard your critical data through regular backups and implement comprehensive disaster recovery solutions. In the event of data loss or system failure, we ensure quick restoration and minimal disruption to your business operations.'
                button: 'Learn More',
                svg: 'SVGDataBackup',
                btnUrl: '/services/databackup'
            },
            {
                title: 'Help Desk Support',
                paragraph: 'Our dedicated help desk team is available to resolve your IT-related issues promptly. From troubleshooting software glitches to addressing hardware concerns, we provide efficient support,even as simple as a change of a Wi-Fi password',
                //'Our dedicated help desk team is available to resolve your IT-related issues promptly. From troubleshooting software glitches to addressing hardware concerns, we provide efficient support, enabling your employees to stay productive.'
                button: 'Learn More',
                svg: 'SVGHelpDesk',
                btnUrl: '/services/helpdesksupport'
            },
            {
                title: 'Software and Hardware Management',
                paragraph: 'We handle all aspects of software and hardware management, including license management, updates, and upgrades. Our experts ensure that your technology environment is up-to-date, secure, and optimized for performance.',
                button: 'Learn More',
                svg: 'SVGHardwareManagement',
                btnUrl: '/services/softwarehardware'
            },
            {
                title: 'Cloud Services and Migration',
                paragraph: 'We assist you in leveraging the benefits of cloud computing, from strategic planning to seamless migration. Whether you need private, public, or hybrid cloud solutions, we help you optimize costs, enhance scalability, and improve collaboration.',
                button: 'Learn More',
                svg: 'SVGCloudServices',
                btnUrl: '/services/cloudservices'
            },
        ]
    },
    /*ITConsultingServices: {
        headTitle: 'IT Consulting Services',
        headContent: 'Our IT consulting services are designed to transform your business and leverage technology for sustainable growth. We offer strategic guidance and practical solutions in various areas, including:',
        cards: [
            {
                title: 'Technology Strategy',
                paragraph: 'We collaborate with you to develop a technology roadmap aligned with your business objectives. Our consultants assess your current ITlandscape, identify gaps, and recommend solutions to optimize your technology investments.',
                svg: 'Strategy'
            },
            {
                title: 'Digital Transformation',
                paragraph: 'Embrace digital technologies to streamline operations and unlocknew opportunities. We help you harness the power of automation, data analytics, artificial intelligence, and Internet of Things (IoT) to drive innovation efficiency, and customer engagement.',
                svg: 'DigitalTransformation'
            },
            {
                title: 'Industry-Specific Solutions',
                paragraph: 'We understand the unique challenges and requirements of different industries. With expertise in sectors such as healthcare, finance, retail, and more, we deliver tailored IT solutions that address industry-specificregulations, compliance, and best practices..',
                svg: 'Industary'
            },
        ]
    },
    IndustriesWeServe: {
        headTitle: 'Industries We Serve',
        headContent: 'We have extensive experience working with diverse industries, including:',
        cards: [
            {
                title: 'Healthcare',
                paragraph: 'Our IT solutions assist healthcare providers in achieving HIPAA compliance, implementing secure electronic health records (EHR) systems, and optimizing healthcare workflows for improved patient care.',
                img: '/IndustriesWeServe/IndustriesWeServe01.png'
            },
            {
                title: 'Service Industry',
                paragraph: 'We help service-based businesses transition to the cloud, enabling remote work, enhancing collaboration, and automating manual processes. Increase efficiency, scalability, and customer satisfaction with our tailored solutions.',
                img: '/IndustriesWeServe/IndustriesWeServe02.png'
            },
            {
                title: 'Hospitality',
                paragraph: 'We provide the hospitality industry with upgraded network infrastructure and reliable Wi-Fi connectivity. Our network monitoring services ensure uninterrupted guest experiences and efficient management of hotel operations.',
                img: '/IndustriesWeServe/IndustriesWeServe03.png'
            },
            {
                title: 'Construction',
                paragraph: 'Our IT services empower construction companies with advanced network solutions, IT automation, and project management tools. Streamline communication, enhance collaboration, and improve productivity in construction projects.',
                img: '/IndustriesWeServe/IndustriesWeServe04.png'
            },
        ]
    },
    PartnerWithVfix: {
        headTitle: 'Partner with VFIX Communications to leverage the following advantages',
        headContent: 'Contact us today to discuss your IT needs and discover how VFIX Communications can become your trusted Managed IT Service Provider and IT consulting partner. Let us empower your organization with reliable IT management, innovative solutions, and strategic guidance for long-term success.',
        contactUsText: 'Feeling unsure or have any questions? Reach out today and let s embark on a journey towards empowering your business!',
        contactUsBtn: 'Contact Us Today',
        cards: [
            {
                title: 'Expertise',
                paragraph: 'Our team of certified IT professionals brings extensive industry knowledge and technical expertise to deliver reliable solutions tailored to your unique needs.',
                svg: 'ExpertisePro'
            },
            {
                title: 'Customer-Centric Approach',
                paragraph: 'We prioritize understanding your business goals and challenges, enabling us to provide personalized solutions and exceptional customer service.',
                svg: 'CustomerCentric'
            },
            {
                title: 'Cutting-Edge Solutions',
                paragraph: 'We stay updated with the latest advancements in technology to offer innovative solutions that drive your business forward.',
                svg: 'CuttingEdge'
            },
            {
                title: 'Proactive Support',
                paragraph: 'We take a proactive approach to IT management, monitoring your systems and resolving issues before they impact your operations. Our goal is to minimize downtime and maximize productivity.',
                svg: 'ProactiveSupport'
            },
            {
                title: 'Long-Term Partnership',
                paragraph: 'We strive to build long-term partnerships based on trust, integrity, and mutual growth. We are dedicated to your success and continuously seek opportunities to optimize your technology investments.',
                svg: 'LongTerm'
            },
        ]
    },*/
    footer: {
        address: 'San Francisco CA',
        phone: 'Toll Free: 888.888.5854',
        social: 'Follow us',
        app: 'Mobile app',
        logoFooter: '/Footer/LogoFooter.svg',
        logoName: 'Vfix Logo',
        imgs: [
            { img: '/Footer/facebook.png', alt: 'vfix communications facebook', link: 'https://www.facebook.com/vfixmsp' },
            { img: '/Footer/x.png', alt: 'vfix communications x', link: 'https://x.com/vfixmsp' },
            { img: '/Footer/linkedin.png', alt: 'vfix communications linkedin', link:   'https://www.linkedin.com/company/vfixmsp/' },
            { img: '/Footer/instagram.png', alt: 'vfix communications instagram', link: 'https://www.instagram.com/vfixmsp/' }
        ],
        appImges: [
            { img: '/Footer/apple.png', alt: 'App Store', link: 'https://apps.apple.com/us/app/max-uc/id546673632'},
            { img: '/Footer/android.png', alt: 'Google Play', link: 'https://play.google.com/store/apps/details?id=com.metaswitch.cp.Accession&hl=en&gl=US'}
        ],

        lists: [
            {
                title: 'Cloud Phone System',
                list: [
                    { name: 'PowerDialer', link: '/services/cloudphonesystem' },
                    { name: 'IVR', link: '/services/cloudcontentcenter' },
                    { name: 'Call Routing', link: '/services/directrouting' },
                    { name: 'Call Center Analytics', link: '/services/cloudcontentcenter' },
                    { name: 'CTI Integration', link: '/services/teamwebcollaboration' },
                    { name: 'Click to Dial', link: '/services/mobiledesktopapp' },
                ]
            },
            {
                title: 'Solutions',
                list: [
                    { name: 'Call Center', link: '/services/cloudcontentcenter' },
                    { name: 'IT Consulting', link: '/services/itconsulting' },
                    { name: 'Managed IT Services', link: '/pricing/msp' },
                    { name: 'Cloud Phone System', link: '/services/cloudphonesystem' },
                    { name: 'Cloud Services', link: '/services/cloudservices' },
                    { name: 'Business Messaging', link: '/services/businessmessaging' }
                ]
            },
            {
                title: 'Portals',
                list: [
                    { name: 'Service Desk Portal', link: 'http://portal.vfixmsp.com' },
                    { name: 'Fax Portal', link: 'https://myhostedfax.com' },
                    { name: 'Call Recordings', link: 'https://vfix.mysiprec.com' },
                    { name: 'Phone System End User Portal ', link: 'https://vfix.uccommportal.com' },
                    { name: 'Business Group Admin Portal ', link: 'https://vfix.uccommportal.com/bg' },
                    { name: 'Self Serve Billing', link: 'https://vfix.mycloudbill.com/selfcare.do?party=vfix' }
                ]
            },
            {
                title: 'Managed IT Services',
                list: [
                    { name: 'Cloud Integrations', link: '/services/cloudservices' },
                    { name: 'Network Security', link: '/services/networksecurity' },
                    { name: 'IT Help Desk', link: '/services/helpdesksupport' },
                    { name: 'Proactive Monitoring & Maintenance ', link: '/services/proactivemonitoring' },
                    { name: 'Software & Hardware Mangement', link: '/services/softwarehardware' },
                    { name: 'Backup and disaster recovery', link: '/services/databackup' },
                ]
            },
            {
                title: 'Pricing & FAQs',
                list: [
                    { name: 'Managed Services', link: '/pricing/msp' },
                    { name: 'Business Comminucations', link: '/pricing/voip' },
                    { name: 'Status', link: 'https://status.vfixmsp.com/' }
                ]
            },
        ],
        footerEnd: {
            list: ['Copyright VFIX 2023', 'Privacy Policy', 'Terms & Conditions']
        }
    }
}

export const ItConsultingData = {
    title: 'IT Consulting',
    route: '/services/itconsulting',
    paragraph: 'Harness the Dynamic Potential of Cutting-Edge Technology with Expert IT Consulting. Seamlessly navigate the ever-evolving landscape of digital innovation and empower your organization with a bespoke IT strategy and roadmap.',
    icon: '/Services/ITConsulting/Consulting.png',
    button: 'Learn More',
}