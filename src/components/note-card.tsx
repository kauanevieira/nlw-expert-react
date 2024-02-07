export function NoteCard() {
  return(
    <button className="rounded-md text-left bg-slate-800 flex flex-col p-5 gap-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none">
      <span className="text-sm font-medium text-slate-300">
        há 2 dias
      </span>
      <p className="text-sm leading-6 text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vitae quidem iure temporibus, asperiores quis eos similique cumque enim doloribus. Ducimus officia voluptatibus numquam illo nesciunt explicabo similique sapiente quasi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum laboriosam ipsam, tempore consequatur nihil necessitatibus reiciendis, dolor expedita eos facilis soluta. Sapiente modi blanditiis suscipit omnis illo quo ea fugiat.</p>
            
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  )
}