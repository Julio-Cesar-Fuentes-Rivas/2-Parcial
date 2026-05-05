import './HeaderTitle.css';

interface HeaderTitleProps {
  number: number;
  title: string;
}

export const HeaderTitle = ({ number, title }: HeaderTitleProps) => {
  return (
    <div className="header-title">
      <div className="circle-number">{number}</div>
      <span className="title-text">{title}</span>
    </div>
  );
};