import {ChangeEvent, useState} from 'react';
import {format, utcToZonedTime} from 'date-fns-tz';
import "./unix-converter.scss"
import {Divider, Input} from 'antd';


const UnixConverter = () => {
	const [unixDate, setUnixDate] = useState<string>('');
	const [localDate, setLocalDate] = useState<string | null>(null);
	const [customTimeZoneDate, setCustomTimeZoneDate] = useState<string | null>(null);
	
	const handleUnixDateChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newUnixDate = event.target.value;
		setUnixDate(newUnixDate);
		
		// Предполагаем, что unixDate представляет собой количество секунд с 1 января 1970 года
		const dateObject = new Date(parseInt(newUnixDate) * 1000);
		
		// Получаем локальную дату в формате "день месяц год"
		setLocalDate(format(dateObject, 'dd MMM yyyy'));
		
		// Устанавливаем произвольный часовой пояс (например, 'Europe/Berlin')
		const customTimeZone = 'Europe/Berlin';
		const customTimeZoneDate = format(
			utcToZonedTime(dateObject, customTimeZone),
			'dd MMM yyyy HH:mm:ssXXX',
			{timeZone: customTimeZone}
		);
		setCustomTimeZoneDate(customTimeZoneDate);
	};
	
	return (
		<div className="container">
			<label className="label">Введите unix-дату: </label>
			<Input
				placeholder={"Введите unix-дату"}
				value={unixDate}
				onChange={handleUnixDateChange}
				className="input"
			/>
			<Divider />
			<table className="table">
				<thead>
				<tr>
					<th>Локальное время</th>
					<th>Произвольный часовой пояс</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>{localDate}</td>
					<td>{customTimeZoneDate}</td>
				</tr>
				</tbody>
			</table>
		</div>
	);
}

export default UnixConverter;
