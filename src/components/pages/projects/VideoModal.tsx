import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

interface Props {
    children: React.ReactNode
    video: string
    title: string
}

export function VideoModal({ children, video, title }: Props) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] px-5">
                <DialogHeader className="mb-2">
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>


                <DialogDescription>
                    <video preload="auto" playsInline controls className='cursor-auto w-full h-full rounded-none block object-cover bg-transparent object-center'>
                        <source src={video} type="video/mp4" />
                    </video>
                </DialogDescription>

            </DialogContent>
        </Dialog>
    )
}
