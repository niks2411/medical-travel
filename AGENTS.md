<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Page Layout Conventions

- **Main Category Pages**: (e.g., `/services/dental`, `/services/fertility-ivf`, `/services/eye-vision`) must follow the general category layout of the dental page ([dental/page.tsx](file:///d:/workspace/projects/medical%20travel/src/app/services/dental/page.tsx)), using a scroll-stacking grid for service cards.
- **Treatment Subpages**: (e.g., `/services/dental/implants`, individual fertility subpages, etc.) must follow the subpage layout of the dental implants page ([dental/implants/page.tsx](file:///d:/workspace/projects/medical%20travel/src/app/services/dental/implants/page.tsx)), using interactive tabs (Eligibility, Benefits, Stages) and a candidate criteria grid.
