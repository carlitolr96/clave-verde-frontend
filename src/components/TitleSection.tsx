interface TitleProps {
  title: string;
  subTitle: string;
  font?: string;
  className?: string;
}

const Title = ({ title, subTitle, className, font = 'font-marcellus' }: TitleProps) => {
  return (
    <div>
      <h1 className={`text-4xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4 ${font} ${className ?? ''}`}>
        {title}
      </h1>
      <p className="max-w-130 mt-2 text-sm md:text-base">{subTitle}</p>
    </div>
  );
};

export default Title;
