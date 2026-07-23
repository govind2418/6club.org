import { NextResponse } from 'next/server';
import { siteConfig } from '@/lib/site.config';

export function GET() {
  return NextResponse.redirect(siteConfig.registerUrl, { status: 307 });
}
