interface Props {
  title: string;
  subtitle: string;
}

export const FormTitle = ({ title, subtitle }: Props) => (
  <div className="space-y-[9px] xl:space-y-[11px]">
    <h1 className="heading">{title}</h1>
    <p className="body-l text-gray">{subtitle}</p>
  </div>
);
