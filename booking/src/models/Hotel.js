export function Hotel(name, address, locationUrl, description, rooms, facilities) {
    this.name = name
    this.address = address
    this.description = description
    this.rooms = rooms
    this.facilities = facilities
    this.locationUrl = locationUrl
    this.comments = []
    this.ratings = []
}
