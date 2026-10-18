import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";

export interface WorkInfoTextData {
  letter?: string;
  title: string;
  description: ReactNode;
  imageSrc?: string;
  mobileImageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  mobileImageRatio?: string;
}

export default function WorkInfoText({
  letter,
  title,
  description,
  imageSrc,
  mobileImageSrc,
  imageAlt,
  imageWidth = 388,
  imageHeight = 228,
  mobileImageRatio,
}: WorkInfoTextData) {
  const imageStyle = {
    "--img-ratio": mobileImageRatio ?? `${imageWidth} / ${imageHeight}`,
    "--img-w": `${imageWidth}px`,
    "--img-h": `${imageHeight}px`,
  } as CSSProperties;

  const alt = imageAlt ?? `${title} mockup`;
  const hasSeparateMobile = Boolean(mobileImageSrc && mobileImageSrc !== imageSrc);

  return (
    <div className="flex flex-col overflow-hidden rounded-[4px] bg-white min-[800px]:flex-row">
      {imageSrc && (
        <div
          style={imageStyle}
          className="relative aspect-[var(--img-ratio)] w-full shrink-0 min-[800px]:aspect-auto min-[800px]:h-[var(--img-h)] min-[800px]:w-[var(--img-w)]"
        >
          {hasSeparateMobile ? (
            <>
              <Image
                src={mobileImageSrc!}
                alt={alt}
                fill
                sizes="100vw"
                className="object-cover min-[800px]:hidden"
              />
              <Image
                src={imageSrc}
                alt={alt}
                fill
                sizes={`${imageWidth}px`}
                className="hidden object-cover min-[800px]:block"
              />
            </>
          ) : (
            <Image
              src={imageSrc}
              alt={alt}
              fill
              sizes={`(min-width: 800px) ${imageWidth}px, 100vw`}
              className="object-cover"
            />
          )}
        </div>
      )}

      <div className="work-info-text flex flex-1 flex-col items-start justify-center gap-1 bg-white">
        <h4 className="type-subtitle-2 w-full text-[#111111]">
          {letter ? `${letter}. ${title}` : title}
        </h4>
        <p className="type-body-2 w-full text-[#333333]">{description}</p>
      </div>
    </div>
  );
}