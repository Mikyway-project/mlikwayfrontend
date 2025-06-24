import { Helmet, HelmetData } from "react-helmet-async";
import image from "../../../../public/favicon.png";
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
      <link rel="icon" type="image/png" href={image} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="경상남도 청소업체 은하수홈케어" />
      <meta
        property="og:description"
        content="경상남도 진주시를 연고로 하여 설립된지 올해로 10년, 업력은 짧아도 실력은 확실합니다."
      />
      <meta property="og:image" content={image2} />
      <meta name="twitter:card" content="summary" />
      <meta property="twitter:title" content="경상남도 청소업체 은하수홈케어" />
      <meta
        property="twitter:description"
        content="경상남도 진주시를 연고로 하여 설립된지 올해로 10년, 업력은 짧아도 실력은 확실합니다."
      />
      <meta property="twitter:image" content={image2} />
    </Helmet>
  );
};
