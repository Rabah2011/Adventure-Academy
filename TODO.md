# Task: Add Feedback System to Adventure Academy App

## Overview
Implement a feedback system where users can provide feedback on the website after attempting to send a message on the contact page. The feedback will be stored and displayed on a dedicated feedback page, with navigation updated to include a Feedback link.

## Steps

### 1. Update Header Navigation
- [x] Add "Feedback" link in components/Header.tsx between "About" and "Contact Us" for both desktop and mobile navigation.

### 2. Create Feedback Page
- [x] Create app/feedback/page.tsx with:
  - Header and Footer components
  - Section to display list of feedbacks from localStorage
  - Each feedback shows text and date
  - Styling consistent with app theme (blue/orange/purple)

### 3. Modify Contact Page for Feedback Prompt
- [x] Update app/contact/page.tsx to:
  - Add state for feedback modal visibility
  - Modify handleSubmit to show feedback modal instead of submitting form
  - Create modal with textarea for feedback input
  - Add "Submit" button: saves feedback to localStorage and navigates to /feedback
  - Add "Not Now" button: submits the original contact form
  - Ensure modal is responsive and styled consistently

### 4. Implement Feedback Storage
- [x] Use localStorage to store feedbacks as JSON array
  - Each feedback object: {id: number, text: string, date: string}
  - Load feedbacks on feedback page mount
  - Save new feedback on submit

### 5. Testing and Verification
- [ ] Run `pnpm dev` to start dev server
- [ ] Navigate to /contact, fill form, click "Send Message"
- [ ] Verify feedback modal appears with textarea and buttons
- [ ] Test "Submit": feedback saved, redirected to /feedback, new feedback displayed
- [ ] Test "Not Now": original form submitted with alert
- [ ] Check navigation: Feedback link visible and functional
- [ ] Verify mobile responsiveness

### 6. Completion
- [x] Update TODO.md with all [x] marks
- [x] Use attempt_completion to finalize the task
