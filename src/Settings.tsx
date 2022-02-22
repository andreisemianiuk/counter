import React, { ChangeEvent } from 'react'
import './App.css'

type SettingsType = {
	setStartValue: (num: number) => void
	setMaxValue: (num: number) => void
	className?: string
	startValue: number
	maxValue: number
}

function Settings(props: SettingsType) {
	const { startValue, maxValue, setMaxValue, setStartValue } = props

	const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
		const num = +e.currentTarget.value
		const value = e.currentTarget.dataset.value

		if (value === 'max') {
			setMaxValue(num)
		} else if (value === 'start') {
			setStartValue(num)
		}
	}

	return (
		<div className={props.className ? props.className : 'settings-wrapper'}>
			<div className={'settings-input-wrapper'}>
				<div>max value:
					<input
						className={`settings-input ${maxValue <= startValue ? 'error' : ''}`}
						data-value={'max'}
						type={'number'}
						value={maxValue}
						onChange={changeValue}
					/>
				</div>
			</div>
			<div className={'settings-input-wrapper'}>
				<div>start value:
					<input
						className={`settings-input ${startValue < 0 || startValue >= maxValue ? 'error' : ''}`}
						type={'number'}
						data-value={'start'}
						value={startValue}
						onChange={changeValue}
					/>
				</div>
			</div>
		</div>
	)
}

export default Settings
