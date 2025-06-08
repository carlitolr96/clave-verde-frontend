interface TitleProps {
  title: string;
  subTitle: string;
  align?: 'center' | 'left';
  font?: string;
}

const Title = ({ title, subTitle, align = 'center', font = 'font-playfair' }: TitleProps) => {
  return (
    <div className={`flex flex-col justify-center text-center ${align === 'left' ? 'md:items-start md:text-left' : 'items-center'}`}>
      <h1 className={`text-4xl md:text-[40px] ${font}`}>{title}</h1>
      <p className="text-sm md:text-base text-gray-500/90w mt-2 max-w-174">{subTitle}</p>
    </div>
  );
};

export default Title;
