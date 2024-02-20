import { gql } from '@apollo/client';

export const ALL_HOTELS = gql`
    query {
        allHotels {
            name
            id
        }
    }
`;