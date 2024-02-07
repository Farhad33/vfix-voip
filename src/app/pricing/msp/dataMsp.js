import { color } from "@/common/Theme"
import { Tulpen_One } from "next/font/google"

export const faqMSP = {
    pricingTitle: 'Our Pricing and FAQs',
    frequentlyTitle: 'Frequently Asked Questions',
    frequentlyParagraph: ' We offer IT services to clients, including proactive support, security management, and consulting. Businesses can choose from various MSP plans to optimize technology systems and enhance productivity. MSPs provide tailored solutions, data security, 24/7 support, and assistance with compliance requirements.',
    faqItems: [
        {
            title: 'What is an MSP service?',
            paragraph: 'An MSP, or Managed Service Provider, is a company offering comprehensive IT services. VFIX MSP provides remote monitoring, support, network management, security features, and more to optimize and safeguard your business\'s IT infrastructure.',
        },
        {
            title: 'How is VFIX MSP beneficial for my business?',
            paragraph: 'VFIX MSP streamlines your IT operations by proactively managing and monitoring devices, networks, and servers. Benefits include:',
            list: [
                'Reduced downtime through preemptive issue detection.',
                'Enhanced security with updated patches and advanced security features.',
                'Cost savings by avoiding major IT disasters.',
                'Support availability, ensuring smooth business operations.',
            ]
        },
        {
            title: 'How is pricing structured for VFIX MSP services?',
            paragraph: 'VFIX MSP offers tiered pricing depending on the device or service:',
            list: [
                'Node End Devices: Starts at $25/device/month.',
                'Servers: Begins at $175/server/month.',
                'Network (Per Location): Starting at $150/network/month.',
                'Printers: Offered at $10/printer/month.',
            ]
        },
        {
            title: 'What services can I expect for Node End Devices?',
            paragraph: 'Depending on your chosen tier:',
            list: [
                'Basic: Essential services like monitoring, patch management, and limited on-site support.',
                'Advanced: Enhanced security, firewall configuration, and extended remote support.',
                'Premium: 24/7 support, IT asset management, data backup, and more.',
            ]
        },
        {
            title: 'What are the server services provided by VFIX MSP?',
            paragraph: 'Server services range from basic monitoring and patch management to advanced security measures and database management. Higher tiers offer more comprehensive services like server lifecycle management and disaster recovery solutions.',
        },
        {
            title: 'How does VFIX MSP handle network management?',
            paragraph: 'Network services, dependent on your pricing tier, include basic security, DHCP & DNS management, advanced security measures, firewall management, and more. Premium tier offers exclusive services like network design and planning.',
        },
        {
            title: 'What does "Limited on-site support (X Hours/M)" mean in VFIX MSP\'s offerings?',
            paragraph: 'It represents the included hours of on-site technical support per month. For instance, "3 Hours/M" means up to 3 hours of on-site support each month. Consult VFIX MSP for any extra charges beyond the included hours.',
        },
        {
            title: 'What if I go over my "Limited on-site support" hours?',
            paragraph: 'In most cases you wont even need any on-site services. But if that\'s the case you will be charged based on Managed IT services hourly rate.',
        },
        {
            title: 'How can VFIX MSP assure the security of my business data?',
            paragraph: 'VFIX MSP integrates robust security measures like firewalls, antivirus management, advanced security features, intrusion detection, and regular security patch updates, ensuring your business data remains protected against threats.',
        },
        {
            title: 'If I need additional IT services outside the chosen plan, how does VFIX MSP handle that?',
            paragraph: 'VFIX MSP is adaptable to unique client requirements. If you need services beyond your selected plan, it\'s best to discuss directly with VFIX MSP for tailored solutions or additional service provisions.',
        },
        {
            title: 'How does VFIX MSP aid businesses in staying compliant with regulations?',
            paragraph: 'By ensuring IT systems are fortified with up-to-date security measures, VFIX MSP aids businesses in adhering to standards like HIPAA, PCI-DSS, and GDPR. Their expertise can also provide insights into compliance requirements, making regulatory adherence more straightforward.Optimizing your IT infrastructure and ensuring seamless operations is integral for businesses today. With VFIX MSP, you get an ally in maintaining a robust IT environment, supporting your business\'s growth andsecurity needs.',
        },
    ]
}

export const tablePricingData = [
    
    {
        title: 'Desktop & Laptop Pricing',
        table: {
            thead: [
                {
                    title: 'Services',
                    price: ''
                },
                {
                    title: 'Basic',
                    price: '$25',
                    description: 'device/month',
                },
                {
                    title: 'Advanced',
                    price: '$45',
                    description: 'device/month',
                },
                {
                    title: 'Premium',
                    price: '$65',
                    description: 'device/month',
                },

            ],
            tbody: [
                {
                    title: 'Remote monitoring and management',
                    basic: true,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Basic support and troubleshooting',
                    basic: true,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Patch management',
                    basic: true,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Software installation and updates',
                    basic: true,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Hardware and software inventory',
                    basic: true,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Antivirus and Anti-malware management',
                    basic: false,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Firewall configuration',
                    basic: false,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Password management using Keeper',
                    basic: false,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Regular system optimization',
                    basic: false,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Advanced security features',
                    basic: false,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Remote support (Business hours 9-5)',
                    basic: true,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Remote support (Extended hours 7-7)',
                    basic: false,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Remote support (24/7)',
                    basic: false,
                    advanced: false,
                    premium: true
                },
                {
                    title: 'Limited on-site support (3 Hours/M)',
                    basic: true,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Limited on-site support (6 Hours/M)',
                    basic: false,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Limited on-site support (12 Hours/M)',
                    basic: false,
                    advanced: false,
                    premium: true
                },
                {
                    title: 'After-hours support',
                    basic: false,
                    advanced: false,
                    premium: true
                },
                {
                    title: 'IT asset management',
                    basic: false,
                    advanced: false,
                    premium: true
                },
                {
                    title: 'Data backup and recovery',
                    basic: false,
                    advanced: false,
                    premium: true
                },

            ]
        }
    },
    {
        title: 'Server Pricing',
        table: {
            thead: [
                {
                    title: 'Services',
                    price: ''
                },
                {
                    title: 'Basic',
                    price: '$175',
                    description: 'server/month'
                },
                {
                    title: 'Advanced',
                    price: '$300',
                    description: 'server/month'
                },
                {
                    title: 'Premium',
                    price: '$500',
                    description: 'server/month',
                },

            ],
            tbody: [
                {
                    title: 'Server Monitoring',
                    basic: true,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Patch Management',
                    basic: true,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Basic Server Maintenance',
                    basic: true,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'User and Permission Management',
                    basic: true,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Software and OS Updates',
                    basic: true,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Application Server Management',
                    basic: false,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Server Firewall Management',
                    basic: false,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Limited on-site support (3 Hours/M)',
                    basic: true,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Limited on-site support (6 Hours/M)',
                    basic: false,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Limited on-site support (12 Hours/M)',
                    basic: false,
                    advanced: false,
                    premium: true
                },
                {
                    title: 'After-hours support',
                    basic: false,
                    advanced: false,
                    premium: true
                },
                {
                    title: 'Server lifecycle management',
                    basic: false,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Local server backup',
                    basic: true,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Cloud server backup',
                    basic: false,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Vulnerability Assessment',
                    basic: false,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Endpoint Threat Detection And Response For Servers',
                    basic: false,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Antivirus and Anti-malware management For Servers',
                    basic: false,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Managed Detection And Response 24x7',
                    basic: false,
                    advanced: false,
                    premium: true
                },
                {
                    title: 'Disaster recovery solutions',
                    basic: false,
                    advanced: false,
                    premium: true
                },
                {
                    title: 'Database management',
                    basic: false,
                    advanced: false,
                    premium: true
                },
               

            ]

        }
    },
    {
        title: 'Network Pricing',
        table: {
            thead: [
                {
                    title: 'Services',
                    price: ''
                },
                {
                    title: 'Basic',
                    price: '$150',
                    description: 'location/month'
                },
                {
                    title: 'Advanced',
                    price: '$250',
                    description: 'location/month'
                },
                {
                    title: 'Premium',
                    price: '$350',
                    description: 'location/month',
                },

            ],
            tbody: [
                {
                    title: 'Network monitoring',
                    basic: true,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Basic network security',
                    basic: true,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Essential network management',
                    basic: true,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'DHCP & DNS management',
                    basic: true,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Wireless network management',
                    basic: true,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Performance optimization',
                    basic: false,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Advanced network security',
                    basic: false,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Firewall management',
                    basic: false,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Intrusion detection',
                    basic: false,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Limited on-site support (3 Hours/M)',
                    basic: true,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Limited on-site support (6 Hours/M)',
                    basic: false,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'Limited on-site support (12 Hours/M)',
                    basic: false,
                    advanced: false,
                    premium: true
                },
                {
                    title: 'Network design and planning services',
                    basic: false,
                    advanced: true,
                    premium: true
                },
                {
                    title: 'After-hours support',
                    basic: false,
                    advanced: false,
                    premium: true
                },
                {
                    title: 'VPN and remote access support',
                    basic: false,
                    advanced: false,
                    premium: true
                },
            ]
        }
    },
    {
        title: 'Printer Pricing',
        table: {
            thead: [
                {
                    title: 'Services',
                    price: ''
                },
                {
                    title: 'Basic',
                    price: '$10',
                    description: 'printer/month' 
                },
            ],
            tbody: [
                {
                    title: 'Printer monitoring and management',
                    basic: true,
                },
                {
                    title: 'Basic printer troubleshooting',
                    basic: true,
                },
                {
                    title: 'Printer driver installation and updates',
                    basic: true,
                },
                {
                    title: 'Limited on-site support (3 Hours/M)',
                    basic: true,
                },
                {
                    title: 'Remote support',
                    basic: true,
                },
            ]
        }
    },
    {
        title: 'Extra Services',
        table: {
            thead: [
                {
                    title: 'Benefits',
                    price: ''
                },
                {
                    title: 'Break Fix Model',
                    price: '$259/Hour',
                    description: 'IT support for non service plan customers'
                },
                
                {
                    title: 'Managed IT Services',
                    price: '$129/Hour',
                    description: 'For additional On-Site IT support',
                },

            ],
            tbody: [
                {
                    title: 'Guaranteed Service Time',
                    basic: false,
                    advanced: true,
                },
                {
                    title: 'Predictable Costs',
                    basic: false,
                    advanced: true,
                },
                {
                    title: 'Constant Monitoring after the service',
                    basic: false,
                    advanced: true,
                },
                {
                    title: 'Robust Security',
                    basic: false,
                    advanced: true,
                },

                
            ]
        }
    },
]