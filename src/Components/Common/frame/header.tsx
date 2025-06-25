import { Helmet, HelmetData } from "react-helmet-async";
import image2 from "@/Components/Common/assets/newhome/moving4.webp";

type HeadProps = {
  title?: string;
  description?: string;
};

const helmetData = new HelmetData({});

export const Head = ({ title = "", description = "" }: HeadProps = {}) => {
  return (
    <Helmet
      helmetData={helmetData}
      title={title ? `${title} | 은하수홈케어` : undefined}
      defaultTitle="경상도 청소업체 은하수홈케어"
    >
      <meta name="description" content={description} />
      <meta property="og:image" content={image2} />
      <meta property="twitter:image" content={image2} />
    </Helmet>
  );
};
