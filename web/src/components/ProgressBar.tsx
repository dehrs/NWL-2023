interface ProgressBarProps {
  progress: number
}

export function ProgressBar(props:ProgressBarProps){
  console.log(props.progress)
  return ( 
    <div className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>
      <div className='h-3 rounded-xl bg-violet-600 w-3/4 transition-all'
      role='progressbar'
      aria-label="Progresso de hábitos completados nesse dia"
      aria-valuenow={props.progress}
      style={{
        width: `${props.progress}%`
      }}
      />
    </div>
  )
}