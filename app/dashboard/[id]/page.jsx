import HeaderDashboard from "@/components/HeaderDashboard"
import Image from "next/image";

async function getList(id) {
    const res = await fetch('http://localhost:4000/' + id.toLowerCase(), {
        next: {
            revalidate: 0
        }
    })
    return res.json()
}

export default async function CategoryDetails({params}) {
    const stores = await getList(params.id);
  return (
    <>
        <HeaderDashboard />
        <section className="grid grid-cols-1 sm:grid-cols-2 padding-container bg-red-500 mt-5">
            <div className="p-5 gap-y-20">
                {
                   stores.map((store) => {
                    return (
                        <>
                            <div>
                                {store.name}
                            </div>
                        </>
                    )
                   })
                }
            </div>
            <div className="bg-green-500">Map Here</div>
        </section>
    </>
  )
}