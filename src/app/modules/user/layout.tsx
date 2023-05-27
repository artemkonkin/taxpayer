'use client';

import Row from '@/app/components/grid/Row';
import Col from '@/app/components/grid/Col';
import Link from 'next/link';

export default function ModulesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex w-full flex-col bg-slate-50 p-8 space-y-8'>
      {children}
    </div>
  );
}