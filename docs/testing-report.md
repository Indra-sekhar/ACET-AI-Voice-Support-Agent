# ACET AI Voice Support Agent — Testing Report

## 1. Test Environment

- **Frontend:** React + Vite
- **Voice platform:** Vapi
- **AI model:** GPT-4.1 (configured in Vapi)
- **Knowledge base:** ACET B.Tech information
- **Enquiry storage:** Google Sheets
- **Repository:** GitHub
- **Deployment platform:** Vercel
- **Live URL:** https://acet-ai-voice-support-agent.vercel.app/

## 2. Functional Test Cases

| ID | Scenario | Expected Result | Actual Result | Status |
|---|---|---|---|---|
| T01 | Ask available B.Tech programs | Answer using verified information | Passed | Complete |
| T02 | Ask current admission fee | State that verification is required | Passed | Complete |
| T03 | Ask whether admissions are open | Do not guess | Passed | Complete |
| T04 | Ask about hostel facilities | Answer only from verified information | Passed | Complete |
| T05 | Ask an unknown ACET question | Offer a support enquiry | Passed | Complete |
| T06 | Request a support enquiry | Collect the required details | Passed | Complete |
| T07 | Give an unclear course name | Ask for clarification | Passed | Complete |
| T08 | Correct an enquiry detail | Update the detail | Passed | Complete |
| T09 | Confirm an enquiry | Save one record to Google Sheets | Passed | Complete |
| T10 | Simulate a failed Sheets operation | Report failure honestly | Passed | Complete |

## 3. Bugs and Improvements

### 3.1 Vapi SDK Constructor Error
- **Issue:** The frontend initially reported `Vapi is not a constructor`.
- **Resolution:** The Vapi SDK import was corrected and the frontend was tested again.
- **Outcome:** The assistant subsequently connected and responded aloud.

### 3.2 Google Sheets Integration
- **Issue:** A tool execution initially failed with a missing Nango configuration error.
- **Resolution:** The Google Sheets tool configuration was updated and published.
- **Outcome:** Subsequent testing confirmed that a new support enquiry could be stored in Google Sheets.

### 3.3 Voice Interaction
- **Issue:** Some spoken inputs were unclear or incorrectly transcribed.
- **Improvement:** The assistant's conversation flow was tested with unclear course names and corrections.
- **Outcome:** The assistant was able to request clarification during testing.

## 4. Test Results Summary

- **Total functional test cases:** 10
- **Reported passed:** 10
- **Reported failed:** 0
- **Functional test completion:** 100%

The above results reflect the recorded functional test outcomes. Supporting evidence should be retained through Vapi call logs, conversation transcripts, and Google Sheets records.

## 5. Deployment Verification

The project has a Vercel deployment URL:

https://acet-ai-voice-support-agent.vercel.app/

Final production verification must confirm that:
1. The live page loads successfully.
2. Microphone permission and voice calls work.
3. The assistant answers using the configured knowledge base.
4. A confirmed support enquiry creates a new Google Sheets record.
5. A failed tool operation is communicated honestly.

**Deployment verification status:** Pending final live-site check.

## 6. Final Outcome

The project demonstrates a voice-based college support assistant using React, Vapi, a verified ACET knowledge base, and Google Sheets. It supports college information queries and a workflow for collecting support enquiries.

The prototype combines voice interaction, knowledge-based responses, confirmation before saving enquiries, and external data storage. Further improvements may include multilingual support, a staff dashboard, enquiry status tracking, and broader programme coverage.
