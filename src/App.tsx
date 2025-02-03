// Source:

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

import { ReactNode } from 'react';

interface AppProps {
  children: ReactNode;
}

function App({ children }: AppProps) {
	return (
		<main className='flex flex-col items-center justify-center h-screen'>
			<SidebarProvider>
				<AppSidebar />
				<main>
					{/* <SidebarTrigger /> */}
					{children}
				</main>
			</SidebarProvider>
		</main>
	);
}

export default App;
