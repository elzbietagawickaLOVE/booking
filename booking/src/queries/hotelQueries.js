import { gql } from '@apollo/client';

export const ALL_HOTELS = gql`
    query {
        allHotels {
            name
            id
            description
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
    mutation createHotel($name: String!, $address: String!, $locationUrl: String!, $description: String!) {
        addHotel(
            name: $name,
            address: $address,
            locationUrl: $locationUrl,
            description: $description
        ) {
            name
            address
            locationUrl
            description
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