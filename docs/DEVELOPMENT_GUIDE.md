# Development Guide

## Prerequisites

- Node.js 16+ (compatible with Create React App)
- npm

## Install

- npm install

## Run

- npm start

## Test

- npm test

## Build

- npm run build

## Environment Variables

The anonymous feedback form uses EmailJS. Configure these variables in a .env file:

- REACT_APP_EMAILJS_SERVICE_ID
- REACT_APP_EMAILJS_TEMPLATE_ID
- REACT_APP_EMAILJS_USER_ID

Example:

```bash
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_user_id
```

## Updating Content

- Work history: src/data/workExperience.ts
- Projects: src/data/projects.ts
- Education: src/data/education.ts
- Certificates: src/data/certificates.ts
- Social links: src/data/socialLinks.ts
