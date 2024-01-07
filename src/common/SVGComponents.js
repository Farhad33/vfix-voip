import dynamic from 'next/dynamic'

const SVGComponents = {
    SVGProactive: dynamic(() => import('@/app/services/proactivemonitoring/SVGComponent')),
    SVGNetworkSecurity: dynamic(() => import('@/app/services/networksecurity/SVGComponent')),
    SVGDataBackup: dynamic(() => import('@/app/services/databackup/SVGComponent')),
    SVGHelpDesk: dynamic(() => import('@/app/services/helpdesksupport/SVGComponent')),
    SVGHardwareManagement: dynamic(() => import('@/app/services/softwarehardware/SVGComponent')),
    SVGCloudServices: dynamic(() => import('@/app/services/cloudservices/SVGComponent')),

    Tailored: dynamic(() => import('@/common/success/Tailored')),
    CarrierGrade: dynamic(() => import('@/common/success/CarrierGrade')),
    EndToEnd: dynamic(() => import('@/common/success/EndToEnd')),
    Expertise: dynamic(() => import('@/common/success/Expertise')),

    CloudContactCenter: dynamic(() => import('@/common/services/CloudContactCenter')),
    DirecRouting: dynamic(() => import('@/common/services/DirecRouting')),
    HostedPBX: dynamic(() => import('@/common/services/HostedPBX')),
    MobileDesktop: dynamic(() => import('@/common/services/MobileDesktop')),
    TeamWeb: dynamic(() => import('@/common/services/TeamWeb')),

    ExpertisePro: dynamic(() => import('@/common/partnerwithvfix/ExpertisePro')),
    CustomerCentric: dynamic(() => import('@/common/partnerwithvfix/CustomerCentric')),
    CuttingEdge: dynamic(() => import('@/common/partnerwithvfix/CuttingEdge')),
    LongTerm: dynamic(() => import('@/common/partnerwithvfix/LongTerm')),
    ProactiveSupport: dynamic(() => import('@/common/partnerwithvfix/ProactiveSupport')),

    Strategy: dynamic(() => import('@/common/itconsulting/Strategy')),
    DigitalTransformation: dynamic(() => import('@/common/itconsulting/DigitalTransformation')),
    Industary: dynamic(() => import('@/common/itconsulting/Industary')),

    ITMSP: dynamic(() => import('@/common/navbar/svg/ITMSP')),
    BusinessCommPricing: dynamic(() => import('@/common/navbar/svg/BusinessCommPricing')),

    CloudPhoneSystem: dynamic(() => import('@/common/navbar/svg/CloudPhoneSystem')),
    CloudContact: dynamic(() => import('@/common/navbar/svg/CloudContact')),
    BusinessMessaging: dynamic(() => import('@/common/navbar/svg/BusinessMessaging')),
    TeamWebColab: dynamic(() => import('@/common/navbar/svg/TeamWebColab')),
    DirectRouting: dynamic(() => import('@/common/navbar/svg/DirectRouting')),
    MobileDesktopApps: dynamic(() => import('@/common/navbar/svg/MobileDesktopApps')),

    Proactive: dynamic(() => import('@/common/navbar/svg/Proactive')),
    NetworkSecurity: dynamic(() => import('@/common/navbar/svg/NetworkSecurity')),
    DataBackup: dynamic(() => import('@/common/navbar/svg/DataBackup')),
    Helpdesk: dynamic(() => import('@/common/navbar/svg/Helpdesk')),
    SoftwareAndHardware: dynamic(() => import('@/common/navbar/svg/SoftwareAndHardware')),
    CloudServices: dynamic(() => import('@/common/navbar/svg/CloudServices')),

}

export default SVGComponents