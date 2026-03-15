import { Check } from "lucide-react";

export default function Checkbox({checked}: {checked?: boolean}) {
    return (
        <div 
        className={`w-5 h-5 rounded border flex items-center justify-center transition-colors
        group-hover:border-white duration-400 ease-in-out
        ${checked
            ? "bg-white border-white text-blue-600"
            : "border-white/20 bg-transparent text-transparent"
        }
        `}>
            {checked && <Check size={14} strokeWidth={4}/>}
        </div>
    )
}