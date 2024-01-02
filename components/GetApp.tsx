import Button from './Button'

const Cta = () => {
  return (
    <section className="padding-container py-20 bg-sky-700">
      <div className="max-container flex flex-col lg:flex-row lg:flexBetween gap-4 items-center">
        <div className="text-center">
          <p className="text-5xl text-white gap-3">Start Exploring Kabankalan Today</p>
        </div>
        <div className="flex flex-col w-full lg:w-auto lg:flex-row gap-3">
          <Button
            type="button"
            title="Get Started"
            variant="btn_dark_blue"
          />
        </div>
      </div>
    </section>
  )
}

export default Cta