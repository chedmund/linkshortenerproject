# Authentication with Clerk

## Core Principles

**ALL authentication in this application is handled exclusively by Clerk.**
- ❌ Never implement custom auth logic, JWT tokens, sessions, or password hashing
- ✅ Always use Clerk's built-in authentication methods

## Protected Routes

### Dashboard Route
The `/dashboard` page is a **protected route**:
```typescript
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/');
  }
  
  // Dashboard content...
}
```

### Homepage Redirect
If a user is **already logged in** and visits the homepage (`/`), redirect them to `/dashboard`:
```typescript
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function HomePage() {
  const { userId } = await auth();
  
  if (userId) {
    redirect('/dashboard');
  }
  
  // Homepage content for non-authenticated users...
}
```

## Sign In / Sign Up Modal

Clerk authentication UI must **always launch as a modal**, never as a full page.

### Setup in Root Layout
```typescript
import { ClerkProvider } from '@clerk/nextjs';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
```

### Trigger Modal (Client Component)
```typescript
'use client';

import { useSignIn, useSignUp } from '@clerk/nextjs';

export function AuthButtons() {
  const { openSignIn } = useSignIn();
  const { openSignUp } = useSignUp();

  return (
    <>
      <button onClick={() => openSignIn()}>Sign In</button>
      <button onClick={() => openSignUp()}>Sign Up</button>
    </>
  );
}
```

### Alternative: Prebuilt Components
```typescript
'use client';

import { SignInButton, SignUpButton } from '@clerk/nextjs';

export function AuthButtons() {
  return (
    <>
      <SignInButton mode="modal">
        <button>Sign In</button>
      </SignInButton>
      <SignUpButton mode="modal">
        <button>Sign Up</button>
      </SignUpButton>
    </>
  );
}
```

## Server Actions

Always validate authentication in server actions:
```typescript
'use server';

import { auth } from '@clerk/nextjs/server';

export async function createShortLink(url: string) {
  const { userId } = await auth();
  
  if (!userId) {
    throw new Error('Unauthorized');
  }
  
  // Proceed with action...
}
```

## User Data Access

### Get Current User ID
```typescript
import { auth } from '@clerk/nextjs/server';

const { userId } = await auth();
```

### Get Full User Object
```typescript
import { currentUser } from '@clerk/nextjs/server';

const user = await currentUser();
// Access: user.emailAddresses, user.firstName, etc.
```

## Quick Reference

| Need | Import | Usage |
|------|--------|-------|
| Check auth in Server Component | `auth` from `@clerk/nextjs/server` | `const { userId } = await auth()` |
| Get user details | `currentUser` from `@clerk/nextjs/server` | `const user = await currentUser()` |
| Sign in button | `SignInButton` from `@clerk/nextjs` | `<SignInButton mode="modal">` |
| Sign up button | `SignUpButton` from `@clerk/nextjs` | `<SignUpButton mode="modal">` |
| Open sign in programmatically | `useSignIn` from `@clerk/nextjs` | `const { openSignIn } = useSignIn()` |

## Key Reminders

1. **Never use full-page auth** - Always set `mode="modal"` or use `openSignIn()`/`openSignUp()`
2. **Protect all sensitive routes** - Check `userId` in page components
3. **Validate in server actions** - Never trust client-side auth checks alone
4. **Redirect patterns**:
   - No auth on `/dashboard` → redirect to `/`
   - Authenticated on `/` → redirect to `/dashboard`
