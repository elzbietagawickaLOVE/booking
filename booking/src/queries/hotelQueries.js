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


