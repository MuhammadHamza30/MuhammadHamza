import { useEffect, useState } from "react";
import { FiLinkedin, FiArrowUpRight } from "react-icons/fi";
import { profile } from "../data/profile";
import { linkedinEmbed } from "../lib/integrations";
import { External, SectionHeading } from "./Shared";
export default function LinkedInPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    fetch("/linkedin-posts.json", { signal: controller.signal })
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then((data) =>
        setPosts(
          (Array.isArray(data.posts) ? data.posts : [])
            .filter((p) => linkedinEmbed(p.url))
            .slice(0, 6),
        ),
      )
      .catch(() => {});
    return () => controller.abort();
  }, []);
  return (
    <section className="section" id="writing">
      <SectionHeading label="05 / Learning in public" title="Beyond the code.">
        <External
          href={`${profile.linkedin}/recent-activity/all/`}
          className="text-link"
        >
          All LinkedIn posts <FiArrowUpRight />
        </External>
      </SectionHeading>
      <p className="integration-note">
        {posts.length
          ? "Selected LinkedIn posts · manually curated links, displayed through official embeds."
          : "LinkedIn activity · open my profile to read the latest posts."}
      </p>
      {posts.length ? (
        <div className="linkedin-grid">
          {posts.map((post) => (
            <article className="linkedin-embed" key={post.url}>
              <iframe
                src={linkedinEmbed(post.url)}
                title={post.title || "Muhammad Hamza’s LinkedIn post"}
                height="560"
                loading="lazy"
              />
              <External href={post.url} className="text-link">
                Read on LinkedIn <FiArrowUpRight />
              </External>
            </article>
          ))}
        </div>
      ) : (
        <div className="linkedin-feature">
          <div className="linkedin-mark">
            <FiLinkedin />
          </div>
          <div>
            <span className="eyebrow">Notes, progress & perspectives</span>
            <h3>
              What I’m building.
              <br />
              What I’m learning.
            </h3>
            <p>
              Follow my development journey, project updates, and reflections on
              AI-assisted software development on LinkedIn.
            </p>
            <External
              href={`${profile.linkedin}/recent-activity/all/`}
              className="button primary"
            >
              View my LinkedIn posts <FiArrowUpRight />
            </External>
          </div>
          <div className="writing-topics">
            <span>01 / Front-end development</span>
            <span>02 / AI & developer tools</span>
            <span>03 / Projects & learning</span>
          </div>
        </div>
      )}
    </section>
  );
}
