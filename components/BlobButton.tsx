import React from "react";

interface BlobButtonProps {
  children: React.ReactNode;
  variant?: "brown" | "black" | "dark" | "blue" | "outline";
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  href?: string;
  target?: string;
  rel?: string;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
}

export const BlobButton: React.FC<BlobButtonProps> = ({
  children,
  variant = "brown",
  className = "",
  onClick,
  href,
  target,
  rel,
  style,
  type,
}) => {
  const variantClassMap = {
    brown: "btn-blob-brown",
    black: "btn-blob-black",
    dark: "btn-blob-dark",
    blue: "btn-blob-blue",
    outline: "blob-btn-outline btn-blob-dark",
  };

  const combinedClass = `blob-btn ${variantClassMap[variant]} ${className}`;

  const innerContent = (
    <>
      <span className="relative z-10">{children}</span>
      <span className="blob-btn__inner" aria-hidden="true">
        <span className="blob-btn__blobs">
          <span className="blob-btn__blob" />
          <span className="blob-btn__blob" />
          <span className="blob-btn__blob" />
          <span className="blob-btn__blob" />
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={combinedClass}
        style={style}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={combinedClass}
      style={style}
    >
      {innerContent}
    </button>
  );
};
