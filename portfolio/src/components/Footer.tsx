import { profile } from "@/lib/content";

const Footer = () => (
  <footer className="border-t border-border">
    <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
      <p className="mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
        © {new Date().getFullYear()} {profile.name} — {profile.location}
      </p>
      <div className="flex items-center gap-6">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline text-[13px] text-muted-foreground hover:text-foreground"
        >
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline text-[13px] text-muted-foreground hover:text-foreground"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="link-underline text-[13px] text-muted-foreground hover:text-foreground"
        >
          Email
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
