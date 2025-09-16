# Next.js Geist Font Starter

This repository is a Next.js 15 starter template featuring the Geist font family and a comprehensive set of shadcn/ui components. The application uses the App Router, TypeScript, Tailwind CSS, and modern React patterns.

**ALWAYS follow these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Initial Setup and Dependencies
Always run these commands in order for a fresh repository:

1. `npm install` -- installs all dependencies. Takes ~50 seconds. NEVER CANCEL. Set timeout to 120+ seconds.
2. `npm run build` -- builds the production version. Takes ~18 seconds. NEVER CANCEL. Set timeout to 60+ seconds.
3. `npm run lint` -- runs ESLint checks. Takes ~2 seconds. NEVER CANCEL. Set timeout to 30+ seconds.

### Development Workflow
- **Development server**: `npm run dev` -- starts development server on http://localhost:3000. NEVER CANCEL. Server starts in ~1.5 seconds.
- **Production build**: `npm run build` -- creates optimized production build. Takes ~18 seconds. NEVER CANCEL. Set timeout to 60+ seconds.
- **Production server**: `npm run start` -- serves production build. Must run `npm run build` first. NEVER CANCEL.
- **Linting**: `npm run lint` -- validates code style and catches errors. Takes ~2 seconds. NEVER CANCEL. Set timeout to 30+ seconds.

### Critical Build Timing Information
- **npm install**: 50 seconds - NEVER CANCEL - Set timeout to 120+ seconds
- **npm run build**: 18 seconds - NEVER CANCEL - Set timeout to 60+ seconds  
- **npm run lint**: 2 seconds - NEVER CANCEL - Set timeout to 30+ seconds
- **Dev server startup**: 1.5 seconds - NEVER CANCEL

## Validation Scenarios

After making any changes, ALWAYS complete these validation steps:

### Essential Testing Workflow
1. **Build validation**: Run `npm run build` and verify it completes without errors
2. **Lint validation**: Run `npm run lint` and fix any warnings/errors
3. **Manual testing**: Start `npm run dev` and test the application at http://localhost:3000
4. **Font verification**: Confirm both Geist Sans and Geist Mono fonts are loading correctly
5. **Component testing**: Test shadcn/ui components work properly (buttons, cards, etc.)

### End-to-End Scenario Testing
ALWAYS test these user scenarios after making changes:
1. Navigate to the homepage and verify it loads without console errors
2. Check that the Geist Sans font is applied to body text
3. Check that the Geist Mono font is applied to code blocks  
4. Verify all three demonstration cards render correctly
5. Test button interactions (Get Started button)
6. Verify responsive design works on different screen sizes

## Repository Structure

### Key Directories and Files
```
├── src/
│   ├── app/                    # Next.js 15 App Router
│   │   ├── layout.tsx         # Root layout with Geist font configuration
│   │   ├── page.tsx           # Homepage demonstrating fonts and components
│   │   └── globals.css        # Global styles and CSS variables
│   ├── components/ui/         # shadcn/ui components (40+ components)
│   ├── hooks/                 # React hooks (use-mobile.ts)
│   └── lib/                   # Utilities (utils.ts with cn function)
├── package.json               # Dependencies and scripts
├── tailwind.config.ts         # Tailwind CSS configuration with Geist fonts
├── tsconfig.json             # TypeScript configuration
├── next.config.mjs           # Next.js configuration
├── postcss.config.js         # PostCSS configuration
└── .eslintrc.json           # ESLint configuration
```

### Important Components Location
- **Main layout**: `src/app/layout.tsx` - Configures Geist fonts globally
- **Homepage**: `src/app/page.tsx` - Demonstrates font usage and components
- **UI Components**: `src/components/ui/` - Contains 40+ shadcn/ui components
- **Utilities**: `src/lib/utils.ts` - Contains `cn()` function for className merging
- **Mobile hook**: `src/hooks/use-mobile.ts` - Responsive design utility

## Dependencies and Versions

### Core Framework
- **Next.js**: 15.5.3 (App Router)
- **React**: 18.2.0
- **TypeScript**: 5.4.5

### Styling
- **Tailwind CSS**: 3.4.3 with tailwindcss-animate
- **Geist fonts**: 1.3.1 (both Sans and Mono)

### UI Components
- **40+ Radix UI primitives**: Accessible component foundation
- **shadcn/ui**: Complete UI component library
- **Lucide React**: Icon library
- **Class Variance Authority**: Component variant handling

## Common Issues and Solutions

### Build Issues
- **Missing dependencies**: Always run `npm install` first
- **Type errors**: Check component imports match installed versions
- **Image warnings**: The EscortProfile.tsx and ProfileCard.tsx components use `<img>` tags and generate warnings - this is expected and does not break the build

### Font Configuration
- Geist fonts are configured in `src/app/layout.tsx`
- CSS variables are set in Tailwind config: `font-sans` and `font-mono`
- Global styles apply fonts via Tailwind classes

### Development Server Issues
- Always check http://localhost:3000 not other ports
- Dev server must complete startup (~1.5 seconds) before testing
- If port conflicts, Next.js will automatically use next available port

## Frequent Commands Reference

### Repository Status
```bash
ls -la  # View root directory contents
find src -name "*.tsx" -o -name "*.ts" | head -10  # List TypeScript files
```

### Package Information
```json
{
  "name": "nextjs-geist-font-starter",
  "version": "0.1.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build", 
    "start": "next start",
    "lint": "next lint"
  }
}
```

### Component Usage Examples
```tsx
// Using Geist fonts
<p className="font-sans">Text in Geist Sans</p>
<code className="font-mono">Code in Geist Mono</code>

// Using shadcn/ui components  
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
```

## Pre-commit Checklist

Before completing any work on this repository:
- ✅ Run `npm run build` and verify successful compilation
- ✅ Run `npm run lint` and fix any warnings/errors  
- ✅ Test the application locally with `npm run dev`
- ✅ Verify fonts load correctly (Geist Sans and Mono)
- ✅ Test component functionality (buttons, cards, etc.)
- ✅ Check responsive design on different screen sizes

## Working with Components

### Adding New shadcn/ui Components
```bash
# The repository already includes 40+ components
# Check src/components/ui/ for available components
ls src/components/ui/
```

### Modifying Font Configuration
- Font loading: `src/app/layout.tsx`
- Font variables: `tailwind.config.ts`
- CSS custom properties: `src/app/globals.css`

### Customizing Styles
- Theme colors: Defined in `src/app/globals.css` CSS variables
- Component styling: Uses Tailwind classes and CSS variables
- Dark mode: Pre-configured with CSS variable system

Remember: ALWAYS validate your changes using the testing workflow above. The build process is fast (~18 seconds) so there's no excuse for skipping validation steps.