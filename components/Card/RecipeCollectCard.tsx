import Image from 'next/image';

interface RecipeCollectCardProps{
    imgSource:any,
    label:string
}

const RecipeCollectCard: React.FC<RecipeCollectCardProps> = ({imgSource,label}) => {

    return(
        <button className="flex flex-col items-center box-content mb-5 w-96" onClick={()=>console.log("clicked")}>
            <Image src={imgSource} alt="food" layout="intrinsic"/>
            <p>{label}</p>
        </button>
    );
}

export default RecipeCollectCard;