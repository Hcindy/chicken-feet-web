import { Component, OnInit } from "@angular/core"
import { WaitingService } from "../waiting.service"
import GroupParticipant from "./GroupParticipant"
import Participant from "./Participant"

@Component({
  selector: "app-game-participant",
  templateUrl: "./game-participant.page.html",
  styleUrls: ["./game-participant.page.scss"],
})
export class GameParticipantPage implements OnInit {
  groupParticipants: Array<GroupParticipant> = []

  constructor(private waitingService: WaitingService) { }

  ngOnInit() {
    const participants: Array<Participant> = [{
      username: "李一",
      joinTime: new Date().getMilliseconds()
    },{
      username: "李二",
      joinTime: new Date().getMilliseconds()
    },{
      username: "王一",
      joinTime: new Date().getMilliseconds()
    },{
      username: "li yi",
      joinTime: new Date().getMilliseconds()
    }]

    for (const participant of participants) {
      const splits = participant.username.split(" ")
      let firstName = ""
      if (splits.length === 1) {
        firstName = splits[0].substring(0, 1)
      } else {
        firstName = splits[0]
      }

      const target = this.groupParticipants.filter((value) => value.firstName === firstName)
      if (target.length) {
        target[0].participants.push(participant)
      } else {
        this.groupParticipants.push({
          firstName,
          participants: [participant]
        })
      }
    }
  }

}
