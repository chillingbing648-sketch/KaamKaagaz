import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  const content = `# KaamKaagaz Security Policy
Contact: mailto:security@kaamkaagaz.org
Expires: 2027-12-31T23:59:59.000Z
Preferred-Languages: en, hi, mr
Canonical: https://kaamkaagaz.org/.well-known/security.txt
Policy: https://kaamkaagaz.org/security

# Disclosure Policy
KaamKaagaz is an independent client-side civic utility.
We do not store user identity documents or credentials.
If you discover a security vulnerability, please report it responsibly.
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
