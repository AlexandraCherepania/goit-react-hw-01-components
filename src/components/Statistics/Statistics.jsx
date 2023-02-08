// import PropTypes from 'prop-types';
import css from "../Statistics/Statistics.module.css"
import PropTypes from 'prop-types';
import { getRandomHexColor } from "./randomColor"




export const Statistics = ({ title, stats }) => (

    <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>

        <ul className={css.statList}>
            {stats.map(stat => (

                <li className={css.item} key={stat.id} style={{
                    backgroundColor: getRandomHexColor()
                }}>
                    <span className={css.label}>{stat.label}</span>
                    <span className={css.percentage}>{stat.percentage}</span>
                </li>
            ))}

        </ul>
    </section>
)


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape).isRequired,
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
}