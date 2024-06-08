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

        const urls = response.data.data.map((page) => `
            <url>
                <loc>https://vfixmsp.com/blog/${page.id}</loc>
                <lastmod>${new Date(page.attributes.updatedAt).toISOString()}</lastmod>
            </url>
        `).join('');

        return `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${urls}
        </urlset>`;
    } catch (error) {
        console.error('Error in generateSitemap:', error);
        throw error;
    }
}
