import { LoaderCircle } from "lucide-react";
export default function Loading() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <LoaderCircle height="40" width="40"className="animate-spin"/>
    </div>
  );
}
