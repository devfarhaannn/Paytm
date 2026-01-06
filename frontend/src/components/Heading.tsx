
interface labelprops {
    label: string
}

export const Heading = ({ label }: labelprops) => {
    return <div className="font - bold text - 4xl pt-6">
       {label}
    </div>
}