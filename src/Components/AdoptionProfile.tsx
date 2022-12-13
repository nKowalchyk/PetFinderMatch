import { PortraitList } from './PortraitList';
import { Description } from './Description';

import { PetFinderAnimalProfileResponse } from '../Types/Types';

export const AdoptionProfile = ({ profileData }: {
  profileData: PetFinderAnimalProfileResponse
}) => {

  return (
    <>
      {profileData && <>
        <PortraitList photos={profileData.photos} />
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
