import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CommissioningPage() {
    return (
        <div className="grid min-h-screen grid-cols-1 py-12 px-8">
            <div className="h-full">
                <div className="flex flex-col items-center p-8 h-full">
                    <iframe
                        src="/pdfs/cl02-sensor-commissioning.pdf"
                        frameborder="0"
                        width="100%"
                        height="100%"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}