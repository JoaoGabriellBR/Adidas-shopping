import { XCircle } from "lucide-react"

export default function Cancel() {
    return (
        <div className="pt-20 gap-3 min-h-screen flex flex-col items-center">
            <XCircle className="w-20 h-20 text-red-500" />
            <h1>Compra cancelada.</h1>
        </div>
    )
}