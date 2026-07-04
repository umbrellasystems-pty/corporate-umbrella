import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  BadgeCheck,
  Building2,
  Camera,
  Check,
  ChevronRight,
  ClipboardCheck,
  CloudUpload,
  Eye,
  FileText,
  Fingerprint,
  LockKeyhole,
  Network,
  ShieldCheck,
  Siren,
  Users,
} from "lucide-react";
import heroImage from "./assets/security-operations-hero.png";
import logo from "../public/logo.png";
import "./styles.css";

type Plan = {
  name: string;
  audience: string;
  includes: string[];
  pricing: string[];
  featured?: boolean;
};

type Value = {
  title: string;
  body: string;
};

type InquiryForm = {
  name: string;
  surname: string;
  email: string;
  contactNumber: string;
  companyName: string;
  role: string;
  branches: string;
  officers: string;
  cameras: string;
  message: string;
};

const plans: Plan[] = [
  {
    name: "Standard",
    audience:
      "For small security companies, pilot customers, single-branch operators, smaller teams, and lower evidence volume.",
    includes: [
      "Video Evidence Management",
      "Secure Uploads",
      "User Management",
      "Officer Management",
      "Audit Trails",
      "Chain of Custody",
      "PDF Reporting",
      "Evidence Verification",
    ],
    pricing: ["Number of officers", "Cameras", "Storage"],
  },
  {
    name: "Premium",
    audience:
      "For growing security organizations with more branches, more users, and more operational activity.",
    includes: ["Everything in Standard"],
    pricing: [
      "More branches",
      "More users",
      "More officers",
      "Higher storage",
      "More cameras",
      "More operational support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    audience:
      "For large security organizations and multi-branch deployments that need scale, integrations, and dedicated support.",
    includes: ["Everything in Premium"],
    pricing: [
      "Multiple branches",
      "Large-scale deployment",
      "Custom retention periods",
      "Third-party integrations",
      "Dedicated support",
    ],
  },
];

const functions = [
  { icon: Camera, label: "Camera inventory and assignment" },
  { icon: Users, label: "Officer and branch management" },
  { icon: CloudUpload, label: "Video upload and cloud storage" },
  { icon: Eye, label: "Evidence review workflows" },
  { icon: FileText, label: "Investigation, session, and violation reports" },
  { icon: Fingerprint, label: "Audit logs and chain-of-custody tracking" },
  { icon: Network, label: "Camera reassignment history" },
  { icon: Building2, label: "Role-based dashboards and oversight" },
];

const values: Value[] = [
  {
    title: "Integrity",
    body: "Digital evidence should remain secure, verifiable, and trustworthy throughout its entire lifecycle.",
  },
  {
    title: "Accountability",
    body: "The platform promotes responsible actions, transparent processes, and complete auditability.",
  },
  {
    title: "Innovation",
    body: "Umbrella Systems embraces cloud computing and emerging technologies to solve operational challenges.",
  },
  {
    title: "Security",
    body: "Protecting sensitive information is embedded throughout the platform, from infrastructure to application design.",
  },
  {
    title: "Customer Success",
    body: "Success is measured by the confidence customers place in the platform and the improvements they achieve.",
  },
  {
    title: "Excellence",
    body: "The company strives to deliver reliable, professional, enterprise-quality software.",
  },
];

const objectives = [
  {
    title: "0-12 Months",
    items: [
      "Complete pilot deployments with selected organisations.",
      "Validate product-market fit through real-world operational use.",
      "Secure the company's first commercial customers.",
      "Enhance the platform based on customer feedback.",
    ],
  },
  {
    title: "1-3 Years",
    items: [
      "Become a recognized Digital Evidence Management provider in South Africa.",
      "Introduce AI-assisted investigation capabilities.",
      "Build strategic partnerships with security technology providers.",
      "Establish a sustainable recurring SaaS revenue model.",
    ],
  },
  {
    title: "3-5 Years",
    items: [
      "Expand into neighboring African markets.",
      "Lead Digital Evidence Management across Southern Africa.",
      "Deliver advanced AI-powered investigative capabilities.",
      "Become a trusted technology partner for public safety and enterprise organisations.",
    ],
  },
];

const showUnderConstruction =
  import.meta.env.VITE_UNDER_CONSTRUCTION === "true";

const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER ?? "27000000000";

const emptyInquiryForm: InquiryForm = {
  name: "",
  surname: "",
  email: "",
  contactNumber: "",
  companyName: "",
  role: "",
  branches: "",
  officers: "",
  cameras: "",
  message: "",
};

function buildWhatsAppMessage(plan: Plan, form: InquiryForm) {
  return [
    `Umbrella Systems plan inquiry`,
    ``,
    `Selected plan: ${plan.name} Plan`,
    `Plan description: ${plan.audience}`,
    `Includes: ${plan.includes.join(", ")}`,
    `Pricing reflects: ${plan.pricing.join(", ")}`,
    ``,
    `Customer details`,
    `Name: ${form.name} ${form.surname}`,
    `Email: ${form.email}`,
    `Contact number: ${form.contactNumber}`,
    `Company/Organisation: ${form.companyName}`,
    `Role/Position: ${form.role || "Not provided"}`,
    `Branches: ${form.branches || "Not provided"}`,
    `Officers: ${form.officers || "Not provided"}`,
    `Cameras: ${form.cameras || "Not provided"}`,
    `Additional message: ${form.message || "Not provided"}`,
  ].join("\n");
}

function UnderConstructionPage() {
  return (
    <main className="construction-page">
      <section className="construction-shell">
        <a className="brand construction-brand" href="#top" aria-label="Umbrella Systems home">
          <span className="brand-mark" aria-hidden="true">
            <img
              className="brand-logo"
              src="/logo.png"
              alt=""
              onError={(event) => {
                event.currentTarget.src = "/logo-placeholder.svg";
              }}
            />
          </span>
          <span>
            <strong>Umbrella Systems</strong>
            <small>Pty Ltd</small>
          </span>
        </a>

        <div className="construction-content">
          <p className="eyebrow">
            <LockKeyhole size={16} />
            Secure platform update
          </p>
          <h1>Website under construction.</h1>
          <p>
            Umbrella Systems is preparing a more complete corporate experience.
            The platform remains focused on protecting digital evidence,
            strengthening accountability, and supporting secure security
            operations.
          </p>
        </div>

        <div className="construction-status" aria-label="Website status">
          <span>Current status</span>
          <strong>Coming soon</strong>
        </div>
      </section>
    </main>
  );
}

function App() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [form, setForm] = useState<InquiryForm>(emptyInquiryForm);

  if (showUnderConstruction) {
    return <UnderConstructionPage />;
  }

  const closePlanModal = () => {
    setSelectedPlan(null);
    setForm(emptyInquiryForm);
  };

  const updateForm = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((currentForm) => ({
      ...currentForm,
      [event.target.name]: event.target.value,
    }));
  };

  const submitPlanInquiry = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedPlan) {
      return;
    }

    const message = buildWhatsAppMessage(selectedPlan, form);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    closePlanModal();
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Umbrella Systems home">
          <span className="brand-mark" aria-hidden="true">
            <img
              className="brand-logo"
              src={logo}
              alt="Umbrella Systems Logo"
              onError={(event) => {
                event.currentTarget.src = "/logo-placeholder.svg";
              }}
            />
          </span>
          <span>
            <strong>Umbrella Systems</strong>
            <small>Pty Ltd</small>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#platform">Platform</a>
          <a href="#plans">Plans</a>
          <a href="#vision">Vision</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <img className="hero-image" src={heroImage} alt="" />
        <div className="hero-copy">
          <p className="eyebrow">
            <LockKeyhole size={16} />
            South African Digital Evidence Management
          </p>
          <h1>Protecting Evidence. Strengthening Accountability.</h1>
          <p>
            A secure platform for security organizations that need reliable
            video evidence management, audit trails, chain-of-custody controls,
            and operational reporting across teams and branches.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#plans">
              View organization plans
              <ChevronRight size={18} />
            </a>
            <a className="secondary-action" href="#platform">
              Explore platform
            </a>
          </div>
          <div className="hero-metrics" aria-label="Platform capabilities">
            <span>Evidence review</span>
            <span>Role-based access</span>
            <span>Audit-ready reporting</span>
          </div>
        </div>
        <div className="hero-panel" aria-label="Evidence management overview">
          <div className="signal-row">
            <span>Live Evidence Status</span>
            <strong>Verified</strong>
          </div>
          <div className="evidence-card active">
            <Camera size={24} />
            <div>
              <strong>Body-camera upload</strong>
              <span>Officer AJ-214 • Chain of custody locked</span>
            </div>
          </div>
          <div className="evidence-card">
            <ClipboardCheck size={24} />
            <div>
              <strong>Review workflow</strong>
              <span>Investigation report ready for approval</span>
            </div>
          </div>
          <div className="evidence-card">
            <BadgeCheck size={24} />
            <div>
              <strong>Audit trail</strong>
              <span>All access events recorded and traceable</span>
            </div>
          </div>
          <div className="security-strip">
            <Siren size={18} />
            <span>Evidence integrity monitored across every branch</span>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Platform focus areas">
        <div>
          <strong>Built for security teams</strong>
          <span>Private security, public safety, and high-risk operations</span>
        </div>
        <div>
          <strong>Evidence lifecycle control</strong>
          <span>Capture, upload, review, report, audit, and retain</span>
        </div>
        <div>
          <strong>South African focus</strong>
          <span>Designed around local operational realities and scale</span>
        </div>
      </section>

      <section className="section intro" id="platform">
        <div>
          <p className="section-kicker">Umbrella Systems Description</p>
          <h2>Built for secure evidence operations from capture to audit.</h2>
        </div>
        <div className="intro-copy">
          <p>
            Umbrella Systems is a digital evidence management platform for
            security organizations. It helps security companies manage
            body-camera or device-based video evidence from capture through
            review, reporting, and audit logging.
          </p>
          <p>
            The platform supports organizations, branches, officers, branch
            admins, organization owners, super admins, evidence reviewers, and a
            main platform owner. In simple terms, it helps teams prove what
            happened, who handled the evidence, when it was uploaded or reviewed,
            and whether anything important was detected or reported.
          </p>
        </div>
      </section>

      <section className="function-grid" aria-label="Core functions">
        {functions.map((item) => {
          const Icon = item.icon;
          return (
            <article className="function-item" key={item.label}>
              <Icon size={22} />
              <span>{item.label}</span>
            </article>
          );
        })}
      </section>

      <section className="section story">
        <div className="story-block">
          <p className="section-kicker">About Umbrella Systems</p>
          <h2>Founded to close a local evidence integrity gap.</h2>
          <p>
            Umbrella Systems (Pty) Ltd is a South African technology company
            established in 2026 to address the secure management of digital
            evidence for modern security and public safety organisations.
          </p>
          <p>
            Founded by software engineer Emmanual R. Januarie, the company grew
            from a practical observation: body-worn camera technology is only as
            valuable as the system protecting the evidence it creates. Umbrella
            Systems was built to support transparency, evidence integrity, and
            operational accountability across South Africa.
          </p>
        </div>
        <aside className="purpose-card">
          <ShieldCheck size={30} />
          <h3>Company Purpose</h3>
          <p>
            Umbrella Systems exists because trust in digital evidence matters.
            The platform protects evidence throughout its lifecycle so teams can
            make critical decisions with confidence.
          </p>
        </aside>
      </section>

      <section className="plans-section" id="plans">
        <div className="section-heading">
          <p className="section-kicker">Organization Plans</p>
          <h2>Choose the plan that matches your operational scale.</h2>
          <p>
            Pricing is designed around the real drivers of evidence operations:
            officers, cameras, branches, storage, retention, integrations, and
            support.
          </p>
        </div>
        <div className="plans-grid">
          {plans.map((plan) => (
            <article
              className={plan.featured ? "plan-card featured" : "plan-card"}
            key={plan.name}
            >
              {plan.featured && <span className="plan-badge">Growing teams</span>}
              <h3>{plan.name} Plan</h3>
              <p>{plan.audience}</p>
              <div>
                <h4>Includes</h4>
                <ul>
                  {plan.includes.map((feature) => (
                    <li key={feature}>
                      <Check size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Pricing reflects</h4>
                <ul>
                  {plan.pricing.map((item) => (
                    <li key={item}>
                      <Check size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className="plan-action"
                type="button"
                onClick={() => {
                  setSelectedPlan(plan);
                }}
              >
                Request consultation
                <ChevronRight size={16} />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="vision-section" id="vision">
        <article>
          <p className="section-kicker">Vision</p>
          <h2>To become South Africa's leading Digital Evidence Management Platform.</h2>
          <p>
            Umbrella Systems empowers organisations with secure, innovative
            technology that strengthens accountability, protects evidence
            integrity, and contributes to safer communities.
          </p>
        </article>
        <article>
          <p className="section-kicker">Mission</p>
          <h2>To support fair, transparent investigations.</h2>
          <p>
            The mission is to empower security organisations, public safety
            agencies, and high-risk industries with reliable Digital Evidence
            Management solutions that improve operational efficiency.
          </p>
        </article>
      </section>

      <section className="values-section">
        <div className="section-heading">
          <p className="section-kicker">Core Values</p>
          <h2>Principles behind the platform.</h2>
        </div>
        <div className="values-grid">
          {values.map((value) => (
            <article className="value-card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="objectives-section">
        <div className="section-heading">
          <p className="section-kicker">Strategic Objectives</p>
          <h2>From pilot deployments to Southern African scale.</h2>
        </div>
        <div className="timeline">
          {objectives.map((objective) => (
            <article className="timeline-card" key={objective.title}>
              <h3>{objective.title}</h3>
              <ul>
                {objective.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-main">
          <strong>Umbrella Systems</strong>
          <span>
            © 2026 Umbrella Systems (Pty) Ltd. All rights reserved.
          </span>
          <small>Protecting Evidence. Strengthening Accountability.</small>
        </div>
        <div className="footer-references" aria-label="Website references">
          <span>References:</span>
          <a href="https://lucide.dev" target="_blank" rel="noreferrer">
            Lucide icons (ISC)
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            React (MIT)
          </a>
          <span>Hero image generated for Umbrella Systems</span>
        </div>
        <a href="#top">Back to top</a>
      </footer>

      {selectedPlan && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="plan-inquiry-title"
        >
          <div className="modal-card">
            <div className="modal-heading">
              <div>
                <p className="section-kicker">Plan inquiry</p>
                <h2 id="plan-inquiry-title">
                  Request the {selectedPlan.name} Plan
                </h2>
              </div>
              <button
                className="modal-close"
                type="button"
                aria-label="Close inquiry form"
                onClick={closePlanModal}
              >
                ×
              </button>
            </div>

            <p className="modal-intro">
              Complete your details and we will prepare a WhatsApp message with
              your selected plan and requirements.
            </p>

            <form className="inquiry-form" onSubmit={submitPlanInquiry}>
              <label>
                Name
                <input
                  name="name"
                  value={form.name}
                  onChange={updateForm}
                  required
                  autoComplete="given-name"
                />
              </label>
              <label>
                Surname
                <input
                  name="surname"
                  value={form.surname}
                  onChange={updateForm}
                  required
                  autoComplete="family-name"
                />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={updateForm}
                  required
                  autoComplete="email"
                />
              </label>
              <label>
                Contact number
                <input
                  name="contactNumber"
                  type="tel"
                  value={form.contactNumber}
                  onChange={updateForm}
                  required
                  autoComplete="tel"
                />
              </label>
              <label>
                Company / Organisation
                <input
                  name="companyName"
                  value={form.companyName}
                  onChange={updateForm}
                  required
                  autoComplete="organization"
                />
              </label>
              <label>
                Role / Position
                <input
                  name="role"
                  value={form.role}
                  onChange={updateForm}
                  autoComplete="organization-title"
                />
              </label>
              <label>
                Number of branches
                <input
                  name="branches"
                  inputMode="numeric"
                  value={form.branches}
                  onChange={updateForm}
                />
              </label>
              <label>
                Number of officers
                <input
                  name="officers"
                  inputMode="numeric"
                  value={form.officers}
                  onChange={updateForm}
                />
              </label>
              <label>
                Number of cameras
                <input
                  name="cameras"
                  inputMode="numeric"
                  value={form.cameras}
                  onChange={updateForm}
                />
              </label>
              <label className="full-field">
                Additional requirements
                <textarea
                  name="message"
                  value={form.message}
                  onChange={updateForm}
                  rows={4}
                />
              </label>

              <div className="modal-actions">
                <button className="secondary-modal-action" type="button" onClick={closePlanModal}>
                  Cancel
                </button>
                <button className="primary-modal-action" type="submit">
                  Send via WhatsApp
                  <ChevronRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
