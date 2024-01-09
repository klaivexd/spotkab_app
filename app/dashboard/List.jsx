import Image from "next/image"
import Link from "next/link"

async function getLists() {
    const res = await fetch('http://localhost:4000/Lists', {
        next: {
            revalidate: 0
        }
    })
    return res.json()
}

export default async function List() {
    const lists = await getLists()
  return (
    <>
        {lists.map((list) => (
            <Link href={`/dashboard/${list.category}`}>
            <div key={list.id} className="flex items-center m-5 mt-5 space-x-4 cursor-pointer hover:bg-slate-100 hover:scale-105 transition
            transform duration-200 ease-out">
                <div className="relative h-16 w-16 border-2 rounded-lg bg-slate-300">
                <Image
                    src={list.img}
                    alt={list.category}
                    layout="fill"
                />
                </div>

                <div>
                    <h2 className="text-slate-950 font-bold">{list.category}</h2>
                </div>
            </div>
            </Link>
        ))}
        {lists.length === 0 && (
            <div>No Categories</div>
        )}
    </>
  )
}