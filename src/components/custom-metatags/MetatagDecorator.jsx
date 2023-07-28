import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

const MetatagDecorator = ({
  // title,
  siteName,
  description,
  imageUrl,
  videoUrl,
  siteUrl,
  twitterCard,
  twitterImageAlt,
  themeColor,
}) => (
  <Helmet>
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content={siteName} />
    {/* <meta property="og:title" content={title} /> */}
    <meta property="og:description" content={description} />
    <meta property="og:image" content={imageUrl} />
    <meta property="og:video" content={videoUrl} />
    <meta name="theme-color" content={themeColor} />
    <meta property="og:url"
      // content={siteUrl + window.location.pathname + window.location.search}
      content={siteUrl}
    />
    <meta name="twitter:card" content={twitterCard} />
    <meta property="twitter:image:alt" content={twitterImageAlt} />

  </Helmet>
);

MetatagDecorator.defaultProps = {
  // title: "",
  siteName: "",
  description: "",
  imageUrl: "",
  videoUrl: "",
  siteUrl: "",
  twitterCard: "",
  twitterImageAlt: "",
  themeColor: "",
};

MetatagDecorator.propTypes = {
  // title: PropTypes.string,
  siteName: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  videoUrl: PropTypes.string,
  siteUrl: PropTypes.string,
  twitterCard: PropTypes.string,
  twitterImageAlt: PropTypes.string,
  themeColor: PropTypes.string,
};

export default MetatagDecorator;
