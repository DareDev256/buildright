# BuildRight MVP Design Document

**Date:** 2025-01-28
**Status:** Approved
**Target Launch:** 8 weeks (March 2025)

---

## Overview

BuildRight is a mobile-first educational platform teaching beginners how to build houses from the ground up. It covers the complete journey from land acquisition through construction completion, with state-specific guidance starting with Georgia.

### Target Users
- Aspiring owner-builders who want to build their own home
- Small-scale developers entering the house-building business
- Real estate investors wanting to understand the process
- Career changers entering construction/development

### Core Value Proposition
Comprehensive, structured education on house building with practical tools — not just theory, but actionable guidance with Georgia-specific resources.

---

## MVP Scope (v1)

### In Scope
- Georgia-only (nail one state before expanding)
- 7-module course with structured lessons
- Progress tracking for learning journey
- 5 interactive tools (calculator, estimator, checklists)
- Links to official Georgia government resources
- Educational disclaimers (not legal/financial advice)

### Explicitly Out of Scope (v2+)
- Other states
- Community/forums
- Contractor marketplace
- User-generated content
- Video content (text-based v1)

---

## Content Structure

### The Curriculum — 7 Modules

| Module | Content |
|--------|---------|
| **1. Foundation Knowledge** | Types of construction, roles involved, terminology, realistic timelines & costs |
| **2. Land Acquisition** | Finding land, zoning, due diligence, utilities/access, Georgia land laws |
| **3. Funding Your Build** | Construction loans, owner-builder financing, working with lenders, budgeting |
| **4. Planning & Design** | Architects, blueprints, site planning, cost estimation, value engineering |
| **5. Permits & Approvals** | Georgia permit process, inspections, code requirements, county resources |
| **6. The Build Process** | Phase-by-phase: site prep → foundation → framing → MEP → finishes |
| **7. Completion & Beyond** | Final inspections, CO, punch lists, warranties, insurance |

### Content Format Per Lesson
- Written guide (AI-generated, expert-reviewed)
- Key takeaways checklist
- "Georgia Specifics" callout box
- Links to official resources
- Quiz/knowledge check

---

## Interactive Tools

### v1 Tools

| Tool | Description |
|------|-------------|
| **Build Budget Calculator** | Input sq footage, finish level, location → estimated cost breakdown |
| **Timeline Estimator** | Build type and scope → phase-by-phase timeline with GA permit times |
| **Permit Checklist Generator** | Select GA county → required permits, inspections, county links |
| **Document Tracker** | Checklist of all docs needed — users check off as gathered |
| **Funding Readiness Quiz** | Questions → readiness assessment and preparation list |

### v2+ Tools (Roadmap)
- Contractor vetting checklist
- Draw schedule tracker
- Inspection prep guides
- Cost comparison tool
- Build journal/photo log

---

## Technical Architecture

### Stack
```
Frontend:     React Native + Expo (iOS, Android, Web)
Backend:      Supabase (Auth, Database, Storage, Edge Functions)
Content:      MDX/JSON in Supabase
State Mgmt:   Zustand
Styling:      NativeWind (Tailwind for React Native)
```

### Why Supabase
- Auth out of the box (email, social, magic links)
- Postgres with row-level security
- Edge functions for custom logic
- Generous free tier for MVP
- No infrastructure management

### Data Model

```sql
-- Users
users (
  id uuid primary key,
  email text unique,
  created_at timestamp,
  profile jsonb,  -- name, state, goals
  subscription_tier text  -- for future monetization
)

-- Learning Progress
user_progress (
  id uuid primary key,
  user_id uuid references users,
  module_id text,
  lesson_id text,
  completed_at timestamp,
  quiz_score int
)

-- User Projects (tool data)
user_projects (
  id uuid primary key,
  user_id uuid references users,
  project_name text,
  budget_inputs jsonb,
  timeline_inputs jsonb,
  checklist_state jsonb,
  documents_tracked jsonb,
  created_at timestamp,
  updated_at timestamp
)

-- Content
content (
  id uuid primary key,
  module_id text,
  lesson_order int,
  title text,
  body text,  -- MDX content
  state_notes jsonb,  -- keyed by state
  external_links jsonb,
  created_at timestamp,
  updated_at timestamp
)
```

### Key Decisions
- Content in DB (not hardcoded) — updates without app releases
- User project data as JSON — flexible, avoids constant migrations
- Offline-first for content — cache lessons locally

---

## App Screens & Navigation

### Navigation Structure
Bottom tab bar: **Home** | **Learn** | **Tools** | **Profile**

### Screen Flow

```
ONBOARDING
├── Welcome
├── Goal selection (owner-builder/developer/investor/learning)
├── State selection (Georgia pre-selected)
└── Account creation (or skip)

HOME (Dashboard)
├── Continue Learning (current lesson)
├── Progress overview (% complete)
├── Quick tool access
└── My Project summary

LEARN
├── Module list (locked/unlocked)
├── Lesson view (content + GA callouts)
├── Quiz/checkpoint
└── Completion flow

TOOLS
├── Budget Calculator
├── Timeline Estimator
├── Permit Checklist
├── Document Tracker
└── Funding Quiz

PROFILE
├── Account info
├── Saved project data
├── Notification preferences
└── (Future: subscription)
```

### UX Principles
- Progress always visible — motivates completion
- Tools accessible from anywhere
- Georgia content visually distinct (badge/color)
- Clear CTAs at end of each lesson
- Disclaimers present but not intrusive

---

## Development Timeline (8 Weeks)

### Week 1-2: Foundation
- [ ] Project setup (Expo, Supabase, NativeWind)
- [ ] Auth flow (sign up, login, forgot password)
- [ ] Navigation structure (bottom tabs)
- [ ] Supabase data models
- [ ] Onboarding screens

### Week 3-4: Core Learning
- [ ] Content schema and storage
- [ ] Module/lesson list views
- [ ] Lesson detail with MDX rendering
- [ ] Progress tracking
- [ ] Georgia callout component

### Week 5-6: Tools
- [ ] Budget Calculator
- [ ] Timeline Estimator
- [ ] Permit Checklist Generator
- [ ] Document Tracker
- [ ] Save project to user account

### Week 7-8: Polish & Launch
- [ ] Home dashboard
- [ ] Funding Readiness Quiz
- [ ] Offline content caching
- [ ] Push notifications (optional)
- [ ] App Store / Play Store submission
- [ ] Web landing page

### Content Track (Parallel)
- Week 1-4: Generate & review Modules 1-3
- Week 5-8: Generate & review Modules 4-7
- Ongoing: Gather Georgia county permit links

---

## Launch Deliverables

At 8 weeks, we ship:
- Full 7-module course (text-based)
- 5 interactive tools
- Progress tracking
- Georgia-specific content throughout
- iOS app
- Android app
- Basic web version

---

## Future Roadmap (Post-MVP)

### Phase 2: Expand States
- Template system for state-specific content
- User can select their state
- Community voting on next states

### Phase 3: Community
- Q&A forums
- Build journals (share progress)
- Mentor connections

### Phase 4: Monetization
- Premium state guides
- Advanced tools
- Contractor directory (lead gen)

### Phase 5: Depth
- Video content
- County-level accuracy
- Live workshops/webinars

---

## Content Generation Strategy

### Approach
AI-generated drafts with expert review by domain expert (co-founder).

### Process
1. Generate lesson draft with Claude/GPT
2. Expert reviews for accuracy
3. Add Georgia-specific details
4. Gather official resource links
5. Add disclaimers
6. Final review and publish

### Disclaimer Template
> *This content is for educational purposes only and does not constitute legal, financial, or professional advice. Building codes, permit requirements, and regulations vary by county and change over time. Always verify current requirements with your local building department and consult qualified professionals before making decisions.*

---

## Success Metrics

### Launch Targets
- 100 users in first month
- 20% complete Module 1
- 10% use a tool

### Growth Indicators
- Course completion rate
- Tool usage frequency
- Return user rate
- User feedback/ratings

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Content accuracy | Expert review + disclaimers + link to official sources |
| Scope creep | Strict MVP boundaries, roadmap for everything else |
| Timeline slip | Parallel content/dev tracks, cut polish before features |
| Low adoption | Focus on Georgia community, targeted marketing |

---

*Document approved: 2025-01-28*
