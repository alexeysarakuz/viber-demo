import React from "react";
import Link from "next/link";

import { useContext } from "react";
import { GlobalContext } from "pages/_app";

const LocalizedLink = ({ children, href }) => {
  const {
    query: { lang },
  } = useContext(GlobalContext);

  return <Link href={`/${lang}${href}`}>{children}</Link>;
};

export default LocalizedLink;
