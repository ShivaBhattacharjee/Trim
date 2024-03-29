import axios from "axios";
import { notFound, redirect } from "next/navigation"; // Import redirect function

const getRedirectUrl = async (id: string) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/shorten?id=${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return { error: true };
  }
};

export default async function page({ params }: { params: { shortenId: string } }) {
  const redUrl = await getRedirectUrl(params.shortenId);
  
  if (redUrl.error || !redUrl.data || !redUrl.data.longUrl) {
    // Handle error or invalid response here, redirect to an error page
    notFound()
  }

  redirect(redUrl.data.longUrl);
}