export type PetFinderResponse = {
  animals: PetFinderAnimalProfileResponse[],
  pagination: {
    count_per_page: number,
    total_count: number,
    current_page: number,
    total_pages: number,
    _links: {
      previous: {
        href: string
      },
      next: {
        href: string
      }
    }
  }
};

export type PetFinderAnimalProfileResponse = {
  id: number,
  organization_id: string,
  url: string,
  type: string,
  species: string,
  breeds: {
    primary?: string,
    secondary?: string | null,
    mixed: boolean,
    unknown: boolean
  },
  colors: {
    primary?: string | null,
    secondary?: string | null,
    tertiary?: string | null
  }
  age: string,
  gender: string,
  size: string,
  coat?: string | null,
  attributes: {
    spayed_neutered?: boolean | null,
    house_trained?: boolean | null,
    declawed?: boolean | null,
    special_needs?: boolean | null,
    shots_current?: boolean | null
  },
  environment: {
    children: boolean,
    dogs: boolean,
    cats: boolean
  },
  tags: string[],
  name: string,
  description: string,
  photos: Photo[],
  videos: Video[],
  status: string,
  published_at: string,
  contact: {
    email: string,
    phone: string,
    address: {
      address1: string,
      address2: string,
      city: string,
      state: string,
      postcode: string,
      country: string
    }
  },
  _links: {
    self: {
      href: string
    },
    type: {
      href: string
    },
    organization: {
      href: string
    }
  }
};

export type Photo = {
  small: string,
  medium: string,
  large: string,
  full: string
};

export type Video = {
  embed: string
};