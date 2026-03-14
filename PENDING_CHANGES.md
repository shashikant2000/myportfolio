# Pending Changes Log

Review these before I make the edits. Approve or request modifications.

---

## 1. Update About Me Section
**File:** `src/data/aboutMeData.js`

**Current:**
- Bio 1: References Qualcomm, component library, Electron desktop app, Tailwind CSS, TypeScript
- Bio 2: References Qualcomm testing automation, IIIT Delhi BTech

**Proposed:**
```js
export const aboutMeData = [
	{
		id: 1,
		bio: "I'm Shashikant, a Software Development Engineer II at Microsoft, working in the Azure Data organization. I specialize in building and improving SQL migration tools and services that help customers seamlessly move their databases to Azure. Previously at Qualcomm, I developed a widely adopted cross-framework component library and a desktop application for visualizing chipset performance metrics.",
	},
	{
		id: 2,
		bio: "My core expertise lies in .NET, C#, SQL migrations, and Azure cloud services — building robust backend systems and developer tools at scale. On the frontend, I work with React, TypeScript, and Tailwind CSS to deliver polished user experiences. I hold a BTech from IIIT Delhi, and I'm passionate about building end-to-end solutions that bridge complex backend infrastructure with intuitive interfaces.",
	},
];
```

**Changes made:**
- Added Microsoft SDE II role
- Added Azure Data org
- Added SQL migrations work
- Kept Qualcomm experience as past role
- Kept IIIT Delhi education

---

**Status:** ✅ Applied

---

## 2. Add SSMA Tool Project (at top of projects list)
**File:** `src/data/projects.js` + new `src/data/ssmaProjectData.js`

**Extracted from manager review — SSMA-related experience:**

**Project Title:** SQL Server Migration Assistant (SSMA)

**Category:** Desktop Application

**Description:**
SSMA is a Microsoft tool that automates database migration to SQL Server and Azure SQL. As an SDE II on the SSMA team, I was a top contributor and first-time release manager for SSMA 10.4 — one of the largest releases in the tool's history.

**Key Contributions:**
- Built **Copilot for Oracle** integration (GA) — AI-assisted migration workflows
- Implemented **Entra ID authentication** support for managed endpoints (Preview), including admin consent toggle, radio buttons, suggestion dialogs, error tab activation, and high-DPI rendering
- Served as **Release Manager for SSMA 10.4** — coordinated one of the largest SSMA releases, maintained timelines, updated test plans, and ensured smooth delivery
- Resolved **~20+ accessibility (a11y) bugs**, becoming the team's SME in accessibility
- Fixed multiple **security issues (SFI)** and contributed to **.NET 8 upgrade** testing for Oracle
- Implemented **Sybase fixes** including ANSI Padding and preferences verbatim changes
- **Highest number of PRs** created within the SSMA team

**Technologies:** C#, .NET, WPF, SQL Server, Azure SQL, Oracle, Sybase, Entra ID, Copilot Integration

**Status:** ⏳ Awaiting review
