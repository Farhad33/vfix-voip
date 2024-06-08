import { NextResponse } from 'next/server';
import { strapiAPI } from '@/lib/api';

const url = '/articles-msps?populate=services,thumbnail';

export async function GET() {
    const sitemap = await generateSitemap();
    return new NextResponse(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'no-store, max-age=0',
        },
    });
}

async function generateSitemap() {
    const pages = await strapiAPI(url);

    const urls = pages.data.data.map((page) => `
        <url>
            <loc>https://vfixmsp.com/blog/${page.id}</loc>
            <lastmod>${new Date(page.attributes.updatedAt).toISOString()}</lastmod>
        </url>
    `).join('');

    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls}
    </urlset>`;
}
