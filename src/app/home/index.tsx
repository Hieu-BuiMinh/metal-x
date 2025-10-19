import KlinechartsViewer from '@/components/chart/klinecharts-viewer'
import { ModeToggle } from '@/components/custom/theme/mode-toggle'


function HomePage() {
	

	return (
		<div className='p-5'>
			<ModeToggle />
			<KlinechartsViewer />
		</div>
	)
}

export default HomePage
