import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => (
    <section class="statistics">
        <h2 class="title">{title}</h2>

        <ul class="stat-list">
            {stats.map(({id, label, percentage}) => (
            (<li class="item" key={id}>
                <span class="label">{label}</span>
                <span class="percentage">{percentage}</span>
            </li>)
            ))}
        </ul>
    </section>
);
export default Statistics;

Statistics.defaultProps = {
    title: "Upload stats"
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })).isRequired

}