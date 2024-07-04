

export default function LandingSection({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="snap-center">{children}</div>
  )
}
