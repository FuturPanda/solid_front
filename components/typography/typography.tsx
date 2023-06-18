export function TypographyH1({ text }: { text: any }) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {text}
    </h1>
  );
}
export function TypographyH2({ text }: { text: any }) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      {text}
    </h2>
  );
}
export function TypographyH3({ text }: { text: any }) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {text}
    </h3>
  );
}
export function TypographyH4({ text }: { text: any }) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{text}</h4>
  );
}
export function TypographyP({ text }: { text: any }) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{text}</p>;
}
export function TypographyBlockquote({ text }: { text: any }) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{text}</blockquote>
  );
}
export function TypographyTable({ text }: { text: any }) {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full">
        <thead>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              {text}
            </th>
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              {text}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              {text}
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              {text}
            </td>
          </tr>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              {text}
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              {text}
            </td>
          </tr>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              {text}
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              {text}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export function TypographyList({ text }: { text: any }) {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      <li>{text}</li>
    </ul>
  );
}
export function TypographyInlineCode({ text }: { text: any }) {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {text}
    </code>
  );
}
export function TypographyLead({ text }: { text: any }) {
  return <p className="text-xl text-muted-foreground">{text}</p>;
}
export function TypographyLarge({ text }: { text: any }) {
  return <div className="text-lg font-semibold">{text}</div>;
}
export function TypographySmall({ text }: { text: any }) {
  return <small className="text-sm font-medium leading-none">{text}</small>;
}
export function TypographyMuted({ text }: { text: any }) {
  return <p className="text-sm text-muted-foreground">{text}</p>;
}
