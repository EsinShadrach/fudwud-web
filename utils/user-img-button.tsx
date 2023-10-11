import Image from "next/image";
import Link from "next/link";

export default function UserImageButton({
  imageUrl,
  username,
}: {
  imageUrl: string;
  username: string;
}) {
  return (
    <Link href="/profile">
      <Image
        width={42}
        height={42}
        className="rounded-lg hover:opacity-75 transition-all duration-300"
        alt={`${username}'s profile picture`}
        src={imageUrl!}
      />
    </Link>
  );
}
