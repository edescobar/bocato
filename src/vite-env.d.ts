/// <reference types="vite/client" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace JSX {
  interface IntrinsicElements {
    div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    section: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    h1: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h2: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h3: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h4: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    p: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
    span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
    nav: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    footer: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
  }
}
