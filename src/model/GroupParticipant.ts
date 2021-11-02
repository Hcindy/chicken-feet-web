import Participant from "./Participant"

export default interface GroupParticipant {
  firstName: string; // 参与者姓
  participants: Array<Participant>; // 同姓的参与者们
}
