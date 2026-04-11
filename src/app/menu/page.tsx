import type { Metadata } from 'next';
import MenuClient from "./client";

export const metadata: Metadata = {
  title: 'Menu',
  description: 'Explore our authentic breakfast, lunch, and dinner options.',
};

export default function MenuPage() {
  return <MenuClient />;
}