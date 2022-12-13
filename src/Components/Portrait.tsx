
import './Portrait.css';

export const Portrait = ({ pictureUrl, name }: {
    pictureUrl?: string,
    name: string
}) => {
    return (
        <div className="portrait-container">
            <img src={pictureUrl} />
            <h1>{name}</h1>
        </div>
    );
};