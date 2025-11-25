import { NextResponse } from 'next/server'

// Temporary debug endpoint - remove after troubleshooting
export async function GET() {
  return NextResponse.json({
    hasGithubClientId: !!process.env.GITHUB_CLIENT_ID,
    hasGithubId: !!process.env.GITHUB_ID,
    hasGithubClientSecret: !!process.env.GITHUB_CLIENT_SECRET,
    hasGithubSecret: !!process.env.GITHUB_SECRET,
    hasNextAuthUrl: !!process.env.NEXTAUTH_URL,
    hasNextAuthSecret: !!process.env.NEXTAUTH_SECRET,
    hasDatabaseUrl: !!process.env.DATABASE_URL,
    nextAuthUrl: process.env.NEXTAUTH_URL,
    // Don't expose actual secrets, just their first few chars
    githubClientIdPrefix: process.env.GITHUB_CLIENT_ID?.substring(0, 4) || process.env.GITHUB_ID?.substring(0, 4),
  })
}
