import { useState } from "react";
import { FiCpu, FiTerminal, FiCheck } from "react-icons/fi";
const workflows = {
  interface: {
    label: "Build an interface",
    brief: "Turn a product brief into a responsive React interface.",
    steps: [
      [
        "01 / Define",
        "Clarify the users, acceptance criteria, data, and edge cases.",
      ],
      [
        "02 / Collaborate",
        "Use ChatGPT or Claude to explore component structure; Copilot helps with implementation.",
      ],
      [
        "03 / Verify",
        "Review the diff, check accessibility and responsive behavior, then test the integration.",
      ],
      [
        "04 / Deliver",
        "Refine the interface and document the handoff. I make the final decisions.",
      ],
    ],
  },
  debug: {
    label: "Debug a workflow",
    brief: "Find and resolve a difficult UI or API integration issue.",
    steps: [
      [
        "01 / Reproduce",
        "Capture the expected behavior, actual result, and a minimal reproduction.",
      ],
      [
        "02 / Investigate",
        "Give the assistant relevant, sanitized code and compare possible root causes.",
      ],
      [
        "03 / Validate",
        "Inspect the proposed fix, verify API contracts, and check related user flows.",
      ],
      [
        "04 / Review",
        "Keep a focused change and explain why it fixes the issue.",
      ],
    ],
  },
  refactor: {
    label: "Refactor a component",
    brief: "Make a complex component easier to maintain.",
    steps: [
      [
        "01 / Understand",
        "Map the current behavior, state, and component responsibilities.",
      ],
      [
        "02 / Plan",
        "Ask an assistant to suggest smaller components and evaluate the tradeoffs.",
      ],
      [
        "03 / Implement",
        "Review small changes while preserving behavior and public interfaces.",
      ],
      [
        "04 / Check",
        "Compare user flows before and after, review the diff, and document the result.",
      ],
    ],
  },
};
export default function AIWorkflow() {
  const [selected, setSelected] = useState("interface");
  const current = workflows[selected];
  return (
    <section className="section ai-section" id="ai">
      <div className="ai-intro">
        <span className="eyebrow">02 / AI in my workflow</span>
        <h2>
          AI accelerates.
          <br />
          <span>I steer.</span>
        </h2>
        <p>
          I use AI coding assistants and agent-style workflows to break down
          problems, explore solutions, and refine code. My role stays hands-on:
          provide context, review changes, and validate the result.
        </p>
        <div className="tool-list">
          {["ChatGPT", "GitHub Copilot", "Claude AI", "DeepSeek"].map((x) => (
            <span key={x}>
              <FiCpu />
              {x}
            </span>
          ))}
        </div>
        <div className="human-note">
          <FiCheck />
          <span>Human judgment at every important step.</span>
        </div>
      </div>
      <div className="workflow">
        <div className="terminal-bar">
          <span>
            <FiTerminal /> workflow.explorer
          </span>
          <small>Illustrative process</small>
        </div>
        <div
          className="workflow-tabs"
          role="group"
          aria-label="Explore an AI-assisted workflow"
        >
          {Object.entries(workflows).map(([key, item]) => (
            <button
              key={key}
              aria-pressed={selected === key}
              className={selected === key ? "active" : ""}
              onClick={() => setSelected(key)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="workflow-body" aria-live="polite">
          <p className="brief">
            <span>brief &gt;</span> {current.brief}
          </p>
          {current.steps.map(([title, desc]) => (
            <div className="workflow-step" key={title}>
              <span className="step-dot" />
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
              <FiCheck />
            </div>
          ))}
          <div className="terminal-footer">
            <span className="status-dot" /> Context → collaboration → review →
            delivery
          </div>
        </div>
      </div>
    </section>
  );
}
