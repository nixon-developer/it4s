// IMPORT PACKAGES
import React from "react";
import { Helmet } from "react-helmet-async";

function MetaData({ title }) {
  return (
    <Helmet>
      <title>{`${title}  - IT 4 SUPPORTS | SYSTEM | SECURITY | SOFTWARE |`}</title>
    </Helmet>
  );
}

export default MetaData;
