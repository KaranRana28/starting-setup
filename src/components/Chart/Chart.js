import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {

    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaxValue = Math.max(...dataPointsValues)

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} label={dataPoint.label} max={totalMaxValue} />)}
        </div>
    );
}

export default Chart;