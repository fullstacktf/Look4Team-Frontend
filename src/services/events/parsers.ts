import { EventCard } from "./models";

export const toEventModelList = (eventResponse): EventCard[] => {
    return eventResponse.map(rawEvent => ({
        name: rawEvent.name,
        _id: rawEvent.id,
        description: rawEvent.description,
        place: rawEvent.place,
        datetime: rawEvent.date,
        image: rawEvent.image,
        sport: rawEvent.sport,
    }))
}