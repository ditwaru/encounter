interface Props {
    open: boolean;
    handleClick: () => void
}

export const Hamburger = ({ open, handleClick }: Props) => {

    if (open) {
        return null;
    }
    return (
        <svg className="hover:cursor-pointer" onClick={handleClick} width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    )
}