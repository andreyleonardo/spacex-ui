import gql from 'graphql-tag';

export default gql`{
  launches {
    mission_name
    launch_year
  }
}
`
