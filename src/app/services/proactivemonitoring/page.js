import { Data } from "./Data"
import PageServices from "../PageServices"
import SVGComponent from "./SVGComponent"

export const metadata = {
    title: 'Proactive Remote Monitoring & Maintanace Solutions - VFIX Communications',
    description: 'Ensure your IT systems run smoothly with VFIX Communications’ Proactive Remote Monitoring & Maintenance Solutions. Our services provide real-time monitoring, early issue detection, and swift resolution to prevent downtime and enhance performance. Comparable to top providers like SolarWinds, Datadog, and Nagios, VFIX Communications delivers tailored remote monitoring and maintenance solutions to meet your business needs. Contact Us Today for reliable IT monitoring and maintenance!',
    keywords: 'proactive remote monitoring, remote maintenance solutions, real-time IT monitoring, early issue detection, downtime prevention, performance enhancement, SolarWinds, Datadog, Nagios, VFIX Communications monitoring, tailored monitoring solutions, business IT monitoring, enterprise remote monitoring services, IT system monitoring, IT performance monitoring, proactive IT support, IT issue resolution, continuous monitoring, IT infrastructure monitoring, customized monitoring services, reliable IT maintenance.'
  }
  
export default function ProactiveMonitoring() {
  return <PageServices data={Data} SVGComponent={SVGComponent} />
}