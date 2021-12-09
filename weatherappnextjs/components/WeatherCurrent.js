import { useSelector, useDispatch } from "react-redux"
import { DropDowm } from "./DropDown"
import { ForecastHourItem } from "./ForecastHourItem"
export const WeatherCurrent = () => {
    const forecastDaySelect = useSelector(state => state.history.forecastDaySelect)
    return (
        <section className={'forecast-hour'}>
            <div className={'forecast-hour__header'}>
                <DropDowm />
            </div>
            <div className={'forecast-hour__main'}>
                {forecastDaySelect.hour.map((item) => {
                    return <ForecastHourItem item={item} key={item.time} />
                })}
            </div>
        </section>)
}
