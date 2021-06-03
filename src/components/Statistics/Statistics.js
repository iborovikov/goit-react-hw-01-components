import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function getRandom(min, max){
  return Math.ceil(Math.random() * (max - min) + min)
}

const Statistics = ({ title, stats }) => (
    <section className={ styles.statistics }>
        <h2 className={ styles.title }>{title}</h2>
        <ul className={ styles.stat__list }>
              {stats.map(({ id, label, percentage }) => {
                const randomColor = `rgb(${getRandom(0, 240)}, ${getRandom(0, 240)}, ${getRandom(0, 240)})`
                return (
                (<li className={styles.item} key={id} style={{ backgroundColor: randomColor }}>
                <span className={ styles.label }>{label}</span>
                <span className={ styles.percentage }>{percentage}%</span>
            </li>)
            )
            })}
        </ul>
    </section>
);

export default Statistics;

Statistics.defaultProps = {
    title: "Upload stats"
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })).isRequired
};