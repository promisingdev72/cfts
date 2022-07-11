import Image from "next/image";

export default function Display({
  image,
  quality = 90,
  priority = false,
  addedClasses = "",
  w = undefined,
  h = undefined,
  optim = true,
  responsive = false,
  fixed = false,
  alt = undefined,
}) {
  if (!image) return null;
  const { data } = image;
  if (!data)
    return (
      <Image
        src={image}
        quality={quality}
        priority={priority}
        width={w}
        height={h}
        layout={responsive ? "responsive" : fixed ? "fixed" : "intrinsic"}
      />
    );
  const { attributes } = data;
  const { name, url, width, height } = attributes;
  return (
    <div className={addedClasses}>
      {optim ? (
        <Image
          alt={alt ? alt : name}
          src={url}
          quality={quality}
          priority={priority}
          width={w ? w : width}
          height={h ? h : height}
          layout={responsive ? "responsive" : fixed ? "fixed" : "intrinsic"}
        />
      ) : (
        <img src={url} alt={name} height={h} width={w} />
      )}
    </div>
  );
}
