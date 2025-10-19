import { klineChartDarkStyle, klineChartLightStyle } from '@/components/custom/chart/klinechart/klinechart-style'
import { useTheme } from '@/components/custom/providers/theme-provider'
import { dispose, init, type Chart, type Nullable } from 'klinecharts'
import { memo, useEffect, useRef } from 'react'
import './kline-style-overwrite.css'

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
			return currentChart.current?.setStyles(klineChartLightStyle)
		}
		currentChart.current?.setStyles(klineChartDarkStyle)
	}, [theme])

	useEffect(() => {
		const handleResize = () => {
			currentChart.current?.resize()
		}
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<div className="flex p-3 rounded-lg border bg-[#f8f8f8] dark:bg-[#161616] font-mono">
			<div className="w-full h-[500px] relative">
				<div id="klinecharts-viewer" className="w-full absolute inset-0" />
			</div>
		</div>
	)
}

export default memo(KlinechartsViewer)
