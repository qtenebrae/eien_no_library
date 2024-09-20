'use client';

import { cn } from '@/lib/utils';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export function Footer({ className }: FooterProps) {
	return <footer className={cn(className)}>Footer</footer>;
}
