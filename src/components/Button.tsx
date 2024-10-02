type Props = {
  href: string;
  icon: React.ReactNode;
  text?: string;
};
export function Button(props: Props) {
  return (
    <button className="intro-link">
      <a href={props.href} target="_blank">
        {props.icon}
        {props.text}
      </a>
    </button>
  );
}
