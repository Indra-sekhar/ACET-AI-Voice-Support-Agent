# ACET AI Voice Support Agent
## PW Medharthi Capstone Project Report

**Project Title:** ACET AI Voice Support Agent — B.Tech Student and Admission Support Assistant
**Project Type:** AI Voice Agent for Customer Support
**Institution:** Aditya College of Engineering and Technology (ACET)
**Student Name:** Indra Sekhar
**Programme:** B.Tech — Computer Science and Engineering (AI/ML)
**Submission Date:** 25 October 2026

---

## 1. Project Overview

The ACET AI Voice Support Agent is a browser-based conversational voice assistant developed to help prospective B.Tech students, parents, and existing students obtain college information and submit support enquiries. The project combines a React web interface with the Vapi voice-agent platform and a Google Sheets enquiry-storage workflow.

The assistant is designed to answer questions using a college-specific knowledge base. Topics include B.Tech programmes, basic eligibility, hostel and transport facilities, and general college information. When a question requires current verification or the answer is unavailable, the assistant should explain the limitation and offer to create a support enquiry.

The project demonstrates conversational AI, prompt engineering, knowledge-base use, structured information collection, external tool integration, functional testing, and deployment of a working web prototype.

## 2. Problem Statement

Prospective students, parents, and existing students often need information about undergraduate engineering programmes, admission requirements, fees, hostel facilities, transportation, and other college services. Finding the correct information can require checking different sources or contacting college staff. Repeated questions also create a support workload, while outdated or incomplete information can lead to confusion during admission and student-support processes.

A conventional website provides written information, but users may prefer asking questions naturally through speech. A voice-based interface can make common enquiries more conversational and can guide users through a support-request process when an answer is unavailable.

The objective of this project is to develop an AI voice assistant specifically for ACET B.Tech-related enquiries. The system uses a web interface connected to Vapi and a verified college knowledge base. It responds to supported questions, asks for clarification when speech or details are unclear, and avoids guessing current fees, deadlines, seat availability, or unsupported statistics. For unresolved enquiries, it can collect relevant details, repeat them for user confirmation, and submit the confirmed request to Google Sheets through the configured integration.

The project focuses on a practical minimum viable product rather than a complete college administration system. It aims to demonstrate a working voice interaction, responsible handling of uncertain information, structured enquiry storage, and a documented testing and improvement process. Human follow-up is represented by the recorded support request; automatic staff notification and live call transfer are not claimed as implemented features.

## 3. Target Users

- **Prospective B.Tech students:** To ask about programmes, eligibility, and admission-related information.
- **Parents and guardians:** To seek general college information and raise enquiries requiring confirmation.
- **Existing B.Tech students:** To ask supported questions or submit student-support requests.
- **College support staff:** To receive recorded enquiries for subsequent review and follow-up.

The current project scope is limited to ACET and B.Tech-related support.

## 4. Proposed Solution

The solution consists of a web frontend, a Vapi voice assistant, a college-specific knowledge base, and a Google Sheets integration for confirmed support enquiries.

The user opens the deployed website and interacts with the assistant through voice. The assistant interprets the request and answers using available verified information. If a request is unclear, it asks the user to repeat or correct the relevant details. If the requested information cannot be verified, it explains the limitation and offers a support request.

When the user agrees to submit an enquiry, the assistant collects the relevant information, repeats the details for confirmation, and invokes the configured tool to save the request. The assistant should report successful submission only when the tool outcome supports that claim. If the operation fails, it should communicate the failure honestly.

## 5. Main Features

1. **Browser-based voice interaction:** Users can communicate with the assistant through the deployed web interface.
2. **B.Tech information support:** The assistant answers supported questions using the ACET knowledge base.
3. **Admission enquiry handling:** Users can ask about programme and admission information.
4. **Clarification and correction:** The assistant can ask users to repeat unclear speech or correct details.
5. **Support-request collection:** The assistant collects relevant enquiry details when human follow-up is needed.
6. **Confirmation before submission:** The assistant repeats the collected details and requests confirmation before saving.
7. **Google Sheets integration:** Confirmed support enquiries can be stored as structured records.
8. **Uncertainty handling:** The assistant avoids inventing current fees, deadlines, seat availability, or unsupported statistics.
9. **Failure handling:** The conversation instructions require the assistant to communicate tool failures honestly.
10. **Privacy-conscious interaction:** The assistant should not pressure users to share information or expose private student records.

## 6. Solution Architecture

The high-level architecture is:

```text
Student / Parent
       |
       v
Deployed React + Vite Website
       |
       v
Vapi Voice Assistant
       |
       v
Interpret Request and Check Knowledge Base
       |
       +-----------------------------+
       |                             |
       v                             v
Verified Answer Available      Answer Unavailable /
       |                       Human Help Needed
       v                             |
Respond to User                      v
                              Offer Support Request
                                      |
                                      v
                              Collect Enquiry Details
                                      |
                                      v
                              Confirm Details with User
                                      |
                                      v
                              Configured Vapi Tool
                                      |
                                      v
                              Google Sheets Record
                                      |
                                      v
                              College Team Follow-up
```

**Architecture note:** The diagram describes the intended support workflow. Google Sheets enquiry storage has been verified separately. The diagram does not imply that the system automatically transfers calls or sends staff notifications.

For the detailed architecture, refer to `architecture.md`.

## 7. Tools and Technologies

| Technology | Purpose |
|---|---|
| React | Frontend user interface |
| Vite | Frontend development and build tooling |
| Vapi | Voice-agent integration and conversational workflow |
| ACET knowledge base | Source of college-specific information |
| Google Sheets | Storage of confirmed support enquiries |
| Git and GitHub | Version control and project repository |
| GitHub Codespaces | Cloud development environment |
| Vercel | Hosting the deployed web prototype |

The public prototype is available at:

https://acet-ai-voice-support-agent.vercel.app/

Repository:

https://github.com/Indra-sekhar/ACET-AI-Voice-Support-Agent

## 8. Prompt Engineering

Prompt engineering was used to define the assistant's role, response style, knowledge boundaries, support-request workflow, and safety rules.

The system instructions establish the assistant as an ACET B.Tech support assistant. The assistant is expected to speak politely and concisely, use verified college information, and ask clarifying questions when necessary.

The prompt also defines how to handle enquiries that need current confirmation. Rather than inventing fees, admission deadlines, placement statistics, or live seat availability, the assistant should explain the limitation and offer to collect a support request. Important details should be repeated to the user and confirmed before submission.

Additional instructions cover privacy, refusal to pressure users for personal information, honest reporting of tool outcomes, and escalation for complaints, payment issues, sensitive matters, or repeated misunderstanding.

The project documentation in the `prompts/` directory should be consulted for the actual system prompt and other recorded prompts. The conversation flows are documented in `conversation-flows.md`.

## 9. Testing and Results

Functional testing was documented in `testing-report.md`, with ten test scenarios covering normal questions, unclear input, corrected details, enquiry confirmation, and failure handling.

The project developer separately verified that the deployed website and voice assistant were working and that an enquiry record could be saved to Google Sheets.

The failure-handling scenario was observed during the original test. However, the supporting data for that scenario was subsequently deleted and could not be independently reverified during this report revision. It is therefore identified as a historical test rather than a newly reproduced result.

The report's test statuses reflect the recorded outcomes, not a claim that every scenario was rerun during final preparation. Dummy sample records added manually to a spreadsheet are not treated as proof of voice-agent-generated enquiries.

Refer to `testing-report.md` for the test cases, expected results, recorded outcomes, and evidence limitations. Any additional tests performed before submission should be recorded there with their actual results.

## 10. Challenges and Solutions

### 10.1 Vapi SDK Integration

**Challenge:** The frontend initially displayed `Vapi is not a constructor`.

**Solution:** The installed SDK exports were inspected, and the import was corrected to use the appropriate constructor.

**Result:** The voice assistant connected and responded aloud during testing.

### 10.2 Google Sheets Integration

**Challenge:** The support-enquiry tool initially returned a missing Nango configuration error.

**Solution:** The Google Sheets tool configuration, spreadsheet ID, range, and published tool version were reviewed.

**Result:** Subsequent testing confirmed that enquiry records could be saved to Google Sheets.

### 10.3 Speech Recognition and Clarification

**Challenge:** Some spoken course names and responses were unclear or incorrectly transcribed.

**Solution:** Clarification and correction flows were tested so the assistant could request repetition or corrected information.

**Result:** Clarification scenarios were handled during testing. Speech recognition may still need improvement for some branch names and accents.

### 10.4 Missing or Unverified College Information

**Challenge:** Current admission fees and opening dates could not always be verified from the available knowledge base.

**Solution:** The assistant's instructions were configured to avoid guessing and offer a support enquiry when verified information is unavailable.

**Result:** The intended workflow directs users toward college follow-up rather than encouraging unsupported answers.

### 10.5 Frontend UI Restoration

**Challenge:** Changes made during Vapi integration affected the original website interface.

**Solution:** The earlier interface implementation was retrieved from Git history, the preferred styling was restored, and the corrected files were committed.

**Result:** The preferred interface was restored while retaining voice controls.

### 10.6 Testing and Reliability

**Challenge:** A spoken confirmation alone does not prove that an external tool completed an operation.

**Solution:** Google Sheets records and tool outcomes were checked during functional testing.

**Result:** The testing process included separate verification of enquiry storage and attention to honest failure handling.

## 11. Final Outcome

The project produced a deployed browser-based AI voice-support prototype for ACET B.Tech-related enquiries. It integrates a React and Vite frontend with Vapi and a Google Sheets workflow for storing confirmed support enquiries.

The project demonstrates a practical conversational support use case, prompt-based control of response behaviour, clarification of unclear information, collection and confirmation of enquiry details, and integration with an external data-storage service.

The deployed website, voice assistant, and Google Sheets enquiry storage were verified by the project developer. Some historical test evidence is unavailable, and further live testing is recommended before treating every scenario as independently reverified.

The prototype records requests for college follow-up. It does not claim to provide automatic call transfer, guaranteed staff notification, live admission decisions, or real-time seat availability.

## 12. Limitations

- The assistant's responses depend on the completeness and accuracy of the available knowledge base.
- Current fees, admission deadlines, seat availability, and other changing information require confirmation from official college sources.
- Speech recognition may misinterpret some course names or spoken details.
- The failure-handling scenario has historical results but lacks supporting evidence for independent re-verification.
- The project does not implement a complete staff dashboard or enquiry-status management system.
- Automatic call transfer and guaranteed staff notification are not claimed as implemented.
- Further testing with different users, accents, and conversation scenarios would improve confidence in reliability.

## 13. Future Enhancements

1. Expand live testing across normal enquiries, unclear speech, corrections, and tool failures.
2. Improve speech recognition for Indian accents and programme names.
3. Expand the knowledge base using verified official information.
4. Add a staff dashboard to view and update enquiry statuses.
5. Add analytics for enquiry categories and resolution outcomes.
6. Introduce multilingual interaction after testing language quality.
7. Add staff notification or call-transfer capabilities only after implementing and testing the required integrations.

## 14. Demo and Project Links

**Live demo:** https://acet-ai-voice-support-agent.vercel.app/

**GitHub repository:** https://github.com/Indra-sekhar/ACET-AI-Voice-Support-Agent

The final submission should include screenshots of the deployed interface, a screenshot or appropriately redacted view of a genuine enquiry record, and a short demonstration recording if required by the capstone guidelines.

Do not include API keys, access tokens, private phone numbers, or other secrets in screenshots or submission materials.

## 15. Conclusion

The ACET AI Voice Support Agent demonstrates how conversational AI can support common college-information requests and help users submit enquiries for follow-up. By combining a browser-based voice interface, a college-specific knowledge base, prompt engineering, and structured Google Sheets storage, the project provides a practical minimum viable product for a defined support scenario.

The development process also demonstrated the importance of checking SDK integration, verifying external tool outcomes, restoring working UI changes, protecting secrets, and documenting test limitations. The project provides a foundation for future improvements in speech recognition, knowledge coverage, staff workflows, and multilingual support.

---

**Submission checklist**

- [ ] Confirm the final report's author and submission details.
- [ ] Review `testing-report.md` and retain its evidence limitations.
- [ ] Add screenshots of the real deployed prototype.
- [ ] Include a genuine, privacy-redacted enquiry record as evidence.
- [ ] Add a demo recording if required.
- [ ] Confirm all repository links and documentation paths.
- [ ] Ensure no secrets or private student information are included.
