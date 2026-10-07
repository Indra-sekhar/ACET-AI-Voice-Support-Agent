# ACET AI Voice Support Agent

## 1. Project Title

**ACET AI Voice Support Agent — B.Tech Student & Admission Support Assistant**

## 2. Institution

**Aditya College of Engineering and Technology (ACET)**  
Aditya Nagar, ADB Road, Surampalem, Andhra Pradesh, India.

## 3. Project Type

AI-powered conversational voice support system.

## 4. Project Objective

The objective of this project is to develop an AI voice support agent that can provide useful and reliable information to students, parents, and prospective B.Tech students of Aditya College of Engineering and Technology.

The agent will communicate with users through natural voice conversation and answer frequently asked questions using a verified college knowledge base.

The system will also identify enquiries that require additional support, collect the required user information, confirm the details, and store the request for human follow-up.

## 5. Initial Scope

The first version of the system will focus **only on B.Tech-related enquiries at ACET**.

The system will cover areas such as:

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
- Human escalation

Other programs such as M.Tech, Polytechnic, Pharmacy, MBA, and BBA are outside the initial MVP scope and may be considered as future enhancements.

## 6. Target Users

The primary users are:

1. Prospective B.Tech students
2. Parents of prospective students
3. Existing B.Tech students
4. Users looking for general B.Tech-related college information

## 7. Core Features

### 7.1 Voice Conversation

The system allows users to communicate using natural spoken language.

### 7.2 FAQ Support

The agent can answer frequently asked questions from the verified knowledge base.

### 7.3 Admission Support

The agent can handle general B.Tech admission-related enquiries.

### 7.4 Information Collection

When a user needs additional assistance, the agent can collect information such as:

- Name
- Phone number
- B.Tech program
- Year/batch when applicable
- User's request or problem

### 7.5 Request Confirmation

Before submitting a support request, the agent confirms the collected information with the user.

### 7.6 Support Request Storage

Confirmed requests can be stored in a structured system such as Google Sheets for human follow-up.

### 7.7 Human Escalation

If the agent cannot confidently answer a question, or the request requires human assistance, it should guide the user toward human support instead of guessing.

## 8. Reliability and Safety

The agent must only provide information available in the verified knowledge base.

The agent must **not invent college information**.

For information that may change, such as:

- Current fees
- Admission deadlines
- Seat availability
- Current policies
- Current admission procedures

the agent should provide the information only when it has been verified for the relevant academic year.

If verified information is unavailable, the agent should clearly state that confirmation is required and offer to create a support request.

The agent must never claim that an action has been completed unless the action was actually completed.

## 9. Proposed Architecture

```text
Student / Parent
       ↓
Voice Interface
       ↓
AI Conversation Layer
       ↓
Verified ACET Knowledge Base
       ↓
 ┌───────────────┬─────────────────┐
 │               │                 │
Answer        Need Support      Unknown
 │               │                 │
 ↓               ↓                 ↓
User         Collect Details    Escalate
                ↓
             Confirm
                ↓
          Store Request
                ↓
        Human Follow-up
```

## 10. Development Philosophy

The project follows the approach:

**Build small → Make it work → Test it → Improve it**

The objective is to produce a functional MVP within the available project timeline rather than attempting to build a large enterprise-level system.

## 11. Future Expansion

After successfully completing the B.Tech MVP, the system could be expanded to support:

- M.Tech
- Polytechnic
- Pharmacy
- MBA
- BBA
- Additional college departments
- More student services
- More automated workflows

These features are considered future enhancements and are not part of the initial MVP.

## 12. Expected Outcome

The final system should provide a working AI voice assistant capable of:

- Greeting users naturally
- Understanding common B.Tech-related questions
- Providing verified information
- Handling admission enquiries
- Collecting support-request details
- Confirming submitted information
- Storing requests
- Escalating unsupported or sensitive requests
- Handling conversations safely
- Demonstrating successful testing across multiple scenarios