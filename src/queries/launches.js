import gql from 'graphql-tag';

const launchFragment = gql`
  fragment launchFields on Launch {
    flight_number
    mission_name
    launch_success
  }
`;

const launchCardDetails =  gql`{
  launches {
    ...launchFields
    launch_date_local
  }
}
${launchFragment}
`;

const launchDetails =  gql`
  query Launch($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      ...launchFields
      launch_year
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
  ${launchFragment}
`;

export { launchCardDetails, launchDetails };
