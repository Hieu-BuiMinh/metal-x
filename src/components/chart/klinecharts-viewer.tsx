import { klineChartsDarkStyle, klineChartsLightStyle } from '@/components/chart/klinecharts-style'
import { dispose, init, type Chart, type Nullable } from 'klinecharts'
import { useEffect, useRef } from 'react'
import './kline-style-overwrite.css'
import { useTheme } from '@/components/custom/providers/theme-provider'

function KlinechartsViewer() {
	const { theme } = useTheme()
	const currentChart = useRef<Nullable<Chart>>(null)

	useEffect(() => {
		const chart = init('klinecharts-viewer')
		currentChart.current = chart

		chart?.createIndicator('MA', false, { id: 'candle_pane' })
		chart?.createIndicator('VOL')

		chart?.setSymbol({ ticker: 'TestSymbol' })
		chart?.setPeriod({ span: 1, type: 'day' })
		chart?.setDataLoader({
			getBars: ({ callback }) => {
				fetch('https://klinecharts.com/datas/kline.json')
					.then((res) => res.json())
					.then((dataList) => {
						// [{ timestamp: 1517932800000, open: 7310.1, high: 8499.9, low: 6810, close: 8165.4, volume: 148807 }]
						callback(dataList)
					})
			},
		})

		return () => {
			dispose('chart')
		}
	}, [])

	useEffect(() => {
		if (!currentChart.current) return
		if (theme === 'light') {
			return currentChart.current?.setStyles(klineChartsLightStyle)
		}
        currentChart.current?.setStyles(klineChartsDarkStyle)
	}, [theme])

	return (
		<div className="w-full p-3 rounded-lg border bg-[#f8f8f8] dark:bg-[#161616]">
			<div id="klinecharts-viewer" className="w-full h-[500px]" />
		</div>
	)
}

export default KlinechartsViewer
