import React from "react";

import { getAdoptionListData } from "../Lib/dataLib";
import { PetFinderAnimalProfileResponse, PetFinderResponse } from "../Types/Types";
import { AdoptionProfile } from "./AdoptionProfile";

const { useEffect, useState } = React;

export const AdoptionProfileList = () => {
  const [adoptionList, setAdoptionList] = useState<PetFinderResponse | null>(null);
  const [currentAdoptionProfile, setCurrentAdoptionProfile] = useState<PetFinderAnimalProfileResponse | null>(null);

  useEffect(() => {
    const petfinderDataResponse = getAdoptionListData();
    setAdoptionList(petfinderDataResponse);
    if (adoptionList) setCurrentAdoptionProfile(adoptionList.animals[0]);
  }, [adoptionList]);

  const handleSwipe = () => {

  };

  return (
    <>
      {currentAdoptionProfile &&
        <>
          <AdoptionProfile profileData={currentAdoptionProfile} />
        </>
      }
    </>
  );
};