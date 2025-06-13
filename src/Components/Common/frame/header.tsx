import { Helmet, HelmetData } from "react-helmet-async";

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
      <link rel="icon" type="image/png" href="/favicon.png" />
    </Helmet>
  );
};
