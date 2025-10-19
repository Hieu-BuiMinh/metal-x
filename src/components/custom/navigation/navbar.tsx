import { ModeToggle } from "@/components/custom/theme/mode-toggle"

function Navbar() {
	return (
		<div className="h-16 border-b sticky top-0 bg-background z-40">
			<ModeToggle />
		</div>
	)
}

export default Navbar
