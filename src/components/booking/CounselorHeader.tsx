interface CounselorHeaderProps {
  name: string;
  title: string;
  image: string;
}

export function CounselorHeader({ name, title, image }: CounselorHeaderProps) {
  return (
    <>
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt={name}
          className="w-full h-[200px] object-cover"
        />
      </div>
      <div className="p-6 pb-0">
        <h3 className="text-2xl font-bold text-[#1C160C] mb-1">{name}</h3>
        <p className="text-[#015C3B] font-medium">{title}</p>
      </div>
    </>
  );
}