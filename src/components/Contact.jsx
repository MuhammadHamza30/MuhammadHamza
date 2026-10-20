import { useState, useEffect, useRef } from "react";
import {
  FiArrowUpRight,
  FiCopy,
  FiCheck,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { profile } from "../data/profile";
import { External } from "./Shared";
export default function Contact() {
  const [copied, setCopied] = useState(false),
    [copyError, setCopyError] = useState(false),
    [draftOpened, setDraftOpened] = useState(false),
    [subject, setSubject] = useState("A project collaboration"),
    [message, setMessage] = useState("");
  const timerRef = useRef();
  useEffect(() => () => clearTimeout(timerRef.current), []);
  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setCopyError(false);
      timerRef.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopyError(true);
    }
  }
  return (
    <section className="section contact-section" id="contact">
      <div>
        <span className="eyebrow">06 / Let’s collaborate</span>
        <h2>
          Have something
          <br />
          in mind<span>?</span>
        </h2>
        <p>Let’s turn your next idea into an interface people enjoy using.</p>
        <a className="email-link" href={`mailto:${profile.email}`}>
          {profile.email} <FiArrowUpRight />
        </a>
        <button className="copy-button" onClick={copy}>
          {copied ? <FiCheck /> : <FiCopy />}
          {copied ? "Email copied" : "Copy email"}
        </button>
        {copyError && (
          <p role="status">
            Select the email address above to copy it, or use the email link.
          </p>
        )}
        <div className="contact-socials">
          <External href={`https://github.com/${profile.github}`}>
            <FiGithub /> GitHub
          </External>
          <External href={profile.linkedin}>
            <FiLinkedin /> LinkedIn
          </External>
          <a href={`tel:${profile.phone}`}>{profile.phone}</a>
        </div>
      </div>
      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          setDraftOpened(true);
          window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        }}
      >
        <h3>
          Start a conversation <FiArrowUpRight />
        </h3>
        <label>
          What are you thinking about?
          <select value={subject} onChange={(e) => setSubject(e.target.value)}>
            <option>A project collaboration</option>
            <option>A front-end opportunity</option>
            <option>Let’s connect</option>
          </select>
        </label>
        <label>
          A little about your idea
          <textarea
            required
            minLength={10}
            maxLength={3000}
            rows="4"
            placeholder="Tell me about the project, your goals, and how I can help…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button className="button primary" type="submit">
          Continue in your email app <FiMail />
        </button>
        {draftOpened && (
          <p className="draft-feedback" role="status">
            Email draft requested. If your app did not open, email me directly
            using the address above.
          </p>
        )}
        <small>
          Opens a draft in your email app. Nothing is sent from this website.
        </small>
      </form>
    </section>
  );
}
