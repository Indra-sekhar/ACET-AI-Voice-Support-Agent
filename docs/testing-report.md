# ACET AI Voice Support Agent — Testing Report

## 1. Test Environment

- Frontend: React + Vite
- Voice platform: Vapi
- Knowledge base: ACET B.Tech information
- Enquiry storage: Google Sheets
- Deployment: Vercel (deployment testing pending)

## 2. Test Cases

| ID | Scenario | Expected Result | Actual Result | Status |
|---|---|---|---|---|
| T01 | Ask available B.Tech programs | Answer using verified information | Pass | Complete |
| T02 | Ask current admission fee | State that verification is required | Pass | Complete |
| T03 | Ask whether admissions are open | Do not guess | Pass | Complete |
| T04 | Ask about hostel facilities | Answer only from verified information | Pass | Complete |
| T05 | Ask an unknown ACET question | Offer a support enquiry | Pass | Not Complete |
| T06 | Request a support enquiry | Collect the required details | Pass | Complete |
| T07 | Give an unclear course name | Ask for clarification | Pass | Complete |
| T08 | Correct an enquiry detail | Update the detail | Pass | Complete |
| T09 | Confirm an enquiry | Save one record to Google Sheets | Pass | Complete |
| T10 | Simulate a failed Sheets operation | Report failure honestly | Pass | Complete |

## 3. Bugs and Improvements

Record each issue, its cause, and the fix applied.

## 4. Test Results

Complete this section after executing the test cases. Do not mark a test as passed without evidence.

## 5. Final Outcome

To be completed after testing and deployment verification.
