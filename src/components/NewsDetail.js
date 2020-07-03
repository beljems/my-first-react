import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import './Button.scss';

const NewsDetail = () => {
  const { title } = useParams();
  const history = useHistory();

  const handleClick = () => {
    history.push('/news');
  }

  return(
    <div>
        {title}
        <button className="button" onClick={() => handleClick()}>Back</button>
    </div>
  )
}

export default NewsDetail;
