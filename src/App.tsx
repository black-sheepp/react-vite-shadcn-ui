// Source:

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

function App() {
	return (
		<main className='flex flex-col items-center justify-center h-screen'>
			<SidebarProvider>
				<AppSidebar />
				<main>
					<SidebarTrigger />
					{/* {children} */}
				</main>
			</SidebarProvider>
		</main>
	);
}

export default App;
