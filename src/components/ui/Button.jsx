const Button = ({ className , children, ...props }) => {
    return (
        <>
            <button className={`bg-sky-600 hover:bg-sky-800 text-white px-5 py-3 rounded-xl text-sm font-medium flex justify-center gap-3 items-center ${className}`}>
                {children}
            </button>
        </>
    );
}

export default Button