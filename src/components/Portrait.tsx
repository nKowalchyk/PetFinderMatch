export const Portrait = ({ pictureUrl }: {
    pictureUrl?: string
}) => {
    return (
        <img src={pictureUrl} />
    );
};