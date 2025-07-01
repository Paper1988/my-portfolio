'use client'

export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
            <div className="flex flex-col items-center">
                <span className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mb-4"></span>
                <span className="text-lg font-semibold">載入中...</span>
            </div>
        </div>
    )
}
