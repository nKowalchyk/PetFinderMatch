import React from "react";

import { Photo } from '../Types/Types'
import { Portrait } from "./Portrait";

import { capitalize } from "../Lib/utilsLib";

const { useEffect, useState } = React;

export const PortraitList = ({ photos }: {
  photos: Photo[]
}) => {

  return (
    <>
      {
        photos.map(photo => {
          return < Portrait pictureUrl={photo.full} name={capitalize("spot")} />
        })
      }
    </>
  );
};