import Image from 'next/image';
import Button from '../UI/Button/Button';

interface CardProps{
  img:any,
  date?:string,
  title?:string,
  description?:string
}

const Card: React.FC<CardProps> = ({img,date,title,description}) => {

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl rounded-none">
        <figure><Image src={img} alt={title} layout="intrinsic"/></figure>
        <div className="card-body items-center text-center">
          <span>{date}</span>
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Button content="Start Cooking >" onButtonClick={()=> console.log("clicked")} type="main"/>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;