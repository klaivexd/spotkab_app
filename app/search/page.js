import Footer from '@/components/Footer'
import HeaderDashboard from '@/components/HeaderDashboard'
import React from 'react'
import { promises as fs } from 'fs';

export default async function page() {
  const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
  const data = JSON.parse(file);
  
  return (
    <>
    <HeaderDashboard />
    <main className="flex">
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
      <p>{data.description}</p>
    </div>
    </main>
    </>
  );
}