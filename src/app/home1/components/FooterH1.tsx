"use client";

const footerLinks = {
  Company: [
    { label: "About Us", href: "https://virratglobal.com/about/" },
    { label: "Our Services", href: "#services" },
    { label: "Core Features", href: "#features" },
    { label: "Our Process", href: "#process" },
  ],
  Solutions: [
    { label: "Branding & Print", href: "#services" },
    { label: "Web Development", href: "#services" },
    { label: "UI/UX Design", href: "#services" },
    { label: "Performance Ads", href: "#services" },
  ],
  Enterprise: [
    { label: "Case Studies", href: "#portfolio" },
    { label: "FAQ Support", href: "#faq" },
    { label: "Corporate Gifting", href: "https://virratglobal.com/portfolio/" },
    { label: "Compliance & GST", href: "https://virratglobal.com" },
  ],
};

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/smartupindia.co/",
    svg: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/smartupindia.co/",
    svg: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://in.linkedin.com/company/smartupindia",
    svg: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function FooterH1() {
  return (
    <footer
      id="footer"
      style={{
        background: "#FFFFFF",
        borderTop: "1px solid #F1D6D6",
        color: "#1F1F1F",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "80px 24px 48px",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "40px",
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "9px",
                  background: "#D62020",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 400,
                  fontSize: "1rem",
                  color: "white",
                }}
              >
                V
              </div>
              <span style={{ fontWeight: 400, fontSize: "1rem", color: "#1F1F1F", letterSpacing: "-0.02em" }}>
                Virrat<span style={{ color: "#D62020" }}>Global</span>
              </span>
            </div>
            <p
              style={{
                color: "#666666",
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: "24px",
                maxWidth: "260px",
              }}
            >
              Enterprise-grade creative agency for Branding, Web Solutions, Legal Licenses, and Digital Growth.
            </p>

            {/* Socials */}
            <div style={{ display: "flex", gap: "10px" }}>
              {socials.map((social) => (
                <a data-magnetic
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "#FFF5F5",
                    border: "1px solid #F1D6D6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#D62020",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#D62020";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#FFF5F5";
                    e.currentTarget.style.color = "#D62020";
                  }}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                style={{
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "#D62020",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                {title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <a data-magnetic
                      href={link.href}
                      style={{
                        color: "#666666",
                        textDecoration: "none",
                        fontSize: "1rem",
                        fontWeight: 500,
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#D62020")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#666666")}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom copyright */}
        <div
          style={{
            borderTop: "1px solid #F1D6D6",
            paddingTop: "24px",
            marginTop: "60px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p style={{ color: "#666666", fontSize: "1rem", margin: 0 }}>
            &copy; {new Date().getFullYear()} Virrat Global Pvt. Ltd. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy", "Terms", "Legal"].map((item) => (
              <a data-magnetic
                key={item}
                href="#"
                style={{ color: "#666666", fontSize: "1rem", textDecoration: "none", fontWeight: 500 }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#D62020")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#666666")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
