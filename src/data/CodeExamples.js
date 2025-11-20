export const codeExamples = {
  // 1. Intelligent Scheduling (Mapped to original 'App.jsx')
  "App.jsx": `import { PAAI } from "@paai/core";
import { ScheduleAPI } from "@paai/calendar";

async function scheduleQ4Review() {
  const command = "Schedule Q4 Review with Sarah & Marcus next week. Send Q3 summary first.";
  
  // The PAAI core processes the natural language command
  const confirmation = await PAAI.process(command); 

  // Finalize the booking using the generated details
  if (confirmation.status === 'READY') {
    await ScheduleAPI.finalize(confirmation.details);
  }
}

scheduleQ4Review();`,
  
  // 2. Communication Triage (Mapped to original 'Hero.jsx')
  "Hero.jsx": `// TriageRules.json - Defines rules for inbox and Slack triage
{
  "agentName": "EmailTriageAgent",
  "rules": [
    {
      "trigger": {
        "source": "Gmail",
        "condition": "Subject includes 'URGENT'"
      },
      "actions": [
        "Prioritize: P1",
        "DraftReply: 'Will review immediately.'"
      ]
    },
    {
      "trigger": {
        "source": "Slack",
        "condition": "Mentioned in #finance channel"
      },
      "actions": [
        "SummarizeThread: true"
      ]
    }
  ]
}`,
  
  // 3. Proactive Task Automation (Mapped to original 'Navbar.jsx')
  "Navbar.jsx": `import { Workflow } from "@paai/automation";

// Define a multi-step workflow for expense capture
Workflow.define('ExpenseCaptureAgent', {
  trigger: 'New Email from: receipts@*',
  when: 'Amount detected > $100',
  actions: [
    {
      step: 1,
      tool: 'Google Sheets',
      command: 'AppendRow(Sheet: 'Q4 Expenses', {date, vendor, amount})'
    },
    {
      step: 2,
      tool: 'Slack',
      command: 'SendNotification(Channel: '#finance', Message: 'New large expense alert.')'
    }
  ]
});`,
};

export const floatingCards = {
  "App.jsx": {
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
    textColor: "text-blue-200",
    contentColor: "text-blue-300",
    icon: "📅",
    title: "Intelligent Scheduling",
    content: "Natural language commands become multi-step calendar actions.",
  },
  "Hero.jsx": {
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400",
    textColor: "text-purple-200",
    contentColor: "text-purple-300",
    icon: "📬",
    title: "Communication Triage",
    content: "Rule-based agents prioritize inbox and draft contextual replies.",
  },
  "Navbar.jsx": {
    bgColor: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    textColor: "text-emerald-200",
    contentColor: "text-emerald-300",
    icon: "⚙️",
    title: "Proactive Task Automation",
    content: "Define powerful workflows spanning connected apps and services.",
  },
};