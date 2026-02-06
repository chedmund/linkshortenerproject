# Link Shortener Project - Agent Instructions

## 📋 Overview
This file serves as the entry point for AI coding assistants working on the **Link Shortener** project. For comprehensive coding standards and best practices, refer to the detailed documentation in the `/docs` directory.

## 🗂️ Documentation Structure

All agent instructions are organized in the `/docs` directory.

**⚠️ CRITICAL: ALWAYS read the relevant individual instruction files within the `/docs` directory BEFORE generating ANY code.**

- **[Authentication](docs/authentication.md)** - Clerk integration, protected routes, sign in/up modals
- **[UI Components](docs/ui-components.md)** - shadcn/ui standards, component usage guidelines

## 🚀 Quick Start

### Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5 (strict mode)
- **Database**: PostgreSQL with Drizzle ORM
- **Auth**: Clerk
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Icons**: Lucide React

### Key Commands
```bash
npm run dev       # Start development server (http://localhost:3000)
npm run build     # Production build
npm run lint      # Run ESLint
```

### Critical Principles
1. **Server Components by Default** - Only use 'use client' when necessary
2. **Type Everything** - Strict TypeScript with explicit types
3. **Database via Drizzle** - Use ORM patterns, avoid raw SQL
4. **Tailwind First** - Use utility classes over custom CSS
5. **Always Authenticate** - Check userId in protected routes/actions
6. **NEVER Use middleware.ts** - This is deprecated in later versions of Next.js. Use proxy.ts instead

## 📖 Usage for AI Assistants

**⚠️ MANDATORY WORKFLOW:**

Before writing ANY code, you MUST:
1. **Read the relevant documentation file** from the `/docs` directory for the area you're working on
2. **Follow established patterns** - check existing code for examples
3. **Maintain consistency** - adhere to naming and structure conventions

**DO NOT generate code without first consulting the appropriate documentation file.**

### Working on Specific Areas?

- **Authentication/Clerk** → Read [docs/authentication.md](docs/authentication.md)
- **UI/Components** → Read [docs/ui-components.md](docs/ui-components.md)

## 📁 Project Structure

```
linkshortenerproject/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout (Clerk provider)
│   ├── globals.css        # Global styles
│   ├── actions/           # Server actions
│   └── api/               # API routes
├── components/            # React components
│   └── ui/               # shadcn/ui components
├── db/                    # Database layer
│   ├── index.ts          # DB connection
│   └── schema.ts         # Drizzle schema
├── lib/                   # Utilities
│   └── utils.ts          # Helper functions
├── docs/                  # Agent instructions (this directory)
└── public/               # Static assets
```

## 🔗 External Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Drizzle ORM Documentation](https://orm.drizzle.team/)
- [Clerk Documentation](https://clerk.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

---

**For detailed coding standards, please refer to the `/docs` directory.**
