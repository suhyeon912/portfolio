export default function Contact() {
  const links = [
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      label: "Email",
      value: "suzy0197@gmail.com",
      href: "mailto:suzy0197@gmail.com",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      label: "GitHub",
      value: "github.com/suhyeon912",
      href: "https://github.com/suhyeon912",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: "LinkedIn",
      value: "linkedin.com/in/suhyeon",
      href: "https://linkedin.com",
    },
  ];

  return (
    <section id="contact" className="py-28 px-6 bg-[#0a0a14]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section label */}
        <div className="reveal flex items-center gap-3 mb-4 max-w-xl mx-auto">
          <div className="flex-1 h-px bg-[#1e1e36]" />
          <span className="font-mono text-sm text-purple-400 flex-shrink-0">
            04. Contact
          </span>
          <div className="flex-1 h-px bg-[#1e1e36]" />
        </div>

        <div className="reveal">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mt-6 mb-6 leading-tight">
            Let&apos;s build something{" "}
            <span className="gradient-text">great together.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            I&apos;m actively looking for new opportunities at product-driven
            companies — especially international teams where I can contribute
            with React, TypeScript, and AI-augmented development.
          </p>

          {/* CTA Button */}
          <a
            href="mailto:suzy0197@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-white bg-purple-700 hover:bg-purple-600 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/50 hover:-translate-y-1 active:translate-y-0 mb-16"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Say Hello
          </a>

          {/* Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center gap-3 px-5 py-3 bg-[#0f0f1a] border border-[#1e1e36] hover:border-purple-700/50 rounded-xl transition-all duration-300 hover:bg-[#16162a] hover:-translate-y-0.5"
              >
                <span className="text-gray-500 group-hover:text-purple-400 transition-colors">
                  {link.icon}
                </span>
                <div className="text-left">
                  <p className="text-xs text-gray-600">{link.label}</p>
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
