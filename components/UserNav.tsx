'use client';

import Link from 'next/link';
import { navItems } from './DashboardNav';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuGroup, DropdownMenuSeparator, DropdownMenuItem } from './ui/dropdown-menu';
import { DoorClosed } from 'lucide-react';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs';

export function UserNav({ name, email, image }: { name: string; email: string; image: string }) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="relative h-10 w-10 rounded-full">
					<Avatar className="h-10 w-10 rounded-full">
						<AvatarImage src={image} alt="@shadcn" />
						<AvatarFallback>MNA</AvatarFallback>
					</Avatar>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="end" forceMount>
				<DropdownMenuLabel>
					<div className="flex flex-col space-y-1">
						<p className="text-sm font-medium leading-none">{name}</p>
						<p className="text-xs leading-none text-muted-foreground ">{email}</p>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					{navItems.map((item, index) => (
						<DropdownMenuItem asChild key={index}>
							<Link href={item.href} className="w-full flex justify-between items-center cursor-pointer">
								{item.name}
								<span>
									<item.icon className="h-4 w-4" />
								</span>
							</Link>
						</DropdownMenuItem>
					))}
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem className="w-full flex justify-between items-center cursor-pointer" asChild>
					<LogoutLink>
						Logout
						<span>
							<DoorClosed className="w-4 h-4" />
						</span>
					</LogoutLink>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
