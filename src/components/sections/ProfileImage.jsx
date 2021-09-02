import React from 'react';

import { appData as data } from '../../appData';

const ProfileImage = () => {
  return (
    <div style={{ backgroundColor: '#bcbcbc' }} className={`h-96 w-full overflow-hidden bg`}>
      <img className={`object-cover w-full h-full mx-auto`} src={data.image} alt='Utibeabasi Umanah' />
    </div>
  );
};

export default ProfileImage;
