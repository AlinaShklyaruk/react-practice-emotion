import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import { formatEventStart, formatEventDuration } from 'utils';
import { iconSize } from "constants";
import { Card, EventTitle, Info, Chip } from './EventCard.styled';

export const EventCard = ({ name, location, speaker, type, start, end }) => {
  const formattedStart = formatEventStart(start);
  const eventDuration = formatEventDuration(start, end);
  return <Card>
    <EventTitle>{name}</EventTitle>
    <Info>
      <FaMapMarkerAlt size={iconSize.sm} />
      {location}
    </Info>
    <Info>
      <FaUserAlt size={iconSize.sm} />
      {speaker}
    </Info>
    <Info>
      <FaCalendarAlt size={iconSize.sm} />
      {formattedStart}
    </Info>
    <Info>
      <FaClock size={iconSize.sm} />
      {eventDuration}
    </Info>
    <Chip eventType={type}>{type}</Chip>
  </Card>;
};

EventCard.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
};