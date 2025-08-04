'use client';
import { useState } from "react";
import Image from "next/image";

const SafeImage = ({ src, fallback, alt, width, height, className }: { src: string, fallback: string, alt: string, width: number, height: number, className: string }) => {
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <Image
            src={imgSrc}
            alt={alt}
            onError={() => setImgSrc(fallback)}
            unoptimized={true}
            width={width}
            height={height}
            className={className}
        />
    );
}
export default SafeImage