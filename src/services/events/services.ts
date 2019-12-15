import { EventCard } from "./models";
import { BASE_URL, toJson } from "../base";
import { toEventModelList } from "./parsers";

export const EventCards = {
    getAll: (): Promise<EventCard[]> => fetch(`${BASE_URL}events`).then(toJson).then(toEventModelList)
}

