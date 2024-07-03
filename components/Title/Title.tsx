import { TitleProps } from './Title.type'

export  function Title(props: TitleProps) {
  const { text, className } = props
  return (
    <div className={className}>
      <h1 className="text-3xl font-bold group-hover:text-accent-hover transition-all">{text}</h1>
      <div className="w-40 h-2 bg-accent rounded-full "></div>
      <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
    </div>
  )
}
