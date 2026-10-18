# Problem Statement

## ACET AI Voice Support Agent — B.Tech Student and Admission Support Assistant

Students, parents, and prospective applicants often need accurate information about college admissions, academic programs, and student support services. Finding the correct information can require visiting multiple webpages, contacting college staff, or waiting for responses. This process may be inconvenient for users who need quick answers, particularly during admission periods or outside regular working hours.

The main problem is the lack of a simple, voice-based support system that allows users to ask college-related questions naturally and submit enquiries when the required information is unavailable. Traditional information systems may require users to search through lengthy documents or manually contact the appropriate department. Another challenge is ensuring that the system provides reliable information without generating incorrect details about admission procedures, fees, deadlines, or college policies.

The proposed solution is the **ACET AI Voice Support Agent**, a web-based AI assistant designed specifically for B.Tech admission and student support at Aditya College of Engineering and Technology (ACET), Surampalem. The system uses a React-based frontend and Vapi voice technology to enable natural voice conversations. It uses a configured AI assistant and a verified ACET knowledge base to answer supported questions.

When the assistant cannot provide a verified answer, it offers users the option to submit a support enquiry. It collects the necessary details, confirms them with the user, and uses a Google Sheets integration to store the enquiry. The assistant reports whether the saving operation succeeds or fails.

The primary objective is to improve the accessibility and convenience of college information, reduce repetitive enquiries, and provide a structured way to capture unanswered questions while avoiding unsupported claims about college information.