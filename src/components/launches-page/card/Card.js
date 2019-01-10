import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';
import './Card.scss';

function Card({ data, onClick }) {
  return (
    <div className="Card row between-xs middle-xs" onClick={onClick}>
      <div className="col-xs">
        <p><span className="Card__mission_name">Mission: {data.mission_name}</span></p>
        <p><span className="Card__launch_date">Date: {moment(data.launch_date_local).format('DD/MM/YYYY HH:mm')}</span></p>
      </div>
      <div className={classnames('col-xs Card__launch_status', { 'Card__launch_status--failed': !data.launch_success })}>
        <p>{data.launch_success ? 'Success' : 'Failed'}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    mission_name: PropTypes.string,
    launch_date_local: PropTypes.string
  }).isRequired
}

export default Card;
