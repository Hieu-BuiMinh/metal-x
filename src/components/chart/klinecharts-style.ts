import type { DeepPartial, Styles } from 'klinecharts'

export const klineChartsLightStyle: DeepPartial<Styles> = {
	grid: {
		show: true,
		horizontal: {
			color: 'oklch(0.922 0 0)',
		},
		vertical: {
			color: 'oklch(0.922 0 0)',
		},
	},
	xAxis: {
		axisLine: {
			color: 'oklch(0.922 0 0)',
		},
		tickLine: {
			color: 'oklch(0.922 0 0)',
		},
	},
	yAxis: {
		axisLine: {
			color: 'oklch(0.922 0 0)',
		},
		tickLine: {
			color: 'oklch(0.922 0 0)',
		},
	},
}

export const klineChartsDarkStyle: DeepPartial<Styles> = {
	grid: {
		horizontal: {
			color: 'oklch(1 0 0 / 10%)',
		},
		vertical: {
			color: 'oklch(1 0 0 / 10%)',
		},
	},
	xAxis: {
		axisLine: {
			color: 'oklch(1 0 0 / 10%)',
		},
		tickLine: {
			color: 'oklch(1 0 0 / 10%)',
		},
	},
	yAxis: {
		axisLine: {
			color: 'oklch(1 0 0 / 10%)',
		},
		tickLine: {
			color: 'oklch(1 0 0 / 10%)',
		},
	},
}
