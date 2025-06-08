interface TitleProps {
  title: string;
  subTitle: string;
  font?: string;
}

const Title = ({ title, subTitle, font = 'font-playfair' }: TitleProps) => {
  return (
    <div className="">
      <h1 className={`text-4xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4 ${font}`}>{title}</h1>
      <p className="max-w-130 mt-2 text-sm md:text-base">{subTitle}</p>
    </div>
  );
};

export default Title;
