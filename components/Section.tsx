import { ReactNode } from "react"

interface Props {
    children: ReactNode;
    className?: string;
}

export const Section = ({ children, className }: Props) => (
    <section className={`w-full relative ${className ?? ''}`}>{children}</section>
)