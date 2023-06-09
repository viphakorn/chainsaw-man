"use client";
import ImageLoader from "@/imageLoader";
import NextImage, { ImageProps } from "next/image";

export default function Image(props: ImageProps) {
  return <NextImage {...props} loader={ImageLoader} />;
}
