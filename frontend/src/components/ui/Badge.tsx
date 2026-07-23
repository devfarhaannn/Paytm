interface BadgeProps {
    text: string;
    color?: "green" | "red" | "orange" | "blue";
  }
  
  export const Badge = ({
    text,
    color = "blue",
  }: BadgeProps) => {
    const colors = {
      green: "bg-green-100 text-green-700",
      red: "bg-red-100 text-red-700",
      orange: "bg-orange-100 text-orange-700",
      blue: "bg-indigo-100 text-indigo-700",
    };
  
    return (
      <span
        className={`rounded-full px-3 py-1 text-xs font-semibold ${colors[color]}`}
      >
        {text}
      </span>
    );
  };