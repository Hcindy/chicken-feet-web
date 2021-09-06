import Participant from "./Participant"

export default interface GroupParticipant {
  firstName: string;
  participants: Array<Participant>;
}
