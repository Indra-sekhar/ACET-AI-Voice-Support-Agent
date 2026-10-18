# ACET AI Voice Support Agent

## 1. Project Title

**ACET AI Voice Support Agent — B.Tech Student & Admission Support Assistant**

## 2. Institution

**Aditya College of Engineering and Technology (ACET)**  
Aditya Nagar, ADB Road, Surampalem, Andhra Pradesh, India.

## 3. Project Type

AI-powered conversational voice support system.

## 4. Project Objective

The objective of this project is to develop an AI voice support agent that provides useful and reliable information to students, parents, and prospective B.Tech students of Aditya College of Engineering and Technology.

The agent communicates with users through natural voice conversations and answers frequently asked questions using a verified college knowledge base.

The system also identifies enquiries that require additional support, collects the necessary user information, confirms the details, and stores confirmed requests for human follow-up.

## 5. Initial Scope

The first version of the system focuses **only on B.Tech-related enquiries at ACET**.

The system covers areas such as:

- B.Tech programs
- Program-related information
- Admission enquiries
- Eligibility information
- College information
- Hostel information
- Transportation information
- General student-support enquiries
- Contact information
- Support-request collection
- Human follow-up for unsupported or unverified enquiries

Other programs such as M.Tech, Polytechnic, Pharmacy, MBA, and BBA are outside the initial MVP scope and may be considered as future enhancements.

## 6. Target Users

The primary users are:

1. Prospective B.Tech students
2. Parents of prospective students
3. Existing B.Tech students
4. Users looking for general B.Tech-related college information

## 7. Core Features

### 7.1 Voice Conversation

The system allows users to communicate using natural spoken language through the web-based voice interface.

### 7.2 FAQ Support

The agent answers frequently asked questions using information from the verified ACET knowledge base.

### 7.3 Admission Support

The agent handles supported B.Tech admission-related enquiries using verified information.

### 7.4 Information Collection

When a user needs additional assistance, the agent can collect the necessary information, such as:

- Name
- Phone number
- B.Tech program
- Year or batch, when applicable
- User's request or problem

### 7.5 Request Confirmation

Before submitting a support request, the agent repeats the collected information and asks the user to confirm it.

### 7.6 Support Request Storage

The configured Google Sheets integration stores confirmed support enquiries. The agent reports successful storage only after receiving confirmation from the tool.

### 7.7 Human Follow-up

If the agent cannot confidently answer a question or the request requires human assistance, it offers to record a support enquiry for human follow-up instead of guessing.

The system does not claim to transfer calls or notify staff automatically unless those actions are actually implemented and verified.

## 8. Reliability and Safety

The agent must provide information based on the verified ACET knowledge base.

The agent must **not invent college information**.

For information that may change, such as:

- Current fees
- Admission deadlines
- Seat availability
- Current policies
- Current admission procedures

the agent should provide information only when it has been verified for the relevant academic year.

If verified information is unavailable, the agent should clearly state that confirmation is required and offer to create a support request.

The agent must never claim that an action has been completed unless the action was actually completed.

The system should also:

- Ask for confirmation before saving an enquiry.
- Collect only the information necessary to handle the request.
- Protect users' personal information.
- Report tool failures honestly.
- Avoid promising a response time that has not been confirmed.

## 9. Proposed Architecture

The following diagram represents the main workflow of the ACET AI Voice Support Agent.

```text
Student / Parent
       |
       v
React Frontend
       |
       v
Vapi Voice Interface
       |
       v
AI Assistant + System Prompt
       |
       v
Verified ACET B.Tech Knowledge Base
       |
       v
Can the question be answered?
       |
       +--------------------------+
       |                          |
       v                          v
Verified answer             No verified answer
       |                          |
       v                          v
Speak the answer            Offer support enquiry
       |                          |
       v                          v
End conversation            Collect and confirm details
                                  |
                                  v
                           Google Sheets Tool
                                  |
                                  v
                           Check tool result
                                  |
                         +--------+--------+
                         |                 |
                         v                 v
                      Success            Failure
                         |                 |
                         v                 v
                 Confirm saved       Explain saving
                    enquiry             failed
                         |                 |
                         +--------+--------+
                                  |
                                  v
                           End conversation
```

### Architecture Components

- **React Frontend:** Provides the web interface for users to start voice conversations.
- **Vapi Voice Interface:** Manages the voice interaction with the configured assistant.
- **AI Assistant and System Prompt:** Defines the assistant's role, response rules, and safety behaviour.
- **Verified ACET Knowledge Base:** Supplies supported college information.
- **Google Sheets Integration:** Stores confirmed support enquiries through the configured tool.
- **Human Follow-up:** Allows unsupported or unresolved enquiries to be handled by the appropriate college personnel outside the automated conversation.

## 10. Development Philosophy

The project follows the approach:

**Build small → Make it work → Test it → Improve it**

The objective is to produce a functional MVP within the available project timeline rather than attempting to build a large enterprise-level system.

Development and testing focus on the main voice conversation, verified answers, support-request collection, confirmation, and enquiry storage.

## 11. Future Expansion

After successfully completing the B.Tech MVP, the system could be expanded to support:

- M.Tech
- Polytechnic
- Pharmacy
- MBA
- BBA
- Additional college departments
- More student services
- Additional automated workflows
- Multilingual voice interaction
- Additional support integrations

These features are considered future enhancements and are not part of the initial MVP unless separately implemented and tested.

## 12. Expected Outcome

The final system aims to provide a working AI voice assistant capable of:

- Greeting users naturally
- Handling common B.Tech-related questions
- Providing verified college information
- Supporting admission enquiries
- Collecting support-request details
- Confirming information before submission
- Storing confirmed enquiries in Google Sheets
- Reporting whether enquiry storage succeeds or fails
- Offering human follow-up for unsupported or sensitive requests
- Handling conversations safely
- Demonstrating testing results for the scenarios actually tested