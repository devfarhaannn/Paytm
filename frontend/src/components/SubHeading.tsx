
interface labelprops {
    label: string
}
export const SubHeading = ({ label }: labelprops) => {
    <div  className="text-slate-500 text-md pt-1 px-4 pb-4">
       {label}
    </div>
}