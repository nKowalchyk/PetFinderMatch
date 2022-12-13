

export const Description = ({ name, age, breeds, textDescription, location }: {
    name: string,
    age: string,
    breeds: {
        primary?: string,
        secondary?: string | null,
        mixed: boolean,
        unknown: boolean
    },
    textDescription: string,
    location: {
        address1: string,
        address2: string,
        city: string,
        state: string,
        postcode: string,
        country: string
    }
}) => {
    return (
        <>
            <h1>{name} {age}</h1>
            <p>{textDescription}</p>
        </>
    );
};