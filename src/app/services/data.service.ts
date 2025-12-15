import { Injectable } from '@angular/core';

export interface ApplicationAgent {
  id: number;
  name: string;
  description: string;
  icon: string;
  image?: string;
}

export interface UseCase {
  id: number;
  name: string;
  description: string;
  icon: string;
}

export interface SecurityFeature {
  id: number;
  name: string;
  description: string;
  icon: string;
}

export interface IntegrationFeature {
  id: number;
  name: string;
  description: string;
  icon: string;
}

export interface WhySmartBots {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface TrustLogo {
  name: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getApplicationAgents(): ApplicationAgent[] {
    return [
      {
        id: 1,
        image: 'assets/images/Orchestration-Agents.png',
        name: "Orchestration Agents",
        description: "Coordinate complex processes across legacy systems, CRMs, and core banking platforms—ensuring seamless data flow and end-to-end automation without manual intervention.",
        icon: "account_tree"
      },
      {
        id: 2,
        image: 'assets/images/Engagement-Agents.png',
        name: "Engagement Agents",
        description: "Deliver personalized, contextual conversations across voice and digital channels, improving customer and member experiences while reducing service wait times.",
        icon: "chat"
      },
      {
        id: 3,
        image: 'assets/images/Transactional-Agents.png',
        name: "Transactional Agents",
        description: "Execute secure, real-time transactions such as payments, transfers, claims updates, and account modifications with full auditability and compliance.",
        icon: "credit_card"
      },
      {
        id: 4,
        image: 'assets/images/Decision-Making-Agents.png',
        name: "Decision-Making Agents",
        description: "Analyze multi-source data to generate automated recommendations or approvals—for credit decisions, fraud checks, underwriting, and risk analysis.",
        icon: "psychology"
      },
      {
        id: 5,
        image: 'assets/images/Operational-Efficiency-Agents.png',
        name: "Operational Efficiency Agents",
        description: "Automate high-volume back-office processes like reconciliations, reporting, KYC/AML workflows, and document processing—reducing cost and cycle time.",
        icon: "settings"
      },
      {
        id: 6,
        image: 'assets/images/AI-Assistants.png',
        name: "AI Assistants",
        description: "Provide always-on support for employees with quick access to institutional knowledge, SOPs, and data—boosting productivity and accuracy.",
        icon: "auto_awesome"
      }
    ];
  }

  getUseCases(): UseCase[] {
    return [
      {
        id: 1,
        name: "Reconciliation Agent",
        description: "Matches data across systems, formats, and documents to identify breaks, resolve discrepancies, and maintain audit-ready accuracy.",
        icon: "compare_arrows"
      },
      {
        id: 2,
        name: "Customer Experience Agent",
        description: "Provides consistent, personalized support across voice, chat, web, and apps—handling queries, resolving issues, and escalating intelligently through omnichannel engagement.",
        icon: "people"
      },
      {
        id: 3,
        name: "Financial Close Agent",
        description: "Automates period-end closing activities—data aggregation, validations, journal entry preparation, and reporting—cutting close cycles from weeks to days.",
        icon: "calculate"
      },
      {
        id: 4,
        name: "Payments Agent",
        description: "Automates routing, validation, and settlement of payments across channels and rails—reducing failures, retries, and operational costs.",
        icon: "swap_horiz"
      },
      {
        id: 5,
        name: "Underwriting Agent",
        description: "Evaluates risk using internal and external data to generate smart eligibility decisions, automate documentation checks, and speed up approvals.",
        icon: "description"
      },
      {
        id: 6,
        name: "Variance Analysis Agent",
        description: "Analyzes financial variances across budgets, forecasts, and actuals—surfacing drivers and insights for faster, data-backed decisions.",
        icon: "trending_up"
      }
    ];
  }

  getSecurityFeatures(): SecurityFeature[] {
    return [
      {
        id: 1,
        name: "Role-Based Access & SSO Integration",
        description: "Ensure controlled access to sensitive data with granular permissioning across teams, systems, and workflows. Enable secure, seamless authentication using enterprise identity providers like Okta, Azure AD, or Ping.",
        icon: "verified_user"
      },
      {
        id: 2,
        name: "Industry Compliances",
        description: "Certified for SOC 2 Type II, ISO 27001, PCI DSS, and GDPR compliance. Built to meet the strictest regulatory standards in banking and financial services.",
        icon: "security"
      },
      {
        id: 3,
        name: "Data Masking & Guardrails",
        description: "Protect against hallucinations, sensitive data leakage, and policy violations with real-time validation and safety controls. Enterprise-grade encryption for data at rest and in transit.",
        icon: "lock"
      },
      {
        id: 4,
        name: "Traceability & Oversight",
        description: "Tamper-proof audit trails for complete accountability. Full request-response traceability for every AI interaction. Real-time monitoring dashboards for proactive governance and compliance.",
        icon: "visibility"
      }
    ];
  }

  getIntegrationFeatures(): IntegrationFeature[] {
    return [
      {
        id: 1,
        name: "Core Banking Integrations",
        description: "Connect agents with existing core systems to enable real-time account data access, transactions, and operations.",
        icon: "storage"
      },
      {
        id: 2,
        name: "Enterprise Systems",
        description: "Integrate with CRMs, ERPs, LOS/LMS, risk systems, and document repositories for unified automation and decisioning.",
        icon: "inventory_2"
      },
      {
        id: 3,
        name: "Multiple Cloud Platforms",
        description: "Deploy flexibly across AWS, Azure, GCP, or hybrid environments with full security and scalability.",
        icon: "cloud"
      },
      {
        id: 4,
        name: "Front-End Integrations",
        description: "Embed AI agents seamlessly into apps, portals, IVR, websites, and digital channels for smooth customer and employee experiences.",
        icon: "monitor"
      }
    ];
  }

  getWhySmartBots(): WhySmartBots[] {
    return [
      {
        id: 1,
        title: "Purpose-Built for Regulated Industries",
        description: "SmartBots AI is architected specifically for highly regulated financial institutions. Every layer—from data handling to agent orchestration—is designed with banking security, compliance, and audit requirements at its core. SOC 2 Type II certified with zero data leakage architecture, full audit trails, and enterprise-grade governance controls that meet the strictest industry standards.",
        icon: "lock"
      },
      {
        id: 2,
        title: "Integrates with Core Systems",
        description: "Seamless connectivity with your existing technology stack through native connectors and API-first architecture. Pre-built integrations for major core banking platforms including FIS, Fiserv, Jack Henry, Temenos, CSI, and Symitar. Works alongside your CRM (Salesforce, Microsoft Dynamics), ERP systems, loan origination systems, and document management platforms. No rip-and-replace—SmartBots AI augments your current infrastructure.",
        icon: "power"
      },
      {
        id: 3,
        title: "Pre-Built Components for Customized Solutions",
        description: "Accelerate deployment with our library of pre-configured agent templates and workflows designed specifically for banking operations. Each component is production-ready yet fully customizable to match your institution's unique processes, policies, and brand voice. From reconciliation workflows to compliance screening logic—start fast and tailor as needed without starting from scratch.",
        icon: "apps"
      },
      {
        id: 4,
        title: "AI Agent Maintenance & Performance Management",
        description: "Continuous monitoring, optimization, and management of your AI agents through our comprehensive maintenance framework. Real-time performance dashboards track accuracy, latency, and business outcomes. Automated model retraining and version control ensure agents stay current with regulatory changes and evolving business needs. Dedicated support team provides proactive optimization recommendations and handles updates seamlessly.",
        icon: "speed"
      },
      {
        id: 5,
        title: "Cross-Industry Intelligence Powering BFSI AI",
        description: "SmartBots brings learnings from Pharma (compliance precision), Insurance (risk logic & auditability), and Telecom (high-volume customer workflows) to BFSI. This cross-vertical intelligence helps us design AI agents for banking and credit unions that are secure, compliant, and optimized for credit decisioning and member experience. The result? Faster deployments, smarter risk reasoning, and workflows built for regulation.",
        icon: "layers"
      },
      {
        id: 6,
        title: "From Pilot to ROI in 30 Days",
        description: "Our proven rapid deployment methodology gets you from concept to production in weeks, not months. Structured implementation process includes discovery workshops, system integration, agent configuration, user training, and go-live support. Start with a focused use case, prove value quickly, then scale across the enterprise. Typical pilot implementations show measurable ROI within the first month through efficiency gains and error reduction.",
        icon: "rocket_launch"
      }
    ];
  }

  getTeamMembers(): TeamMember[] {
    return [
      {
        id: 1,
        name: "Sunny",
        role: "Sales",
        bio: "Former banking technologist with 20+ years in digital transformation and financial data systems.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sunny&gender=male"
      },
      {
        id: 2,
        name: "Sandy",
        role: "US GTM Head",
        bio: "Experienced in scaling fintech partnerships and ensuring AI deployments stay compliant and ROI-positive.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sandy&gender=male"
      },
      {
        id: 3,
        name: "JP",
        role: "CTO & Co-Founder, Head of AI & Data",
        bio: "Leads SmartBots' AI architecture and core integrations, ensuring security, accuracy, and transparency at scale.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=JP&gender=male"
      },
      {
        id: 4,
        name: "Bryan C.",
        role: "Strategic Advisor, Banking Growth & Brand",
        bio: "Veteran banking strategist and fintech advisor helping institutions align AI strategy with business growth.",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bryan&gender=male"
      }
    ];
  }

  getTrustLogos(): TrustLogo[] {
    return [
      { name: "Finastra", type: "banking" },
      { name: "FIS", type: "banking" },
      { name: "Fiserv", type: "banking" },
      { name: "Jack Henry", type: "banking" },
      { name: "CSI", type: "banking" },
      { name: "Symitar", type: "banking" },
      { name: "Salesforce", type: "enterprise" },
      { name: "OpenAI", type: "ai" },
      { name: "Anthropic", type: "ai" },
      { name: "Deepseek", type: "ai" },
      { name: "Azure OpenAI", type: "ai" },
      { name: "Mistral", type: "ai" },
      { name: "ServiceNow", type: "enterprise" }
    ];
  }
}


