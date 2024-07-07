

export interface BucketCardProps {
  bucketId: number
  name: string;
  color: string;
}
export default function BucketCard({ bucketId, name, color} : BucketCardProps){
  return (
    <div className="min-w-72 h-32 shadow-md transition ease-in-out  hover:duration-200 rounded-[25px] hover:transition-all  hover:rounded-[45px]" style={{background: color}}>
      <div className="w-full h-full flex flex-col justify-center align-middle p-5">
        <div className="mt-1">
          <p title={name} className="font-semibold text-lg"> {name}</p>
        </div>
      </div>
    </div>
  );
}