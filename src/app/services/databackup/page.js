import { Data } from "./Data"
import PageServices from "../PageServices"
import SVGComponent from "./SVGComponent"

export const metadata = {
    title: 'Reliable Data Backup Solutions and Disaster Recovery - VFIX Communications',
    description: 'Protect your critical data with VFIX Communications’ reliable Data Backup Solutions. Our services ensure secure, automated backups and fast recovery, minimizing downtime and data loss. Comparable to top providers like Acronis, Carbonite, and Backblaze, VFIX Communications offers comprehensive data protection tailored to your business needs. Contact Us Today for a customized solution!',
    keywords: 'data backup solutions, secure data backup, automated backups, data recovery, Acronis, Carbonite, Backblaze, data protection, minimize downtime, prevent data loss, reliable data backup, business data backup, enterprise data protection, IT data services, VFIX Communications data backup, comprehensive data backup, data security, cloud backup, on-premise backup, disaster recovery, customized data protection.'
  }
  
export default function DataBackup() {
    return <PageServices data={Data} SVGComponent={SVGComponent} />
}