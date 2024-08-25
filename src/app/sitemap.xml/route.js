import { NextResponse } from 'next/server';
import { strapiAPI } from '@/lib/api';

const url = '/articles-msps?populate=services,thumbnail';
export const revalidate = 0

export async function GET() {
    try {
        const sitemap = await generateSitemap();
        return new NextResponse(sitemap, {
            headers: {
                'Content-Type': 'application/xml',
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
            },
        });
    } catch (error) {
        console.error('Error generating sitemap:', error);
        return new NextResponse('<error>Failed to generate sitemap</error>', {
            status: 500,
            headers: {
                'Content-Type': 'application/xml',
            },
        });
    }
}

async function generateSitemap() {
    try {
        const response = await strapiAPI(url);

        if (!response || !response.data || !Array.isArray(response.data.data)) {
            throw new Error('Invalid API response structure');
        }

        let urls = response.data.data.map((page) => `
            <url>
                <loc>https://www.vfixmsp.com/blog/${page.id}/${page?.attributes?.title.toLowerCase().replace(/\s/g, '-')}</loc>
                <lastmod>${new Date(page.attributes.updatedAt).toISOString()}</lastmod>
            </url>
        `).join('');

        urls += `
            <url>
                <loc>https://www.vfixmsp.com</loc>
            </url>
            <url>
                <loc>https://www.vfixmsp.com/services/cloudphonesystem</loc>
            </url>
            <url>
                <loc>https://www.vfixmsp.com/services/cloudcontentcenter</loc>
            </url>
            <url>
                <loc>https://www.vfixmsp.com/services/businessmessaging</loc>
            </url>
            <url>
                <loc>https://www.vfixmsp.com/services/teamwebcollaboration</loc>
            </url>
            <url>
                <loc>https://www.vfixmsp.com/services/directrouting</loc>
            </url>
            <url>
                <loc>https://www.vfixmsp.com/services/mobiledesktopapp</loc>
            </url>
            <url>
                <loc>https://www.vfixmsp.com/services/proactivemonitoring</loc>
            </url>
            <url>
                <loc>https://www.vfixmsp.com/services/networksecurity</loc>
            </url>
            <url>
                <loc>https://www.vfixmsp.com/services/databackup</loc>
            </url>
            <url>
                <loc>https://www.vfixmsp.com/services/helpdesksupport</loc>
            </url>
            <url>
                <loc>https://www.vfixmsp.com/services/itprojectmanagement</loc>
            </url>
            <url>
                <loc>https://www.vfixmsp.com/services/cloudservices</loc>
            </url>
            <url>
                <loc>https://www.vfixmsp.com/services/itconsulting</loc>
            </url>
            <url>
                <loc>https://www.vfixmsp.com/whyvfix</loc>
            </url>
            <url>
                <loc>https://www.vfixmsp.com/pricing/msp</loc>
            </url>
            <url>
                <loc>https://www.vfixmsp.com/pricing/voip</loc>
            </url>
            <url>
                <loc>https://www.vfixmsp.com/download</loc>
            </url>
            <url>
                <loc>https://www.vfixmsp.com/blog</loc>
            </url>
            <url>
                <loc>https://portal.vfixmsp.com/login?redirectTo=%2F</loc>
            </url>
            <url>
                <loc>https://backup.vfixmsp.com/#/login</loc>
            </url>
            <url>
                <loc>https://status.vfixmsp.com</loc>
            </url>
        `

        return `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${urls}
        </urlset>`;
    } catch (error) {
        console.error('Error in generateSitemap:', error);
        throw error;
    }
}
