# 💸 SharePay

> A modern expense-splitting and personal finance app for tracking shared expenses, groups, balances, settlements, and spending insights.

<p align="center">
  <strong>Split expenses. Track balances. Settle up.</strong><br/>
  Built with Next.js, React, Convex, Clerk, Inngest, Gemini AI, and Resend.
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-project-structure">Structure</a> •
  <a href="#-how-it-works">How It Works</a>
</p>

---

## ✨ What is SharePay?

SharePay helps friends, roommates, classmates, and groups manage shared expenses without doing the maths manually.

You can:

- 👥 Create groups and manage members.
- 💰 Add individual or group expenses.
- 🧮 Split expenses equally, by percentage, or by exact amounts.
- 📊 View spending summaries and balances.
- 🤝 Track who owes whom.
- 💳 Record settlements between users.
- 📧 Send payment reminders by email.
- 🤖 Generate monthly spending insights with Gemini AI.
- 📑 Export expense reports.
- 🔐 Authenticate users with Clerk.

---

## 🎯 Features

<details>
<summary><strong>💰 Expense Management</strong></summary>

Create expenses with:

- Description and amount
- Category
- Date
- Payer
- Participants
- Group
- Split method

The application validates that the split amounts match the total expense before saving it.

</details>

<details>
<summary><strong>🧮 Flexible Splitting</strong></summary>

SharePay supports three split methods:

| Method | Example |
|---|---|
| Equal | ₹1,000 ÷ 4 people = ₹250 each |
| Percentage | Alice 50%, Bob 30%, Charlie 20% |
| Exact | Alice ₹500, Bob ₹300, Charlie ₹200 |

</details>

<details>
<summary><strong>👥 Groups & Contacts</strong></summary>

Create groups for trips, roommates, projects, events, or recurring shared expenses.

</details>

<details>
<summary><strong>📊 Dashboard</strong></summary>

The dashboard provides:

- Total spending
- Amount owed to others
- Amount others owe you
- Monthly spending
- Groups
- Balance details

</details>

<details>
<summary><strong>🤝 Settlements</strong></summary>

Record payments between people and track settlement history.

</details>

<details>
<summary><strong>📧 Automated Emails</strong></summary>

Inngest handles background jobs for:

- Daily outstanding-payment reminders
- Monthly spending insight emails

Emails are sent using Resend.

</details>

<details>
<summary><strong>🤖 AI Spending Insights</strong></summary>

Gemini analyses monthly spending and generates:

1. Monthly overview
2. Top spending categories
3. Unusual spending patterns
4. Saving opportunities
5. Recommendations

</details>

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 15 |
| UI | React 19 |
| Styling | Tailwind CSS |
| Components | Radix UI |
| Icons | Lucide React |
| Authentication | Clerk |
| Backend | Convex |
| Database | Convex |
| Forms | React Hook Form |
| Validation | Zod |
| Charts | Recharts |
| Background Jobs | Inngest |
| AI | Google Gemini |
| Email | Resend |
| Date Handling | date-fns |

---

## 🏗️ Architecture

```mermaid
flowchart TD
    A[👤 User] --> B[Next.js App]

    B --> C[Clerk Authentication]
    B --> D[React UI]

    D --> E[Convex Backend]
    E --> F[(Convex Database)]

    F --> G[Users]
    F --> H[Expenses]
    F --> I[Groups]
    F --> J[Settlements]
    F --> K[Activities]

    E --> L[Inngest]

    L --> M[Payment Reminders]
    L --> N[Monthly Insights]

    N --> O[Gemini AI]
    M --> P[Resend]
    N --> P