import { Check, Trash } from "@phosphor-icons/react";

interface ListItemProps {
     task: string,
     isFinished: boolean,
     onFinish: () => void,
     onDelete: () => void
}

export function ListItem({ task, isFinished, onFinish, onDelete }: ListItemProps) {
     return (
          <div className="flex items-center gap-3 bg-[#262626] w-full h-16 px-5 rounded-lg">
               <button
                    className={`flex flex-1 items-center gap-3 ${isFinished ? "hover:cursor-not-allowed" : "cursor-pointer"}`}
                    onClick={onFinish}
                    disabled={isFinished}
               >
                    <span className={`flex justify-center items-center ${isFinished ? "bg-[#5E60CE]" : "border-2 border-[#4EA8DE]"} w-5 h-5 rounded-full`}>
                         {
                              isFinished &&
                              <Check size={10} color='#F2F2F2' />
                         }
                    </span>
                    <span className={`text-sm ${isFinished ? "text-[#808080] line-through" : "text-[#F2F2F2]"}`}>{task}</span>
               </button>
               <button
                    className="flex items-center justify-center"
                    onClick={onDelete}
               >
                    <Trash size={18} color='#808080' />
               </button>
          </div>
     )
}