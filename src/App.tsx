import { ChangeEvent, useState } from 'react'
import logo from "./assets/Logo.png"
import { Check, ClipboardText, PlusCircle, Trash } from '@phosphor-icons/react'
import { ListItem } from './components/ListItem';

export function App() {
     const [task, setTask] = useState("")
     const [finishedTasks, setFinishedTasks] = useState<string[]>([]);
     const [createdTasks, setCreatedTasks] = useState<string[]>([]);

     function handleCreateTask(event: ChangeEvent<HTMLInputElement>) {
          setTask(event.target.value);
     }

     function handleAddNewTask() {
          setTask("");
          setCreatedTasks((prev) => [...prev, task]);
     }

     function handleFinishTask(taskIndex: number) {
          const findedTask = createdTasks[taskIndex];

          setFinishedTasks((prev) => [...prev, findedTask])
     }

     function handleDeleteTask(taskIndex: number) {
          const newTasksArray = createdTasks.filter((_, index) => index !== taskIndex);

          setCreatedTasks(newTasksArray);
     }

     return (
          <main className="w-screen min-h-screen bg-[#1A1A1A] flex flex-col items-center font-inter">
               <section className="w-full h-40 bg-[#0D0D0D] flex justify-center items-center">
                    <img src={logo} alt="todo" />
               </section>
               <section className="flex flex-col  w-5/6 -mt-6 lg:w-2/3 xl:w-3/5 2xl:w-2/5">
                    <article className="flex gap-3">
                         <input
                              type="text"
                              className='flex-1 rounded-lg bg-[#262626] border border-[#0D0D0D] text-[#808080] px-5'
                              placeholder='Adicione uma nova tarefa'
                              onChange={handleCreateTask}
                              value={task}
                         />
                         <button
                              className='bg-[#1E6F9F] text-slate-50 py-3 px-4 rounded-lg font-semibold flex items-center gap-2 outline-0 transition-all ease-in-out duration-75
                               disabled:cursor-not-allowed disabled:brightness-50'
                              onClick={handleAddNewTask}
                              disabled={task === ""}
                         >
                              Criar
                              <PlusCircle />
                         </button>
                    </article>
               </section>
               <section className="flex flex-col w-5/6 mt-6 lg:w-2/3 xl:w-3/5 2xl:w-2/5">
                    <article className="flex gap-3 justify-between py-6 border-b border-[#333333]">
                         <div className="flex items-center gap-2">
                              <span className='text-[#4EA8DE] font-bold text-sm'>Tarefas criadas</span>
                              <span className='bg-[#333333] text-slate-50 px-2 rounded-full text-sm'>{createdTasks.length}</span>
                         </div>
                         <div className="flex items-center gap-2">
                              <span className='text-[#8284FA] font-bold text-sm'>Concluídas</span>
                              <span className='bg-[#333333] text-slate-50 px-2 rounded-full text-sm'>{finishedTasks.length}</span>
                         </div>
                    </article>
                    {
                         createdTasks.length === 0 ?
                              (
                                   <article className="flex flex-col justify-center items-center mt-10">
                                        <ClipboardText size={70} color='#333333' />
                                        <span className="font-bold text-[#808080] text-sm mt-3">Você ainda não tem tarefas cadastradas</span>
                                        <span className="text-[#808080] text-sm">Crie tarefas e organize itens a fazer</span>
                                   </article>
                              ) :
                              (
                                   <article className="flex flex-col justify-center items-center mt-10 gap-3">
                                        {
                                             createdTasks.map((task, index) => (
                                                  <ListItem
                                                       task={task}
                                                       isFinished={finishedTasks.includes(task)}
                                                       onFinish={() => handleFinishTask(index)}
                                                       onDelete={() => handleDeleteTask(index)}
                                                  />
                                             ))
                                        }
                                   </article>
                              )
                    }
               </section>
          </main>
     )
}

