import { gql } from '@apollo/client';

export const ALL_HOTELS = gql`
    query {
        allHotels {
            name
            id
            description
            address
            ratings
        }
    }
`;

export const LOGIN = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password)  {
            value
        }
    }
`;

export const ME = gql`
    query {
        me {
            username
            email
        }
    }
`;

export const CREATE_HOTEL = gql`
    mutation addHotel($name: String!, $address: String!, $locationUrl: String!, $description: String!, $rooms: [RoomInput], $facilities: [FacilityInput]) {
        addHotel(
            name: $name,
            address: $address,
            locationUrl: $locationUrl,
            description: $description,
            rooms: $rooms,
            facilities: $facilities
        ) {
            name
            address
            locationUrl
            description
            rooms {
                size
                dailyPrice
                numberOfGuests {
                    adults
                    children
                    infants
                }
            }
            facilities {
                name
                description
                icon
            }
        }
    }
`;

export const CREATE_CONVENIENCE = gql`
    mutation addFacility($name: String!, $description: String!, $icon: String!) {
        addFacility(
            name: $name,
            description: $description,
            icon: $icon
        ) {
            name
            description
            icon
        }
    }
`;