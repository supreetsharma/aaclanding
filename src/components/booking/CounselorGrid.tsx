import { counselors } from '../../data/counselors';
import { CounselorCard } from './CounselorCard';

export function CounselorGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {counselors.map((counselor) => (
        <CounselorCard key={counselor.name} counselor={counselor} />
      ))}
    </div>
  );
}