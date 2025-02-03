import * as React from "react";
import {
    Bot,
    SquareLibrary,
    SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";

// This is sample data.
const data = {
	user: {
		name: "Shivam",
		email: "shivam@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	teams: [
		{
			name: "UltraVox AI Voice Agent",
			logo: Bot,
			plan: "Enterprise",
		},
		// {
		// 	name: "Acme Corp.",
		// 	logo: AudioWaveform,
		// 	plan: "Startup",
		// },
	],
	navMain: [
		{
			title: "Platform",
			url: "#",
			icon: SquareTerminal,
			isActive: true,
			items: [
				{
					title: "Assistants",
					url: "#",
				},
				{
					title: "Phone Numbers",
					url: "#",
				},
				{
					title: "Files",
					url: "#",
				},
				{
					title: "Tools",
					url: "#",
				},
				{
					title: "Blocks",
					url: "#",
				},
				{
					title: "Squads",
					url: "#",
				},
			],
		},
	],
	callLogs: [
		{
			title: "Logs",
			url: "#",
			icon: SquareTerminal,
			isActive: true,
			items: [
				{
					title: "Calls",
					url: "#",
				},
				{
					title: "API Requests",
					url: "#",
				},
				{
					title: "Webhooks",
					url: "#",
				},
			],
		},
	],
	projects: [
		{
			name: "Voice Library",
			url: "#",
			icon: SquareLibrary ,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible='icon' {...props}>
			<SidebarHeader>
				<TeamSwitcher teams={data.teams} />
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavProjects projects={data.projects} />
                <NavMain items={data.callLogs} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
