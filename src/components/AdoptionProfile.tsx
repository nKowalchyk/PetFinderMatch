import { Portrait } from './Portrait';
import { Description } from './Description';

import { PetFinderAnimalProfileResponse } from '../Types/Types';

export const AdoptionProfile = ({ profileData }: { profileData: PetFinderAnimalProfileResponse }) => {

  return (
    <>
      {profileData && <>
        <Portrait pictureUrl={profileData?.photos[0].full} />
        <Description
          name={profileData.name}
          age={profileData.age}
          breeds={profileData.breeds}
          textDescription={profileData.description}
          location={profileData.contact.address}
        />
      </>}
    </>
  );
};
