export default function intro({ profile }) {
  const { intro, contact } = profile;
  const links = [
    contact.email && `[Email](mailto:${contact.email})`,
    contact.linkedin && `[LinkedIn](${contact.linkedin})`,
    contact.blog && `[Blog](${contact.blog})`,
  ].filter(Boolean);

  return [
    `## ${intro.greeting}`,
    ...intro.paragraphs,
    intro.focus?.length ? `🔭 **Now** · ${intro.focus.join(" · ")}` : null,
    links.length ? `📫 ${links.join(" · ")}` : null,
  ]
    .filter(Boolean)
    .join("\n\n");
}
