'use client'
import { useFormStatus } from 'react-dom';

export default function FormSubmit() {
    const status = useFormStatus();

    if (status.pending) {
        return (
            <button type="submit" className="btn-blue w-20 h-8 p-0 flex items-center justify-center" disabled>
                <span className="loading loading-infinity loading-sm" />
            </button>
        )
    }

    return (
        <button type="submit" className="btn-blue w-20 h-8 p-0">Tweet</button>
    )
}