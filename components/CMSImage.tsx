"use client";
import Image, { ImageLoaderProps, ImageProps } from "next/image";

type Props = ImageProps;

const CMSLoader = ({ src, width, quality }: ImageLoaderProps) => {
  const url = new URL(src);
  const params = url.searchParams;

  params.set("auto", params.get("auto") || "format");
  params.set("fit", params.get("fit") || "max");
  params.set("w", params.get("w") || width.toString());

  if (quality) {
    params.set("q", quality.toString());
  }

  return url.href;
};

function CMSImage(props: Props) {
  return <Image loader={CMSLoader} {...props} />;
}

export default CMSImage;
