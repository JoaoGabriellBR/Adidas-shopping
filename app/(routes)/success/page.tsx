import { CheckCircle2 } from "lucide-react"

export default function Success() {
    return (
        <div className="pt-20 gap-3 min-h-screen flex flex-col items-center">
            <CheckCircle2 className="w-20 h-20 text-green-500" />
            <h1>Compra efetuada com sucesso.</h1>
        </div>
    )
}