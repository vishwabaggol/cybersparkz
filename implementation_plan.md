# Recruiter Dashboard Enhancements

## Goal
Enhance Recruiter Dashboard with profile editing, settings (session/theme), and advanced application management (shortlisting, rejection, interview scheduling).

## Proposed Changes

### Backend (`server.js`)
#### [MODIFY] [server.js](file:///c:/Users/vishw/.gemini/antigravity/playground/solitary-spicule/server/server.js)
-   **Database Migration**: Add `interview_date` (DATETIME) and `interview_notes` (TEXT) to `applications` table.
-   **API Endpoints**:
    -   `PUT /api/recruiters/profile`: Update company details.
    -   `PATCH /api/applications/:id/status`: Update status (already exists, verify).
    -   `POST /api/applications/:id/schedule`: Update `interview_date`, `interview_notes` and set status to 'interview_scheduled'.

#### [NEW] [migrate_interviews.js](file:///c:/Users/vishw/.gemini/antigravity/playground/solitary-spicule/server/migrate_interviews.js)
-   Script to add interview columns to `applications` table.

### Frontend (`DashboardRecruiter.tsx`)
#### [MODIFY] [DashboardRecruiter.tsx](file:///c:/Users/vishw/.gemini/antigravity/playground/solitary-spicule/client/src/pages/DashboardRecruiter.tsx)
-   **Session & Settings**:
    -   Implement 20min session timeout logic (copy from User Dashboard).
    -   Add Settings tab for Light/Dark mode.
-   **Profile**:
    -   Make fields editable and save via `PUT /api/recruiters/profile`.
-   **Applications**:
    -   Add "Schedule Interview" button.
    -   Create Modal for selecting Date/Time and adding Notes.
    -   Call `POST /api/applications/:id/schedule`.
    -   **Profile Edit Mode**:
        -   Add `isEditing` state (default false).
        -   Disable inputs when `!isEditing`.
        -   Show "Edit" button when viewing.
        -   Show "Save" and "Cancel" buttons when editing.

### Frontend (`DashboardUser.tsx`)
#### [MODIFY] [DashboardUser.tsx](file:///c:/Users/vishw/.gemini/antigravity/playground/solitary-spicule/client/src/pages/DashboardUser.tsx)
- [x] Enhance resume upload with specific area
- [x] Add PDF preview iframe

### Responsive Design Polish
#### [MODIFY] [Login.tsx](file:///c:/Users/vishw/.gemini/antigravity/playground/solitary-spicule/client/src/pages/Login.tsx)
-   Ensure form container width is responsive (`w-full max-w-md`).
-   Check padding on small screens (`px-4`).

#### [MODIFY] [Signup.tsx](file:///c:/Users/vishw/.gemini/antigravity/playground/solitary-spicule/client/src/pages/Signup.tsx)
-   Ensure form container width is responsive.
-   Check grid layouts for mobile (stack columns).

#### [MODIFY] [DashboardUser.tsx](file:///c:/Users/vishw/.gemini/antigravity/playground/solitary-spicule/client/src/pages/DashboardUser.tsx)
-   Review Sidebar toggling/responsiveness on mobile.
-   Ensure Job Cards grid adjusts (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).

#### [MODIFY] [DashboardRecruiter.tsx](file:///c:/Users/vishw/.gemini/antigravity/playground/solitary-spicule/client/src/pages/DashboardRecruiter.tsx)
-   Review Sidebar toggling/responsiveness on mobile.
-   Ensure tables (Applications) have horizontal scroll or card view on mobile.

### Landing Page
#### [NEW] [LandingPage.tsx](file:///c:/Users/vishw/.gemini/antigravity/playground/solitary-spicule/client/src/pages/LandingPage.tsx)
- Create a visual landing page with:
    - "Welcome to Cybersparkz" hero text
    - Logo display
    - Sign In / Sign Up buttons
    - Modern graphic design elements (background, gradients)

#### [MODIFY] [App.tsx](file:///c:/Users/vishw/.gemini/antigravity/playground/solitary-spicule/client/src/App.tsx)
- Update root route `/` to point to `LandingPage` instead of redirecting to login.
-   Update Job/Application list to show current status (Applied, Shortlisted, Interview Scheduled, Rejected).
-   If 'Interview Scheduled', show Date and Notes.

### Frontend (`JobCard.tsx` & `DashboardUser.tsx`)
#### [MODIFY] [JobCard.tsx](file:///c:/Users/vishw/.gemini/antigravity/playground/solitary-spicule/client/src/components/JobCard.tsx)
-   Add `isApplied` prop to `JobCardProps`.
-   If `isApplied` is true, disable the button and change text to "Applied".

#### [MODIFY] [DashboardUser.tsx](file:///c:/Users/vishw/.gemini/antigravity/playground/solitary-spicule/client/src/pages/DashboardUser.tsx)
#### [MODIFY] [DashboardUser.tsx](file:///c:/Users/vishw/.gemini/antigravity/playground/solitary-spicule/client/src/pages/DashboardUser.tsx)
-   Pass `isApplied={userApplications.some(app => app.job_id === job.id)}` to `JobCard`.
-   **Resume Upload**: Replace file input with a styled label acting as a drop zone (dashed border, icon).
-   **Preview**: Use `URL.createObjectURL(file)` to show an `<iframe src={previewUrl} />` (PDF) in step 2.

### Verification Plan
-   **User**: Upload a PDF resume. Verify the "box" UI.
-   **User**: Click "Preview". Verify the PDF content is displayed in the modal.

## Verification Plan
### Manual Verification
-   **Recruiter**:
    -   Log in, wait for session warning.
    -   Toggle Dark Mode.
    -   Edit Company Profile -> Save -> Refresh -> Verify changes.
    -   Go to Applications -> Shortlist one, Reject one.
    -   Schedule Interview for one (pick date, add note).
-   **User**:
    -   Log in.
    -   Check "Applied Jobs" (or similar section).
    -   Verify statuses match.
    -   Verify Interview Date/Time is visible.
