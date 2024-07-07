import { Card, CardContent } from "@/components/ui/card";
import BucketCard from "@visit-it/components/bucket-card";

const buckets = [
  { bucketId: 1, name: 'Mexico', color: 'linear-gradient(45deg, rgb(147, 191, 159), rgb(85, 139, 121), rgb(57, 105, 94))'},
  { bucketId: 2, name: 'Japon', color: 'linear-gradient(45deg, rgb(34, 51, 102), rgb(68, 102, 153), rgb(102, 153, 204), rgb(136, 204, 238))' },
  { bucketId: 3, name: 'Costa Rica', color: 'linear-gradient(45deg, rgb(28, 28, 28), rgb(43, 4, 14))' },

];

export default async function Page() {

  return (
    <div className="h-full w-full">
      <Card className="h-full w-full p-5">
        <CardContent className="flex flex-row space-x-8">
          { buckets.map(bucket => <BucketCard {...bucket}></BucketCard>)}
        </CardContent>
      </Card>
    </div>
  );
}