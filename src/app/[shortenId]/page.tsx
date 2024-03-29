import axios from "axios";
import { notFound, redirect } from "next/navigation"; // Import redirect function

const getRedirectUrl = async (id: string) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_APP_URL || ""}/api/shorten?id=${id}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return { error: true };
  }
};

export default async function page({
  params,
}: {
  params: { shortenId: string };
}) {
  const redUrl = await getRedirectUrl(params.shortenId);

  if (!redUrl?.data || !redUrl?.data?.longUrl) {
    notFound();
  }

  redirect(redUrl.data.longUrl);
}
