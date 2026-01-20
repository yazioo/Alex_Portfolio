import { LucideIcon } from 'lucide-react';

export interface FloatingFeature {
    id: string;
    icon: LucideIcon;
    title: string;
    subtitle: string;
    delay?: boolean;
}

export interface User {
    id: string;
    avatar: string;
}