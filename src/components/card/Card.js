import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Card.scss';

function Card({config}) {
  return (
    <section className="Container">
        <div className="Container__Heading">
            <h2>{config.heading}</h2>
            <ArrowForwardIcon sx={{ color: "#308271" }} />
        </div>
        <div className="Container__Description">
            {config.description}
        </div>
    </section>
  );
}

export default Card;
