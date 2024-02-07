export function NewNoteCard() {
  return(
    <div className="rounded-md text-left bg-slate-700 flex flex-col p-5 gap-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none">
      <span className="text-sm font-medium text-slate-200">
        Adicionar nota
      </span>
      <p className="text-sm leading-6 text-slate-400">Grave uma nota em áudio que será convertida para texto automaticamente</p>
    </div>

  )
}