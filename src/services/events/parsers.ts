import { EventCard } from "./models";

export const toEventModelList = (eventResponse): EventCard[] => {
  return eventResponse.map(rawEvent => ({
    _id: rawEvent.id,
    name: rawEvent.name,
    description: rawEvent.description,
    place: rawEvent.place,
    datetime: rawEvent.date,
    image: rawEvent.image,
    sport: rawEvent.sport
  }));
};
