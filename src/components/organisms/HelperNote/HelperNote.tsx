import { HeaderTitle } from '../../molecules/HeaderTitle/HeaderTitle';
import { NoteFooter } from '../../molecules/NoteFooter/NoteFooter';
import './HelperNote.css';

interface HelperNoteProps {
  variant: 'active' | 'future' | 'completed';
  number: number;
  title: string;
  ticketId: string;
  description: string;
  date: string;
}

export const HelperNote = ({ variant, number, title, ticketId, description, date }: HelperNoteProps) => {
  return (
    <div className="helper-note">
      <div className={`note-header ${variant}`}>
        <HeaderTitle number={number} title={title} />
        <div className="ticket-info">
          <span>{ticketId}</span>
          <span className="ticket-icon">◆</span> {/* Ícono representativo */}
        </div>
      </div>
      <div className="note-body">
        <p className="description">{description}</p>
        <hr className="divider" />
        <NoteFooter date={date} />
      </div>
    </div>
  );
};