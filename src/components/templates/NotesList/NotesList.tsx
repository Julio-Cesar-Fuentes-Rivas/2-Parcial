import { HelperNote } from '../../organisms/HelperNote/HelperNote';
import './NotesList.css';

export const NotesList = () => {
  return (
    <div className="notes-list-container">
      <HelperNote 
        variant="active" 
        number={1} 
        title="Agenda/Topic" 
        ticketId="SAAS-0000" 
        description="Description of what is done here" 
        date="3/8/2020" 
      />
      <HelperNote 
        variant="future" 
        number={1} 
        title="Agenda/Topic" 
        ticketId="SAAS-0000" 
        description="Description of what is done here" 
        date="3/8/2020" 
      />
      <HelperNote 
        variant="completed" 
        number={1} 
        title="Agenda/Topic" 
        ticketId="SAAS-0000" 
        description="Description of what is done here" 
        date="3/8/2020" 
      />
    </div>
  );
};