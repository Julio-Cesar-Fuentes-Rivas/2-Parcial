import './NoteFooter.css';

interface NoteFooterProps {
  date: string;
}

export const NoteFooter = ({ date }: NoteFooterProps) => {
  return (
    <div className="note-footer">
      <span className="footer-label">Last Updated</span>
      <span className="footer-date">{date}</span>
    </div>
  );
};