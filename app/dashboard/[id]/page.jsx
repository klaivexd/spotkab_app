import HeaderDashboard from "@/components/HeaderDashboard"

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
        <section>
            <div className="max-container flex text-center">
                <h3>{params.id}</h3>
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
        </section>
    </>
  )
}